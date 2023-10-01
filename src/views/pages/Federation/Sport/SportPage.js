import SideBar from '@/components/sidebar/SideBar';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data: () => ({
        headers: ['id', 'federation', 'president', 'location', 'tel', 'action'],
        sports: [],
        sport: {},
        dialog: false,
        dialogItem: {},
        drawer: false,
        federations: [],
        Toast: Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
        }),
        info: {}
    }),
    created() {
        this.getSports(),
        this.getFederations()
    },
    methods: {
        async openDialog(item) {
            this.info = item
            this.dialog = !this.dialog
        },

        async getFederations() {
            await axios.get('/federations/')
            .then((res) => {
                this.federations = res.data.data
            })
            .catch((err) => {
                console.log(err)
            })
        },

        async getSports() {
            await axios.get('/federation-sports/', { params: { take: 100 } })
            .then((res) => {
                this.sports = res.data.data
            })
            .catch((err) => {
                console.log(err)
            }) 
        },

        async updateSport(item)  {
            this.sport.id = item.id
            this.sport.president = item.president
            this.sport.leader = item.leader
            this.sport.founded = item.founded
            this.sport.location = item.location
            this.sport.tel = item.tel
            this.sport.fax = item.fax
            this.sport.email = item.email
            this.sport.web = item.web
            this.sport.federation = item.federation
            this.drawer = !this.drawer
        },

        async saveSport() {
            if (this.sport.id === undefined) {
                axios.post('/federation-sports/', {
                    president: this.sport.president,
                    leader: this.sport.leader,
                    founded: this.sport.founded,
                    location: this.sport.location,
                    tel: this.sport.tel,
                    fax: this.sport.fax,
                    email: this.sport.email,
                    web: this.sport.web,
                    federationId: this.sport.federation.id
                })
                .then(() => {
                    this.getSports()
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'success',
                        title: 'Successfully saved'
                    })
                    this.sport = {}
                })
                .catch((err) => {
                    console.log(err)
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'error',
                        title: 'Something went wrong'
                    })
                    this.sport = {}
                }) 
            } else {
                axios.patch('/federation-sports/' + this.sport.id + '/', {
                    president: this.sport.president,
                    leader: this.sport.leader,
                    founded: this.sport.founded,
                    location: this.sport.location,
                    tel: this.sport.tel,
                    fax: this.sport.fax,
                    email: this.sport.email,
                    web: this.sport.web,
                    federationId: this.sport.federation.id
                })
                .then(() => {
                    this.getSports()
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'success',
                        title: 'Successfully updated'
                    })
                    this.sport = {}
                })
                .catch((err) => {
                    console.log(err)
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'error',
                        title: 'Something went wrong'
                    })
                    this.sport = {}
                })
            }
        },

        async deleteSport(id) {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#7FBA5E',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((res) => {
                if (res.isConfirmed) {
                    axios.delete('/federation-sports/' + id + '/')
                    .then(() => {
                        this.getSports()
                        this.Toast.fire({
                            icon:'success',
                            title: 'Successfully deleted'
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        this.Toast.fire({
                            icon:'error',
                            title: 'Something went wrong'
                        })
                    })
                }
            })
        }
    },
    computed: {
    },
    components: {
        SideBar,
    }
}