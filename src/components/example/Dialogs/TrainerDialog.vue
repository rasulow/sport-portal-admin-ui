<template>
    <v-row no-gutters>
        <v-col cols="12" md="12" sm="12" xs="12">
            <!-- name job -->
            <v-row no-gutters>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="name"
                        :value="info.name"
                        class="mr-1"
                    />
                </v-col>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="job"
                        :value="info.job"
                        class="ml-1"
                    />
                </v-col>
            </v-row>

            <!-- birthPlace sportLevel -->
            <v-row no-gutters>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="birthPlace"
                        :value="info.birthPlace"
                        class="mr-1"
                    />
                </v-col>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="sportLevel"
                        :value="info.sportLevel"
                        class="ml-1"
                    />
                </v-col>
                
            </v-row>

            <!-- age rating experience made -->
            <v-row no-gutters>
                <v-col cols="12" md="3" sm="3">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="age"
                        :value="info.age"
                        class="mr-1"
                    />
                </v-col>
                <v-col cols="12" md="3" sm="3">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="rating"
                        :value="info.rating"
                        class="mx-1"
                    />
                </v-col>
                <v-col cols="12" md="3" sm="3">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="experience"
                        :value="info.experience"
                        class="mx-1"
                    />
                </v-col>
                <v-col cols="12" md="3" sm="3">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="made"
                        :value="info.made"
                        class="ml-1"
                    />
                </v-col>
            </v-row>

            <!-- workedAt badges -->
            <v-row no-gutters>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <div style="font-weight: 700; margin-bottom: 10px">workedAt:</div>
                    <v-text-field
                        outlined
                        dense
                        readonly
                        v-for="(item, i) in info.workedAt"
                        :key="i"
                        :value="item"
                        hide-details
                        class="mb-3 mr-1"    
                    />
                </v-col>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <div style="font-weight: 700; margin-bottom: 10px">badges:</div>
                    <v-text-field
                        outlined
                        dense
                        readonly
                        v-for="(item, i) in info.badges"
                        :key="i"
                        :value="item"
                        class="mb-3 ml-1"
                        hide-details
                    />
                </v-col>
            </v-row>

            <!-- federation -->
            <v-row no-gutters class="mt-3">
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="federation nameTm"
                        :value="info.federation.nameTm"
                        class="mr-1"
                    />
                </v-col>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="federation nameRu"
                        :value="info.federation.nameRu"
                        class="ml-1"
                    />
                </v-col>
            </v-row>

            <v-img :src="url + '/' + info.imagePath" max-height="250" max-width="500"/>

        </v-col>
    </v-row>
</template>


<script>
import BASE_URL from '@/utils/url'

export default {
    data: () => ({
        url: BASE_URL
    }),
    props: {
        info: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped> 
</style>