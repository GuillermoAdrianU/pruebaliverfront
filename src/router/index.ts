// Importaciones del archivo
import Vue from 'vue'
import VueRouter, {RouteConfig} from "vue-router"
import { component } from 'vue/types/umd';
import store from '../store/';
import CargarArchivos from '../components/CargarArchivo.vue';


//Router para las rutas
Vue.use(VueRouter)

//Rutas
const routes: Array<RouteConfig> = 
    [
        {
            path: '/',
            name: 'cargarArchivos',
            component: CargarArchivos,    
        }
    ]


const router = new VueRouter({
    mode: 'history',
    base: "/pruebaliverfront",
    routes
  })


export default router;