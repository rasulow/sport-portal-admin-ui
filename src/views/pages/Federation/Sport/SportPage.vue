<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
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
                        <v-icon color="#0088FF"> mdi-alpha-s-circle-outline </v-icon>
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
                                v-for="(item, i) in sports"
                                :key="i"
                                :style="i % 2 == 0 ? 'background-color: #F2F2F7': ''"
                                class="table-row"
                                
                            >   
                                <td @click="openDialog(item)">{{ i + 1 }}</td>

                                <td @click="openDialog(item)">{{ item.federation.nameTm }}</td>
                                <td @click="openDialog(item)">{{ item.president }}</td>
                                <td @click="openDialog(item)">{{ item.location }}</td>
                                <td @click="openDialog(item)">{{ item.tel }}</td>

                                <td>
                                    <v-btn icon x-small @click="updateSport(item)">
                                        <v-icon color="orange" size="20">mdi-pencil-outline</v-icon>
                                    </v-btn>
                                    <v-btn icon x-small @click="deleteSport(item.id)">
                                        <v-icon color="red" size="20">mdi-delete-outline</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>

            <v-dialog 
                v-model="dialog"
                max-width="30%"
            >
                <v-card
                    elevation="0"
                    class="pa-8" 
                >
                    <v-row 
                        no-gutters
                        style="font-size: 20px;font-weight: 500;margin-bottom: 25px"
                    >
                        Full information
                    </v-row>
                    <v-row 
                        no-gutters
                        v-for="(value, key) in info"
                        :key="key"
                    >
                        <v-text-field
                            outlined
                            readonly
                            dense
                            :label="key"
                            :value="info[key]"
                            v-if="key != 'id' && key != 'createdAt' 
                            && key != 'updatedAt' && key != 'federation'
                            && key != 'federationId'"
                        />
                        
                    </v-row>
                    <v-row 
                        no-gutters
                        v-for="i in 2"
                        :key="i"
                    >
                        <v-text-field
                            auto-grow
                            outlined
                            readonly
                            dense
                            :label="i == 1 ? 'federationTm' : 'federationRu'"
                            :value="i == 1 ? info?.federation?.nameTm : info?.federation?.nameRu"
                        />
                    </v-row>
                </v-card>
            </v-dialog>

            
            <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary
                    right
                    width="400"
                    class="pa-8"
                >
                    <div style="font-size: 20px; margin-bottom: 10px; font-weight: 500">Add sport federation</div>
                    <v-text-field dense class="mt-1 mb-n1" outlined label="president" v-model="sport.president"/>
                    <v-text-field dense class="mb-n1" outlined label="leader" v-model="sport.leader"/>
                    <v-text-field dense class="mb-n1" outlined label="founded" v-model="sport.founded"/>
                    <v-text-field dense class="mb-n1" outlined label="location" v-model="sport.location"/>
                    <v-text-field dense class="mb-n1" outlined label="tel" v-model="sport.tel"/>
                    <v-text-field dense class="mb-n1" outlined label="fax" v-model="sport.fax"/>
                    <v-text-field dense class="mb-n1" outlined label="email" v-model="sport.email"/>
                    <v-text-field dense class="mb-n1" outlined label="web" v-model="sport.web"/>
                    <v-combobox 
                        dense 
                        outlined 
                        label="federation" 
                        v-model="sport.federation"
                        :items="federations"
                        item-text="nameTm"
                    />
                    <v-btn
                        dense
                        elevation="0"
                        width="100%"
                        style="background-color: transparent; 
                        border: 1px solid #0088FF; color: #0088FF; font-size: 18px; font-weight: 300;"
                        @click="saveSport"
                    >
                        Save
                    </v-btn>
            </v-navigation-drawer>
        </div>
    </v-app>
</template>

<script src="./SportPage.js"/>

<style scoped src="./SportPage.css"/>