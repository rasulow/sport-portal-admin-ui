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
                    style="color: #7FBA5E; border: 1px solid #7FBA5E; background-color: transparent"
                    @click="drawer = !drawer"
                >
                    <v-icon color="#7FBA5E"> mdi-account-group-outline </v-icon>
                    +
                </v-btn>
            </v-row>
            </v-card>

            <v-card
                elevation="0"
                color="white"
                width="100%"
                height="835px"
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
                                v-for="(item, i) in users"
                                :key="i"
                                :style="i % 2 == 0 ? 'background-color: #F2F2F7': ''"
                                class="table-row"
                            >
                                <td>{{ i + 1 }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.surname }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.password }}</td>
                                <td>
                                    <v-btn icon x-small @click="updateUser(item)">
                                        <v-icon color="orange" size="20">mdi-pencil-outline</v-icon>
                                    </v-btn>
                                    <v-btn icon x-small @click="deleteUser(item.id)">
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
                <div style="font-size: 20px; margin-bottom: 10px; font-weight: 500">Add User</div>
                <v-text-field dense class="mt-1 mb-n1" outlined label="Name" v-model="user.name"/>
                <v-text-field dense class="mb-n1" outlined label="Surname" v-model="user.surname"/>
                <v-text-field dense class="mb-n1" outlined label="Email" v-model="user.email"/>
                <v-text-field dense class="mb-n1" outlined label="Password" v-model="user.password"/>
                <v-btn
                    dense
                    elevation="0"
                    width="100%"
                    style="background-color: transparent; border: 1px solid #7FBA5E; color: #7FBA5E; font-size: 18px"
                    @click="saveUser"
                >
                    Save
                </v-btn>
            </v-navigation-drawer>
        </div>

    </v-app>
</template>

<script src="./UsersPage.js"/>

<style scoped src="./UsersPage.css"/>