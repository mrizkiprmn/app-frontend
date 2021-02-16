import '@babel/polyfill'
import store from './store'
import Vue from 'vue'
import App from './App.vue'
import routers from "./routes"
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-vue/dist/bootstrap-vue.css";
import VModal from "vue-js-modal";
import { BVToastPlugin ,BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faSearch,
} 
from "@fortawesome/free-solid-svg-icons";


library.add(
  faShoppingCart,
  faSearch,
)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BVToastPlugin)
Vue.use(VModal)
Vue.use(Vuelidate)
Vue.component("fa-icon", FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  store: store,
  router : routers,
  render: h => h(App),
}).$mount('#app')
