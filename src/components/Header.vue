<template>
    <v-toolbar fixed color="#B71C1C">
        <v-toolbar-items>
            <v-btn flat dark class="font-button1"
                @click="navigateTo({name : 'home'})">
                Accueil
            </v-btn>
            <v-menu offset-y open-on-hover>
                <v-btn
                        slot="activator"
                        flat dark class="font-button1">
                        Cocktails
                </v-btn>
                <v-list dense class="red darken-4">
                    <v-list-tile style="color:white"
                    @click="navigateTo({name: 'cocktailsdinatoires'})">
                    <v-list-tile-title>Cocktails dinatoires</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile style="color:white"
                    @click="navigateTo({name: 'misesenbouche'})">
                    <v-list-tile-title>Mises en bouche</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile style="color:white"
                    @click="navigateTo({name: 'repasdinatoire'})">
                    <v-list-tile-title>Repas dînatoire</v-list-tile-title>
                    </v-list-tile>
                    </v-list>
            </v-menu>
            <v-menu offset-y open-on-hover>
                <v-btn
                        slot="activator"
                        flat dark class="font-button1">
                        Menus
                </v-btn>
                <v-list class="red darken-4" dense>
                    <v-list-tile style="color:white"
                    @click="navigateTo({name: 'menuterroir'})">
                    <v-list-tile-title>Menu du terroir</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile style="color:white"
                    @click="navigateTo({name: 'menusaveurs'})">
                    <v-list-tile-title>Menu saveurs</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile style="color:white"
                    @click="navigateTo({name: 'menuenvie'})">
                    <v-list-tile-title>Menu selon vos envies</v-list-tile-title>
                    </v-list-tile>
                    </v-list>
            </v-menu>
            <v-menu offset-y open-on-hover>
                <v-btn
                        slot="activator"
                        flat dark class="font-button1">
                        Réceptions
                </v-btn>
                <v-list class="red darken-4" dense>
                    <v-list-tile style="color:white"
                    @click="navigateTo({name: 'barbecueparty'})">
                    <v-list-tile-title>Barbecue party</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile style="color:white"
                    @click="navigateTo({name: 'buffetfroid'})">
                    <v-list-tile-title>Buffet froid</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile style="color:white"
                    @click="navigateTo({name: 'soireeatheme'})">
                    <v-list-tile-title>Soirées à thème</v-list-tile-title>
                    </v-list-tile>
                    </v-list>
            </v-menu>
            <v-btn flat dark class="font-button2"
                @click="navigateTo({name : 'courscuisine'})">
                Cours de cuisine
            </v-btn>
            <v-btn flat dark class="font-button2"
                @click="navigateTo({name : 'photosprestations'})">
                Photos prestations
            </v-btn>
            </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
    .font-button1 {
        font-size: 1vw;
        width:8vw;
    }
    .font-button2 {
        font-size: 1vw;
        width:13vw;
    }
</style>
