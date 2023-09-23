<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
        <SideBar/>
        <div style="margin: 20px">
            <v-card
                elevation="0"
                color="white"
                width="100%"
                style="border-radius: 10px; padding: 15px"
            >
                <v-row no-gutters>
                <v-spacer/>
                <v-btn
                    elevation="0"
                    style="color: #0088FF; border: 1px solid #0088FF; background-color: transparent"
                    @click="drawer = !drawer"
                >
                    <v-icon color="#0088FF"> mdi-flag-variant-outline </v-icon>
                    +
                </v-btn>
            </v-row>
            </v-card>

            <v-card
                elevation="0"
                color="white"
                width="100%"
                style="border-radius: 10px; margin-top: 20px"
            >   
                <v-simple-table
                    dense
                >
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th
                                    v-for="(item, i) in headers"
                                    :key="i"
                                >
                                    {{ item }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, i) in federations"
                                :key="i"
                                :style="i % 2 == 0 ? 'background-color: #F2F2F7': ''"
                                class="table-row"
                            >
                                <td>{{ item.id }}</td>
                                <td>{{ item.nameTm }}</td>
                                <td>{{ item.nameRu }}</td>
                                <td>
                                    <v-btn icon x-small @click="updateFederation(item)">
                                        <v-icon color="orange" size="20">mdi-pencil-outline</v-icon>
                                    </v-btn>
                                    <v-btn icon x-small @click="deleteFederation(item.id)">
                                        <v-icon color="red" size="20">mdi-delete-outline</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>


            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
                width="400"
                class="pa-8"
            >
                <div style="font-size: 20px; margin-bottom: 10px; font-weight: 500">Add Federation</div>
                <v-text-field dense class="mt-1 mb-n1" outlined label="nameTm" v-model="federation.nameTm"/>
                <v-text-field dense class="mb-n1" outlined label="nameRu" v-model="federation.nameRu"/>
                <v-btn
                    dense
                    elevation="0"
                    width="100%"
                    style="background-color: transparent; 
                    border: 1px solid #0088FF; color: #0088FF; font-size: 18px; font-weight: 300;"
                    @click="saveFederation"
                >
                    Save
                </v-btn>
            </v-navigation-drawer>
        </div>
    </v-app>
</template>

<script src="./FederationPage.js"/>

<style scoped src="./FederationPage.css"/>