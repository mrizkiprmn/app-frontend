import '@babel/polyfill'
import store from './store'
import Vue from 'vue'
import App from './App.vue'
import routers from "./routes"
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
} 
from "@fortawesome/free-solid-svg-icons";


library.add(
  faShoppingCart,
)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(IconsPlugin);
Vue.component("fa-icon", FontAwesomeIcon);

new Vue({
  store: store,
  router : routers,
  render: h => h(App),
}).$mount('#app')
