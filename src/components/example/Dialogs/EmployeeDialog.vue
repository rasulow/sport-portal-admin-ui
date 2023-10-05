<template>
  <v-card
      style="padding: 20px !important"
  >
    <!-- Close dialog -->
    <v-row no-gutters style="margin-bottom: 20px">
      <div style="font-weight: 500; font-size: 25px">Full information</div>
      <v-spacer/>
      <v-btn
          icon
          @click="$emit('close-dialog')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" md="4" sm="4">
        <v-text-field
            outlined
            readonly
            dense
            label="name"
            :value="info.name"
            class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="4" sm="4">
        <v-text-field
            outlined
            readonly
            dense
            label="job"
            :value="info.job"
            class="mx-1"
        />
      </v-col>
      <v-col cols="12" md="4" sm="4">
        <v-text-field
            outlined
            readonly
            dense
            label="workAt"
            :value="info.workAt"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import BASE_URL from "@/utils/url";

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