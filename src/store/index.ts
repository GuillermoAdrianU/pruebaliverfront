// Importaciones del archivo
import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import Cookies from 'js-cookie';
const crypto = require('crypto');

//Uso de Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState({
            key: 'Windows',
            storage: window.sessionStorage,
        })
      
    ],
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        cargaArchivo({commit, state}, data){
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3000/liverpool/createArchivo', data,{
                    headers: {
            
                    }
                })
                .then((response: any) => {
                    resolve(response.data);
                })
                .catch((error: any) => {
                    resolve({replyCode: 400, replyText: error.message, data: []});
                });
            })
        },

    
    },

    modules: {
    }
})