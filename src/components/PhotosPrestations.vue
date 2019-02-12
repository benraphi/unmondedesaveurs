<template>
  <div>
    <v-card  v-if="!afficher_gallery">
      <v-container fluid grid-list-sm>
        <v-layout row wrap>
          <v-flex v-for="item in headers" :key="item" xs3>
            <v-card>
              <img :src="item.url" class="image" alt="lorem" width="100%" height="100%">
              <v-card-title primary-title>
                <h3 class="headline mb-0">{{item.title}}</h3>
              </v-card-title>
              <v-card-actions>
                <v-btn align-center color="orange" @click="changeList(item.numero)">Show</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-container v-if="afficher_gallery">
      <v-gallery :images="getCurrentList" :caption="true">
      </v-gallery>
      <v-btn color="green" @click="setGallery" align-center>Retour à la gallerie</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gallerie: 0,
      afficher_gallery: false,
      headers: [
        {title: '50 ans de mariage de Mr et Mme Delos 2013', url: '../../static/img/accueil/1.jpg', numero: 0},
        {title: 'Bapteme de Quentin', url: '../../static/img/accueil/2.JPG', numero: 1},
        {title: 'Barbecue party mai 2014', url: '../../static/img/accueil/3.jpg', numero: 2},
        {title: 'Buffet de dessert', url: '../../static/img/accueil/4.jpg', numero: 3},
        {title: 'Chez Caroline et Marc Deledalle', url: '../../static/img/accueil/5.jpg', numero: 4},
        {title: 'Cours de cuisine à domicile chez Mlle Mourait', url: '../../static/img/accueil/6.jpg', numero: 5},
        {title: 'Cours de cuisine chez Mme Sobry', url: '../../static/img/accueil/7.jpg', numero: 6},
        {title: 'Cours de cuisine chez Mr et Mme Varrasse-Vannesche', url: '../../static/img/accueil/8.jpg', numero: 7},
        {title: 'Cours de cuisine chez Vanessa et Aurélien', url: '../../static/img/accueil/9.jpg', numero: 8},
        {title: 'Cours de cuisine entre amis à domicile', url: '../../static/img/accueil/10.jpg', numero: 9},
        {title: 'Cours de cuisine pour enfants', url: '../../static/img/accueil/11.JPG', numero: 10},
        {title: 'Mariage de laurence et Eric 2013', url: '../../static/img/accueil/12.JPG', numero: 11},
        {title: 'Profession de foi de Benjamin', url: '../../static/img/accueil/13.JPG', numero: 12},
        {title: 'Soirée', url: '../../static/img/accueil/14.jpg', numero: 13},
        {title: 'Un monde de saveurs', url: '../../static/img/accueil/15.JPG', numero: 14},
        {title: 'Un monde de saveurs en 2012', url: '../../static/img/accueil/16.JPG', numero: 15},
        {title: 'Une prestation', url: '../../static/img/accueil/17.jpg', numero: 16}
      ],
      list: [[
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'},
        {title: '1', url: '../../static/img/1.jpg'}
      ]
      ]
    }
  },
  computed: {
    getCurrentList () {
      return this.list[this.gallerie]
    }
  },
  methods: {
    changeList (numero) {
      this.gallerie = numero
      this.afficher_gallery = true
    },
    setGallery () {
      this.afficher_gallery = false
    }
  }
}
</script>
