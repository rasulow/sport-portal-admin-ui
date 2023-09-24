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
                    <v-icon color="#0088FF"> mdi-alpha-s-circle-outline </v-icon>
                    +
                </v-btn>
            </v-row>
            </v-card>
        </div>
    </v-app>
</template>

<script src="./SportPage.js"/>

<style scoped src="./SportPage.css">