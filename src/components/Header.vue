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
                        @click="navigateTo({name: 'planchaparty'})">
                            <v-list-tile-title>Plancha Party</v-list-tile-title>
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
                <v-spacer></v-spacer>
                <v-btn flat dark class="font-button2"
                    @click="navigateTo({name : 'photosprestations'})">
                    Photos prestations
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
                                Menus
                        </v-btn>
                        <v-list dark dense>
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
                            @click="navigateTo({name: 'barbecueparty'})">
                                <v-list-tile-title>Barbecue party</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile style="color:white"
                            @click="navigateTo({name: 'planchaparty'})">
                                <v-list-tile-title>Plancha Party</v-list-tile-title>
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
                </v-list-tile>
                <v-list-tile>
                    <v-btn flat dark class="font-button2"
                    @click="navigateTo({name : 'courscuisine'})">
                    Cours de cuisine
                    </v-btn>
                </v-list-tile>
                <v-list-tile>
                    <v-btn flat dark class="font-button2"
                    @click="navigateTo({name : 'photosprestations'})">
                    Photos prestations
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
      drawer: false,
      cocktails: [
          {
              name: 'Cocktail dinatoire',
              path: 'cocktailsdinatoires'
          },
          {
              name: 'Mises en bouche',
              path: 'misesenbouche'
          },
          {
              name: 'Cocktails chauds/froids/sucrés',
              path: 'cocktailschaudsfroidssucres'
          }
      ],
      menus: [
          {
              name:'Menu du terroir',
              path: 'menuterroir'
          },
          {
              name: 'Menu saveurs',
              path: 'menusaveurs'
          },
          {
              name: 'Menu selon vos envies',
              path: 'menuenvie'
          }
      ],
      receptions: [
          {
              name: 'Barbecue party',
              path: 'barbecueparty'
          },
          {
              name: 'Plancha party',
              path: 'planchaparty'
          },
          {
              name:'Buffet froid',
              path: 'buffetfroid'
          },
          {
              name: 'Soirées à thème',
              path: 'soireeatheme'
          }
      ]
  }),

  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    onResize() {
        if (window.innerWidth < 800) {
            this.isMobile = true;
        }
        else if (window.innerWidth>=800 && this.drawer===true) {
            this.drawer = false;
            this.isMobile = false;
        }
    }

  }
}
</script>
<style scoped>
    
</style>
