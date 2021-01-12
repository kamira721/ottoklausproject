import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        toys: [],
        user: {}
    },
    getters: {
        enviarUser(state) {
            return state.user;
        },
        enviarJuegos(state) {
            return state.toys;
        }
    },
    mutations: {
        addUsuario(state, userData) {
            state.user = userData;
        },
        mutarJuego(state, arreglo) {
            state.toys = arreglo;
        }
    },
    actions: {
        traerDatos({ commit }) {
            db.collection('toys').onSnapshot(resp => {
                let arreglo = [];
                resp.forEach(element => {
                    arreglo.push({
                        id: element.id,
                        codigo: element.data().codigo,
                        nombre: element.data().nombre,
                        stock: element.data().stock,
                        precio: element.data().precio,
                    });
                });
                commit('mutarJuego', arreglo);
            })
        },
        listaActual(context, Juguetes) {
            db.collection('toys').doc(Juguetes.id).update({
                nombre: Juguetes.nombre,
                stock: Juguetes.stock,
                precio: Juguetes.precio
            })
            router.replace('/inventario')
        },
        deletJuguete(context, id) {
            db.collection('toys').doc(id).delete().then(() => {

            }).catch(error => {
                console.log(error);
            })
        },

        agregarUser({ commit }, user) {
            commit('addUsuario', user);
        },
    },
})