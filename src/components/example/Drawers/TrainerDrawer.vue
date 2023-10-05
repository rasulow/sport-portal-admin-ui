<template>
    <div>
        <v-text-field
            outlined
            dense
            label="name"
            v-model="trainer.name"
            class="mt-1"
        />
        <v-text-field
            outlined
            dense
            label="job"
            v-model="trainer.job"
        />
        <v-text-field
            outlined
            dense
            label="birthPlace"
            v-model="trainer.birthPlace"
        />
        <v-text-field
            outlined
            dense
            label="sportLevel"
            v-model="trainer.sportLevel"
        />
        <v-row no-gutters>
            <v-col cols="12" md="4" sm="4" xs="4">
                <v-text-field outlined dense label="age" v-model="trainer.age" class="mr-1"/>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
                <v-text-field outlined dense label="experience" v-model="trainer.experience" class="mx-1"/>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
                <v-text-field outlined dense label="rating" v-model="trainer.rating" class="mx-1"/>
            </v-col>
        </v-row>
        <v-text-field outlined dense label="made" v-model="trainer.made" class="ml-1"/>

        <div style="font-weight: 700; margin-bottom: 10px">worked At:</div>
            <v-row no-gutters 
                v-for="(item, i) in workedAt"
                :key="i"
                class="mb-3"
            >
                <v-text-field
                    v-model="item.value"
                    outlined
                    dense
                    hide-details
                    style="width: 25px !important;"
                />
                <v-btn icon>
                    <v-icon @click="removeItem('work', i)">mdi-close</v-icon>
                </v-btn>
            </v-row>
            <v-btn height="25" outlined @click="addItem('work')">add work</v-btn>

            <div style="font-weight: 700; margin-bottom: 10px; margin-top: 10px">badges:</div>
            <v-row no-gutters 
                v-for="(item, i) in badges"
                :key="i"
                class="mb-3"
            >
                <v-text-field
                    v-model="item.value"
                    outlined
                    dense
                    hide-details
                    style="width: 25px !important;"
                />
                <v-btn icon>
                    <v-icon @click="removeItem('badge', i)">mdi-close</v-icon>
                </v-btn>
            </v-row>
            <v-btn height ="25" outlined @click="addItem('badge')">add work</v-btn>

            <v-combobox
                dense
                outlined
                label="federation"

                v-model="federation"
                :items="federations"
                item-text="nameTm"
                class="mt-5"
            />

            <v-file-input
                v-model="file"
                color="deep-purple accent-4"
                label="photo"
                prepend-icon="mdi-paperclip"
                outlined
                hide-details
                dense
                class="mb-3"
            /> 
            <v-btn outlined width="100%" class="mt-3" @click="saveInfo">Save</v-btn>

        </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data: () => ({
        trainer: {},
        workedAt: [],
        badges: [],
        federations: [],
        federation: null,
        file: null,
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
    }),
    created() {
        this.getFederations()
    },
    methods: {
        addItem(type) {
            if (type == 'work') {
                this.workedAt.push({ value: '' })
            }
            if (type == 'badge') {
                this.badges.push({ value: '' })
            }
        },
        removeItem(type, id) {
            if(type == 'work') {
                this.workedAt.splice(id, 1)
            }
            if (type == 'badge') {
                this.badges.splice(id, 1)
            }
        },

        async getFederations() {
            await axios.get('/federations/', { params: { take: 100 } })

            .then((res) => {
                this.federations = res.data.data
            })
            .catch((err) => {
                console.log(err)
            })
        },

        async saveInfo() {
            let formData = new FormData();

            formData.append('age', Number(this.trainer.age))
            formData.append('job', this.trainer.job)
            formData.append('name', this.trainer.name)
            formData.append('made', this.trainer.made)
            formData.append('rating', Number(this.trainer.rating))
            formData.append('experience', Number(this.trainer.experience))
            formData.append('birthPlace', this.trainer.birthPlace)
            formData.append('sportLevel', this.trainer.sportLevel)
            formData.append('links', {})
            formData.append('federationId', this.federation.id)
            formData.append('photo', this.file)
            
            let workedAt = []
            let badges = []
            for (let i = 0; i < this.workedAt.length;i++) {
                workedAt.push(this.workedAt[i].value)
            }
            for (let i = 0; i < this.badges.length;i++) {
                badges.push(this.badges[i].value)
            }

            formData.append('workedAt', workedAt)
            formData.append('badges', badges)


            await axios.post('/federation-trainers/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(() => {
                this.Toast.fire({
                    icon:'success',
                    title: 'Successfully saved'
                })
                this.$emit('close-nav-drawer')
            })
            .catch((err) => {
                this.Toast.fire({
                    icon:'error',
                    title: 'Something went wrong'
                })
                console.log(err)
                this.$emit('close-nav-drawer')
            })
        }
    }
}
</script>

<style scoped>

</style>