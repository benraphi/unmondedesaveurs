import Vue from 'vue'
import VueRouter from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Home', name: 'home' },
  { path: '/receptions/buffetfroid', component: 'BuffetFroid', name: 'buffetfroid' },
  { path: '/receptions/soireeatheme', component: 'SoireeTheme', name: 'soireeatheme' },
  { path: '/cocktails/cocktailsdinatoires', component: 'CocktailsDinatoires', name: 'cocktailsdinatoires' },
  { path: '/cocktails/misesenbouche', component: 'MisesEnBouche', name: 'misesenbouche' },
  { path: '/cocktails/repasdinatoire', component: 'RepasDinatoire', name: 'repasdinatoire' },
  { path: '/contact', component: 'Contact', name: 'contact' },
  { path: '/servicetraiteur', component: 'ServiceTraiteur', name: 'servicetraiteur' },
  { path: '/venteaemporter', component: 'VenteAEmporter', name: 'venteaemporter' },
  { path: '/cocktails/cocktailschaudsfroidssucres', component: 'CocktailsChaudsFroidsSucres', name: 'cocktailschaudsfroidssucres' },
  { path: '*', component: 'NotFound' }
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(VueRouter)

export default new VueRouter({
  routes,
  mode: 'history'
})
