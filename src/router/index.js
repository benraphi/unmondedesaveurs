import Vue from 'vue'
import VueRouter from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Home', name: 'home' },
  { path: '/receptions', component: 'Receptions', name: 'receptions' },
  { path: '/receptions/barbecueparty', component: 'BarbecueParty', name: 'barbecueparty' },
  { path: '/receptions/buffetfroid', component: 'BuffetFroid', name: 'buffetfroid' },
  { path: '/receptions/soireeatheme', component: 'SoireeTheme', name: 'soireeatheme' },
  { path: '/cocktails', component: 'Cocktails', name: 'cocktails' },
  { path: '/cocktails/cocktailsdinatoires', component: 'CocktailsDinatoires', name: 'cocktailsdinatoires' },
  { path: '/cocktails/misesenbouche', component: 'MisesEnBouche', name: 'misesenbouche' },
  { path: '/cocktails/repasdinatoire', component: 'RepasDinatoire', name: 'repasdinatoire' },
  { path: '/contact', component: 'Contact', name: 'contact' },
  { path: '/courscuisine', component: 'CoursCuisine', name: 'courscuisine' },
  { path: '/menu', component: 'Menus', name: 'menu' },
  { path: '/menu/terroir', component: 'MenuDuTerroir', name: 'menuterroir' },
  { path: '/menu/envie', component: 'MenuEnvie', name: 'menuenvie' },
  { path: '/menu/saveurs', component: 'MenuSaveurs', name: 'menusaveurs' },
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
  routes
})
