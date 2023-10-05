<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div style="margin: 20px">
      <nav-button
          icon="mdi-card-account-details-outline"
      />

      <employee-table
          :employees="employees"
          :headers="headers"
          @delete-success="closeNavBar"
          @show-full-info="openDialog"
      />

      <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="50%"
      >
        <employee-dialog
            :info="info"
            @close-dialog="dialog = !dialog"
        />
      </v-dialog>
    </div>
  </v-app>
</template>


<script src="./EmployeePage.js"/>

<style scoped src="./EmployeePage.css"/>