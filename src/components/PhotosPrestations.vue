<template>
  <v-gallery :images="list" :caption="true">
  </v-gallery>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {title: 'Verrines', url: '../../static/img/verrines.jpeg'},
        {title: 'Christophe', url: '../../static/img/Accueil.jpg'},
        {title: 'Verrines', url: '../../static/img/verrines.jpeg'},
        {title: 'Verrines', url: '../../static/img/verrines.jpeg'},
        {title: 'Verrines', url: '../../static/img/verrines.jpeg'},
        {title: 'Verrines', url: '../../static/img/verrines.jpeg'},
        {title: 'Verrines', url: '../../static/img/verrines.jpeg'},
        {title: 'Verrines', url: '../../static/img/verrines.jpeg'},
        {title: 'Verrines', url: '../../static/img/verrines.jpeg'},
        {title: 'Verrines', url: '../../static/img/verrines.jpeg'}
      ]
    }
  }
}
</script>
