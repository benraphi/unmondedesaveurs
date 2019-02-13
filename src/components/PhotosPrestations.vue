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
      <h1 align-center>{{this.header}}</h1>
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
      header: '',
      headers: [
        {title: '50 ans de mariage de Mr et Mme Delos 2013', url: '../../static/img/accueil/1.jpg', numero: 0},
        {title: 'Bapteme de Quentin', url: '../../static/img/accueil/2.JPG', numero: 1},
        {title: 'Barbecue party mai 2014', url: '../../static/img/accueil/3.jpg', numero: 2},
        {title: 'Buffet de dessert', url: '../../static/img/accueil/4.JPG', numero: 3},
        {title: 'Chez Caroline et Marc Deledalle', url: '../../static/img/accueil/5.jpg', numero: 4},
        {title: 'Cours de cuisine à domicile chez Mlle Mourait', url: '../../static/img/accueil/6.jpg', numero: 5},
        {title: 'Cours de cuisine chez Mme Sobry', url: '../../static/img/accueil/7.JPG', numero: 6},
        {title: 'Cours de cuisine chez Mr et Mme Varrasse-Vannesche', url: '../../static/img/accueil/8.JPG', numero: 7},
        {title: 'Cours de cuisine chez Vanessa et Aurélien', url: '../../static/img/accueil/9.JPG', numero: 8},
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
        {title: '1', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/1.jpg'},
        {title: '2', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/2.jpg'},
        {title: '3', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/3.jpg'},
        {title: '4', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/4.jpg'},
        {title: '5', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/5.jpg'},
        {title: '6', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/6.jpg'},
        {title: '7', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/7.jpg'},
        {title: '8', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/8.jpg'},
        {title: '9', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/9.jpg'},
        {title: '10', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/10.jpg'}
      ],
      [
        {title: "Emincé de volailles au coulis d'écrevisses", url: '../../static/img/Bapteme de Quentin/1.JPG'},
        {title: 'Farandole de desserts', url: '../../static/img/Bapteme de Quentin/2.JPG'},
        {title: 'Lasagnes de Saint Jacques', url: '../../static/img/Bapteme de Quentin/3.JPG'},
        {title: 'Mises en bouche', url: '../../static/img/Bapteme de Quentin/4.JPG'}
      ],
      [
        {title: '1', url: '../../static/img/barbecue party mai 2014/1.jpg'},
        {title: '2', url: '../../static/img/barbecue party mai 2014/2.jpg'},
        {title: '3', url: '../../static/img/barbecue party mai 2014/3.jpg'},
        {title: '4', url: '../../static/img/barbecue party mai 2014/4.jpg'},
        {title: '5', url: '../../static/img/barbecue party mai 2014/5.jpg'},
        {title: '6', url: '../../static/img/barbecue party mai 2014/6.jpg'},
        {title: '7', url: '../../static/img/barbecue party mai 2014/7.jpg'},
        {title: '8', url: '../../static/img/barbecue party mai 2014/8.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/Buffet de dessert/1.JPG'},
        {title: '2', url: '../../static/img/Buffet de dessert/2.JPG'}
      ],
      [
        {title: '1', url: '../../static/img/Chez Caroline et Marc Deledalle/1.jpg'},
        {title: '2', url: '../../static/img/Chez Caroline et Marc Deledalle/2.jpg'},
        {title: '3', url: '../../static/img/Chez Caroline et Marc Deledalle/3.jpg'},
        {title: '4', url: '../../static/img/Chez Caroline et Marc Deledalle/4.JPG'},
        {title: '5', url: '../../static/img/Chez Caroline et Marc Deledalle/5.jpg'},
        {title: '6', url: '../../static/img/Chez Caroline et Marc Deledalle/6.jpg'}
      ],
      [
        {title: 'Crumbble de chêvre, pistou de fines herbes', url: '../../static/img/Cours de cuisine à domicile chez Mlle Mourait/1.jpg'},
        {title: 'Déclinaison autour de la carotte', url: '../../static/img/Cours de cuisine à domicile chez Mlle Mourait/2.jpg'},
        {title: "Dressage d'assiettes", url: '../../static/img/Cours de cuisine à domicile chez Mlle Mourait/3.jpg'},
        {title: 'Tartelette au chocolat, nougatine aux pistaches, crème anglaise', url: '../../static/img/Cours de cuisine à domicile chez Mlle Mourait/4.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/Cours de cuisine chez Mme Sobry/1.jpg'},
        {title: '2', url: '../../static/img/Cours de cuisine chez Mme Sobry/2.jpg'},
        {title: '3', url: '../../static/img/Cours de cuisine chez Mme Sobry/3.jpg'},
        {title: '4', url: '../../static/img/Cours de cuisine chez Mme Sobry/4.jpg'},
        {title: '5', url: '../../static/img/Cours de cuisine chez Mme Sobry/5.jpg'},
        {title: '6', url: '../../static/img/Cours de cuisine chez Mme Sobry/6.jpg'},
        {title: '7', url: '../../static/img/Cours de cuisine chez Mme Sobry/7.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/cours de cuisine chez Mr et Mme Varrasse-Vannesche/1.jpg'},
        {title: '2', url: '../../static/img/cours de cuisine chez Mr et Mme Varrasse-Vannesche/2.jpg'},
        {title: '3', url: '../../static/img/cours de cuisine chez Mr et Mme Varrasse-Vannesche/3.jpg'}
      ],
      [
        {title: 'Cours de cuisine chez Vanessa et Aurélien.', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/1.jpg'},
        {title: "Flan d'épinards", url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/2.jpg'},
        {title: "Mitonnée de veau aux écrevisses, flan d'épinards", url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/3.jpg'},
        {title: 'Mousse de banane sur biscuit moelleux au chocolat, crème anglaise', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/4.jpg'},
        {title: 'Préparation de la mitonnée de veau aux écrevisses', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/5.jpg'},
        {title: 'Préparation de la mitonnée de veau aux écrevisses', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/6.jpg'},
        {title: 'Préparation de la mitonnée de veau aux écrevisses', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/7.jpg'},
        {title: 'Préparation de la mitonnée de veau aux écrevisses', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/8.jpg'},
        {title: 'Préparation de la mousse de banane', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/9.jpg'},
        {title: 'Préparation des ravioles', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/10.jpg'},
        {title: 'Préparation du biscuit moelleux au chocolat', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/11.jpg'},
        {title: 'Ravioles de Saint-Jacques aux poireaux, sauce safranée', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/12.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/Cours de cuisine entre amis à domicile/1.jpg'},
        {title: '2', url: '../../static/img/Cours de cuisine entre amis à domicile/2.jpg'},
        {title: '3', url: '../../static/img/Cours de cuisine entre amis à domicile/3.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/Cours de cuisine pour enfants/1.jpg'},
        {title: '2', url: '../../static/img/Cours de cuisine pour enfants/2.jpg'},
        {title: '3', url: '../../static/img/Cours de cuisine pour enfants/3.jpg'},
        {title: '4', url: '../../static/img/Cours de cuisine pour enfants/4.jpg'},
        {title: '5', url: '../../static/img/Cours de cuisine pour enfants/5.jpg'},
        {title: '6', url: '../../static/img/Cours de cuisine pour enfants/6.jpg'},
        {title: '7', url: '../../static/img/Cours de cuisine pour enfants/7.jpg'},
        {title: '8', url: '../../static/img/Cours de cuisine pour enfants/8.jpg'},
        {title: '9', url: '../../static/img/Cours de cuisine pour enfants/9.jpg'},
        {title: '10', url: '../../static/img/Cours de cuisine pour enfants/10.jpg'},
        {title: '11', url: '../../static/img/Cours de cuisine pour enfants/11.jpg'},
        {title: '12', url: '../../static/img/Cours de cuisine pour enfants/12.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/mariage de laurence et Eric 2013/1.jpg'},
        {title: '2', url: '../../static/img/mariage de laurence et Eric 2013/2.jpg'},
        {title: '3', url: '../../static/img/mariage de laurence et Eric 2013/3.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/profession de foi de Benjamin/1.jpg'},
        {title: '2', url: '../../static/img/profession de foi de Benjamin/2.jpg'},
        {title: '3', url: '../../static/img/profession de foi de Benjamin/3.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/Soirée/1.jpg'},
        {title: '2', url: '../../static/img/Soirée/2.jpg'},
        {title: '3', url: '../../static/img/Soirée/3.jpg'}
      ],
      [
        {title: 'Cocktail mises en bouche', url: '../../static/img/un monde de saveurs/1.jpg'},
        {title: 'Cuillère garnie', url: '../../static/img/un monde de saveurs/2.jpg'},
        {title: 'Mousse de fromage blanc sur sablé vanille, caramel', url: '../../static/img/un monde de saveurs/3.jpg'},
        {title: 'Mousse de fromage blanc sur sablé vanille, compote de rhubarbe à la grenadine', url: '../../static/img/un monde de saveurs/4.jpg'},
        {title: 'Noisette de boeuf en croûte de poivre', url: '../../static/img/un monde de saveurs/5.jpg'},
        {title: "Saumon rôti, tombée d'épinards et champignons", url: '../../static/img/un monde de saveurs/6.jpg'},
        {title: 'verrine de pennes, tomates et olives', url: '../../static/img/un monde de saveurs/7.jpg'},
        {title: "Verrine fromage d'enfance au curry, brunoise de pommes", url: '../../static/img/un monde de saveurs/8.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/un monde de saveurs en 2012/1.jpg'},
        {title: '2', url: '../../static/img/un monde de saveurs en 2012/2.jpg'},
        {title: '3', url: '../../static/img/un monde de saveurs en 2012/3.jpg'},
        {title: '4', url: '../../static/img/un monde de saveurs en 2012/4.jpg'},
        {title: '5', url: '../../static/img/un monde de saveurs en 2012/5.jpg'},
        {title: '6', url: '../../static/img/un monde de saveurs en 2012/6.jpg'},
        {title: '7', url: '../../static/img/un monde de saveurs en 2012/7.jpg'}
      ],
      [
        {title: '1', url: '../../static/img/Une prestation/1.jpg'},
        {title: '2', url: '../../static/img/Une prestation/2.jpg'},
        {title: '3', url: '../../static/img/Une prestation/3.jpg'},
        {title: '4', url: '../../static/img/Une prestation/4.jpg'},
        {title: '5', url: '../../static/img/Une prestation/5.jpg'},
        {title: '6', url: '../../static/img/Une prestation/6.jpg'}
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
      this.header = this.headers[this.gallerie].title
      this.afficher_gallery = true
    },
    setGallery () {
      this.afficher_gallery = false
    }
  }
}
</script>
