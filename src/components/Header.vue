<template>
    <div>
        <v-toolbar color="#B71C1C" fixed v-if="!isMobile">
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
                            <v-list-tile-title>Cocktail dinatoire</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile style="color:white"
                        @click="navigateTo({name: 'misesenbouche'})">
                            <v-list-tile-title>Mises en bouche</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile style="color:white"
                        @click="navigateTo({name: 'cocktailschaudsfroidssucres'})">
                            <v-list-tile-title>Cocktails chauds/froids/sucrés</v-list-tile-title>
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
                    @click="navigateTo({name : 'servicetraiteur'})">
                    Plats en livraison
                </v-btn>
                <v-btn flat dark class="font-button2"
                    @click="navigateTo({name : 'venteaemporter'})">
                    Vente à emporter
                </v-btn>
                </v-toolbar-items>
        </v-toolbar>

        <v-toolbar color="red" fixed v-if="isMobile">
            <v-toolbar-side-icon color="white" @click="drawer=!drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-navigation-drawer temporary app v-model="drawer" dark>
            <v-list>
                <v-list-tile>
                    <v-btn flat dark class="font-button1"
                        @click="navigateTo({name : 'home'})">
                        Accueil
                    </v-btn>
                </v-list-tile>
                <v-list-tile>
                    <v-menu offset-x>
                        <v-btn
                                slot="activator"
                                flat dark class="font-button1">
                                Cocktails
                        </v-btn>
                        <v-list dense dark>
                            <v-list-tile style="color:white"
                            @click="navigateTo({name: 'cocktailsdinatoires'})">
                                <v-list-tile-title>Cocktail dinatoire</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile style="color:white"
                            @click="navigateTo({name: 'misesenbouche'})">
                                <v-list-tile-title>Mises en bouche</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile style="color:white"
                            @click="navigateTo({name: 'cocktailschaudsfroidssucres'})">
                                <v-list-tile-title>Cocktails chauds/froids/sucrés</v-list-tile-title>
                            </v-list-tile>
                            </v-list>
                    </v-menu>
                </v-list-tile>
                <v-list-tile>
                    <v-menu offset-x>
                        <v-btn
                                slot="activator"
                                flat dark class="font-button1">
                                Réceptions
                        </v-btn>
                        <v-list dark dense>
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
                </v-list-tile>
                <v-list-tile>
                    <v-btn flat dark class="font-button2"
                    @click="navigateTo({name : 'servicetraiteur'})">
                    Plats en livraison
                    </v-btn>
                </v-list-tile>
                <v-list-tile>
                    <v-btn flat dark class="font-button2"
                    @click="navigateTo({name : 'venteaemporter'})">
                    Vente à emporter
                    </v-btn>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data: () => ({
    isMobile: false,
    drawer: false
  }),
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    onResize () {
      if (window.innerWidth < 920) {
        this.isMobile = true
      } else if (window.innerWidth >= 800) {
        this.drawer = false
        this.isMobile = false
      }
    }
  }
}
</script>
<style scoped>
</style>
