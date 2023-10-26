<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div style="margin: 20px">
      <nav-button
          icon="mdi-web"
          :showType="true"
          @change-type="getNews"
          @open-nav-drawer="drawer = !drawer"
      />

      <news-table
          :news="news"
          :headers="headers"
          @show-full-info="openDialog"
          @delete-success="closeNavDrawer"
      />

      <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="35%"
      >
        <news-dialog
            :info="info"
            @close-dialog="dialog = false"
        />
      </v-dialog>

      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          right
          width="500"
          class="pa-8"
      >
        <news-drawer
          @close-nav-drawer="closeNavDrawer"
        />
      </v-navigation-drawer>
    </div>
  </v-app>
</template>

<script src="./NewsPage.js"/>

<style scoped src="./NewsPage.css"/>