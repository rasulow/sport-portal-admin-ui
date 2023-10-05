<template>
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
                @click="$emit('open-nav-drawer')"
            >
                <v-icon color="#0088FF"> {{ icon }} </v-icon>
                +
            </v-btn>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                required: true,
            }
        },
        methods: {
            emitOpenNavDrawer() {
                this.$emit('open-nav-drawer');
            }
        }
    }
</script>
    