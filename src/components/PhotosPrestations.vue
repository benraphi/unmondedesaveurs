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
        { title: '50 ans de mariage de Mr et Mme Delos 2013', url: '../../static/img/accueil/1.jpg', numero: 0 },
        { title: 'Bapteme de Quentin', url: '../../static/img/accueil/2.JPG', numero: 1 },
        { title: 'Barbecue party mai 2014', url: '../../static/img/accueil/3.jpg', numero: 2 },
        { title: 'Buffet de dessert', url: '../../static/img/accueil/4.JPG', numero: 3 },
        { title: 'Chez Caroline et Marc Deledalle', url: '../../static/img/accueil/5.jpg', numero: 4 },
        { title: 'Cours de cuisine chez Mlle Mourait', url: '../../static/img/accueil/6.jpg', numero: 5 },
        { title: 'Cours de cuisine chez Mme Sobry', url: '../../static/img/accueil/7.JPG', numero: 6 },
        { title: 'Cours de cuisine chez Mr Varrasse-Vannesche', url: '../../static/img/accueil/8.JPG', numero: 7 },
        { title: 'Cours de cuisine chez Vanessa et Aurélien', url: '../../static/img/accueil/9.JPG', numero: 8 },
        { title: 'Cours de cuisine entre amis à domicile', url: '../../static/img/accueil/10.jpg', numero: 9 },
        { title: 'Cours de cuisine pour enfants', url: '../../static/img/accueil/11.JPG', numero: 10 },
        { title: 'Mariage de laurence et Eric 2013', url: '../../static/img/accueil/12.JPG', numero: 11 },
        { title: 'Profession de foi de Benjamin', url: '../../static/img/accueil/13.JPG', numero: 12 },
        { title: 'Soirée', url: '../../static/img/accueil/14.jpg', numero: 13 },
        { title: 'Un monde de saveurs', url: '../../static/img/accueil/15.JPG', numero: 14 },
        { title: 'Un monde de saveurs en 2012', url: '../../static/img/accueil/16.JPG', numero: 15 },
        { title: 'Une prestation', url: '../../static/img/accueil/17.jpg', numero: 16 },
        { title: 'Fête de Maryvonne', url: '../../static/img/accueil/18.jpg', numero: 17 },
        { title: 'Anniversaire de René 60 ans', url :'../../static/img/accueil/19.jpg', numero: 18 },
        { title: 'Cochon grillé', url :'../../static/img/accueil/20.jpg', numero: 19 },
      ],
      list: [[
        { title: '1', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/1.jpg' },
        { title: '2', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/2.jpg' },
        { title: '3', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/3.jpg' },
        { title: '4', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/4.jpg' },
        { title: '5', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/5.jpg' },
        { title: '6', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/6.jpg' },
        { title: '7', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/7.jpg' },
        { title: '8', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/8.jpg' },
        { title: '9', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/9.jpg' },
        { title: '10', url: '../../static/img/50 ans de mariage de Mr et Mme Delos 2013/10.jpg' }
      ],
      [
        { title: "Emincé de volailles au coulis d'écrevisses", url: '../../static/img/Bapteme de Quentin/1.JPG' },
        { title: 'Farandole de desserts', url: '../../static/img/Bapteme de Quentin/2.JPG' },
        { title: 'Lasagnes de Saint Jacques', url: '../../static/img/Bapteme de Quentin/3.JPG' },
        { title: 'Mises en bouche', url: '../../static/img/Bapteme de Quentin/4.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/barbecue party mai 2014/1.jpg' },
        { title: '2', url: '../../static/img/barbecue party mai 2014/2.jpg' },
        { title: '3', url: '../../static/img/barbecue party mai 2014/3.jpg' },
        { title: '4', url: '../../static/img/barbecue party mai 2014/4.jpg' },
        { title: '5', url: '../../static/img/barbecue party mai 2014/5.jpg' },
        { title: '6', url: '../../static/img/barbecue party mai 2014/6.jpg' },
        { title: '7', url: '../../static/img/barbecue party mai 2014/7.jpg' },
        { title: '8', url: '../../static/img/barbecue party mai 2014/8.jpg' }
      ],
      [
        { title: '1', url: '../../static/img/Buffet de dessert/1.JPG' },
        { title: '2', url: '../../static/img/Buffet de dessert/2.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/Chez Caroline et Marc Deledalle/1.jpg' },
        { title: '2', url: '../../static/img/Chez Caroline et Marc Deledalle/2.jpg' },
        { title: '3', url: '../../static/img/Chez Caroline et Marc Deledalle/3.jpg' },
        { title: '4', url: '../../static/img/Chez Caroline et Marc Deledalle/4.jpg' },
        { title: '5', url: '../../static/img/Chez Caroline et Marc Deledalle/5.jpg' },
        { title: '6', url: '../../static/img/Chez Caroline et Marc Deledalle/6.jpg' }
      ],
      [
        { title: 'Crumbble de chêvre, pistou de fines herbes', url: '../../static/img/Cours de cuisine à domicile chez Mlle Mourait/1.jpg' },
        { title: 'Déclinaison autour de la carotte', url: '../../static/img/Cours de cuisine à domicile chez Mlle Mourait/2.jpg' },
        { title: "Dressage d'assiettes", url: '../../static/img/Cours de cuisine à domicile chez Mlle Mourait/3.jpg' },
        { title: 'Tartelette au chocolat, nougatine aux pistaches, crème anglaise', url: '../../static/img/Cours de cuisine à domicile chez Mlle Mourait/4.jpg' }
      ],
      [
        { title: '1', url: '../../static/img/Cours de cuisine chez Mme Sobry/1.JPG' },
        { title: '2', url: '../../static/img/Cours de cuisine chez Mme Sobry/2.JPG' },
        { title: '3', url: '../../static/img/Cours de cuisine chez Mme Sobry/3.JPG' },
        { title: '4', url: '../../static/img/Cours de cuisine chez Mme Sobry/4.JPG' },
        { title: '5', url: '../../static/img/Cours de cuisine chez Mme Sobry/5.JPG' },
        { title: '6', url: '../../static/img/Cours de cuisine chez Mme Sobry/6.JPG' },
        { title: '7', url: '../../static/img/Cours de cuisine chez Mme Sobry/7.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/cours de cuisine chez Mr et Mme Varrasse-Vannesche/1.JPG' },
        { title: '2', url: '../../static/img/cours de cuisine chez Mr et Mme Varrasse-Vannesche/2.JPG' },
        { title: '3', url: '../../static/img/cours de cuisine chez Mr et Mme Varrasse-Vannesche/3.JPG' }
      ],
      [
        { title: 'Cours de cuisine chez Vanessa et Aurélien.', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/1.JPG' },
        { title: "Flan d'épinards", url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/2.JPG' },
        { title: "Mitonnée de veau aux écrevisses, flan d'épinards", url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/3.JPG' },
        { title: 'Mousse de banane sur biscuit moelleux au chocolat, crème anglaise', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/4.JPG' },
        { title: 'Préparation de la mitonnée de veau aux écrevisses', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/5.JPG' },
        { title: 'Préparation de la mitonnée de veau aux écrevisses', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/6.JPG' },
        { title: 'Préparation de la mitonnée de veau aux écrevisses', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/7.JPG' },
        { title: 'Préparation de la mitonnée de veau aux écrevisses', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/8.JPG' },
        { title: 'Préparation de la mousse de banane', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/9.JPG' },
        { title: 'Préparation des ravioles', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/10.JPG' },
        { title: 'Préparation du biscuit moelleux au chocolat', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/11.JPG' },
        { title: 'Ravioles de Saint-Jacques aux poireaux, sauce safranée', url: '../../static/img/cours de cuisine chez Vanessa et Aurélien/12.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/Cours de cuisine entre amis à domicile/1.jpg' },
        { title: '2', url: '../../static/img/Cours de cuisine entre amis à domicile/2.jpg' },
        { title: '3', url: '../../static/img/Cours de cuisine entre amis à domicile/3.jpg' }
      ],
      [
        { title: '1', url: '../../static/img/Cours de cuisine pour enfants/1.JPG' },
        { title: '2', url: '../../static/img/Cours de cuisine pour enfants/2.JPG' },
        { title: '3', url: '../../static/img/Cours de cuisine pour enfants/3.JPG' },
        { title: '4', url: '../../static/img/Cours de cuisine pour enfants/4.JPG' },
        { title: '5', url: '../../static/img/Cours de cuisine pour enfants/5.JPG' },
        { title: '6', url: '../../static/img/Cours de cuisine pour enfants/6.JPG' },
        { title: '7', url: '../../static/img/Cours de cuisine pour enfants/7.JPG' },
        { title: '8', url: '../../static/img/Cours de cuisine pour enfants/8.JPG' },
        { title: '9', url: '../../static/img/Cours de cuisine pour enfants/9.JPG' },
        { title: '10', url: '../../static/img/Cours de cuisine pour enfants/10.JPG' },
        { title: '11', url: '../../static/img/Cours de cuisine pour enfants/11.JPG' },
        { title: '12', url: '../../static/img/Cours de cuisine pour enfants/12.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/mariage de laurence et Eric 2013/1.JPG' },
        { title: '2', url: '../../static/img/mariage de laurence et Eric 2013/2.JPG' },
        { title: '3', url: '../../static/img/mariage de laurence et Eric 2013/3.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/profession de foi de Benjamin/1.JPG' },
        { title: '2', url: '../../static/img/profession de foi de Benjamin/2.JPG' },
        { title: '3', url: '../../static/img/profession de foi de Benjamin/3.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/Soirée/1.jpg' },
        { title: '2', url: '../../static/img/Soirée/2.jpg' },
        { title: '3', url: '../../static/img/Soirée/3.jpg' }
      ],
      [
        { title: 'Cocktail mises en bouche', url: '../../static/img/un monde de saveurs/1.JPG' },
        { title: 'Cuillère garnie', url: '../../static/img/un monde de saveurs/2.JPG' },
        { title: 'Mousse de fromage blanc sur sablé vanille, caramel', url: '../../static/img/un monde de saveurs/3.JPG' },
        { title: 'Mousse de fromage blanc sur sablé vanille, compote de rhubarbe à la grenadine', url: '../../static/img/un monde de saveurs/4.JPG' },
        { title: 'Noisette de boeuf en croûte de poivre', url: '../../static/img/un monde de saveurs/5.JPG' },
        { title: "Saumon rôti, tombée d'épinards et champignons", url: '../../static/img/un monde de saveurs/6.JPG' },
        { title: 'verrine de pennes, tomates et olives', url: '../../static/img/un monde de saveurs/7.JPG' },
        { title: "Verrine fromage d'enfance au curry, brunoise de pommes", url: '../../static/img/un monde de saveurs/8.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/un monde de saveurs en 2012/1.JPG' },
        { title: '2', url: '../../static/img/un monde de saveurs en 2012/2.JPG' },
        { title: '3', url: '../../static/img/un monde de saveurs en 2012/3.JPG' },
        { title: '4', url: '../../static/img/un monde de saveurs en 2012/4.JPG' },
        { title: '5', url: '../../static/img/un monde de saveurs en 2012/5.JPG' },
        { title: '6', url: '../../static/img/un monde de saveurs en 2012/6.JPG' },
        { title: '7', url: '../../static/img/un monde de saveurs en 2012/7.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/Une prestation/1.JPG' },
        { title: '2', url: '../../static/img/Une prestation/2.JPG' },
        { title: '3', url: '../../static/img/Une prestation/3.JPG' },
        { title: '4', url: '../../static/img/Une prestation/4.JPG' },
        { title: '5', url: '../../static/img/Une prestation/5.JPG' },
        { title: '6', url: '../../static/img/Une prestation/6.JPG' }
      ],
      [
        { title: '1', url: '../../static/img/Fête Maryvonne/Fête Maryvonne1.jpg' },
        { title: '2', url: '../../static/img/Fête Maryvonne/Fête Maryvonne2.jpg' },
        { title: '3', url: '../../static/img/Fête Maryvonne/Fête Maryvonne3.jpg' },
        { title: '4', url: '../../static/img/Fête Maryvonne/Fête Maryvonne4.jpg' },
        { title: '5', url: '../../static/img/Fête Maryvonne/Fête Maryvonne5.jpg' },
        { title: '6', url: '../../static/img/Fête Maryvonne/Fête Maryvonne6.jpg' },
        { title: '7', url: '../../static/img/Fête Maryvonne/Fête Maryvonne7.jpg' },
        { title: '8', url: '../../static/img/Fête Maryvonne/Fête Maryvonne8.jpg' },
        { title: '9', url: '../../static/img/Fête Maryvonne/Fête Maryvonne9.jpg' },
        { title: '10', url: '../../static/img/Fête Maryvonne/Fête Maryvonne10.jpg' }
      ],
      [
        { title: '1', url: '../../static/img/anniversaire rené 60 ans/1.jpg' },
        { title: 'Apéritif', url: '../../static/img/anniversaire rené 60 ans/Apéritif.jpg' },
        { title: 'Brochettes salées apéritif', url: '../../static/img/anniversaire rené 60 ans/Brochettes salées apéritif.jpg' },
        { title: 'Croustillant aux 3 chocolats', url: '../../static/img/anniversaire rené 60 ans/Croustillant aux 3 chocolats.jpg' },
        { title: 'Pièce montée de profiteroles', url: '../../static/img/anniversaire rené 60 ans/Pièce montée de profiteroles.jpg' },
      ],
      [
        { title: '1', url: '../../static/img/cochon grillé/cochon grillé 1.jpg' },
        { title: '2', url: '../../static/img/cochon grillé/cochon grillé 2.jpg' },
        { title: '3', url: '../../static/img/cochon grillé/cochon grillé 3.jpg' },
        { title: '4', url: '../../static/img/cochon grillé/cochon grillé 4.jpg' },
      ]
      ] }
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
