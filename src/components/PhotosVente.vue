<style scoped>
.h1{
  margin-bottom: 3em
}
</style>

<template>
  <div>
    <v-card  v-if="!afficher_gallery">
      <v-container fluid grid-list-sm>
        <v-layout row wrap>
          <v-flex v-for="item in headers" :key="item" xs3>
            <v-card>
              <img :src="item.url" class="image" width="80%" height="100%" style="cursor: pointer" @click="changeList(item.numero)">
              <v-card-title primary-title class="text-xs-center">
                <h3 style="font-size: 1.5vw">{{item.title}}</h3>
              </v-card-title>
              <v-spacer></v-spacer>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-container v-if="afficher_gallery">
      <h1 align-center>{{this.header}}</h1>
      <v-gallery :images="getCurrentList" :caption="true">
      </v-gallery>
      <v-btn color="green" @click="setGallery" align-center>Retour à la galerie</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gallerie: 0,
      afficher_gallery: false,
      header: '',
      headers: [
        { title: 'Vente à emporter', url: '../../static/img/images_vente/vitrine.jpg', numero: 0 }
      ],
      list: [[
        { title: 'Terrine, potjevleesh, ...', url: '../../static/img/images_vente/bocaux.jpeg' },
        { title: 'Cassolette de Saint Jacques', url: '../../static/img/images_vente/cassolette de saint jacques.jpeg' },
        { title: 'Crèmes', url: '../../static/img/images_vente/cremes.jpeg' },
        { title: 'Crumble pommes spéculoos', url: '../../static/img/images_vente/crumble_pomme_spéculoos.jpeg' },
        { title: 'Galette des rois', url: '../../static/img/images_vente/galette.jpeg' },
        { title: 'Gauffres sèches', url: '../../static/img/images_vente/gauffres.jpeg' },
        { title: 'Guimauves', url: '../../static/img/images_vente/guimauves.jpg' },
        { title: 'Lasagnes', url: '../../static/img/images_vente/lasagnes.jpeg' },
        { title: 'Macarons', url: '../../static/img/images_vente/Macarons.jpeg' },
        { title: 'Macarons', url: '../../static/img/images_vente/macarons1.jpeg' },
        { title: 'Macarons', url: '../../static/img/images_vente/macarons2.jpeg' },
        { title: 'Macarons', url: '../../static/img/images_vente/cassolette de saint jacques.jpeg' },
        { title: 'Merveilleux', url: '../../static/img/images_vente/merveilleux.jpg' },
        { title: 'Palets chocolats', url: '../../static/img/images_vente/palets_chocolats.jpeg' },
        { title: 'Panier garni', url: '../../static/img/images_vente/panier garni.jpeg' },
        { title: 'Plateau apéritif', url: '../../static/img/images_vente/plateau apero.jpg' },
        { title: 'Plateau apéritif', url: '../../static/img/images_vente/plateau apero.jpeg' },
        { title: 'Plateau apéritif', url: '../../static/img/images_vente/plateau aperitif2.jpeg' },
        { title: 'Plateau de mignardises', url: '../../static/img/images_vente/plateau mignardises.jpg' },
        { title: 'Plateau de mignardises', url: '../../static/img/images_vente/plateau_mignardises.jpg' },
        { title: 'Potjevleesch', url: '../../static/img/images_vente/potjevlesch.jpeg' },
        { title: 'Gaufres fourrées, guimauves', url: '../../static/img/images_vente/produits secs.jpeg' },
        { title: 'Religieuse café', url: '../../static/img/images_vente/religieuse café.jpg' },
        { title: 'Religieuse chocolat', url: '../../static/img/images_vente/religieuse.jpg' },
        { title: 'Soupes', url: '../../static/img/images_vente/soupes.jpeg' },
        { title: 'Tarte aux fraises', url: '../../static/img/images_vente/Tarte aux fraises.jpeg' },
        { title: 'Tiramisu', url: '../../static/img/images_vente/tiramisu.jpg' },
        { title: 'Tom pouce', url: '../../static/img/images_vente/tom pouce.jpg' },
        { title: 'Vitrine', url: '../../static/img/images_vente/vitrine.jpg' }
      ]] }
  },
  computed: {
    getCurrentList () {
      return this.list[this.gallerie]
    }
  },
  methods: {
    changeList (numero) {
      this.gallerie = numero
      this.header = this.headers[this.gallerie].title
      this.afficher_gallery = true
    },
    setGallery () {
      this.afficher_gallery = false
    }
  }
}
</script>
