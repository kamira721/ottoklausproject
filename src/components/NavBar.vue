<template>
    <div>
    <b-navbar class="mb-3" type="dark" variant="primary">
        <b-navbar-brand><router-link tag="div" :to="{name: 'Home'}"><img src="../assets/ottoklauslogo.png" alt="Kitten"></router-link></b-navbar-brand>
        <b-navbar-brand class="mx-3"><router-link tag="div" :to="{name: 'Inventario'}">Inventario</router-link></b-navbar-brand>
        <b-navbar-brand class="mx-3"><router-link tag="div" :to="{name: 'Agregar'}">Agregar</router-link></b-navbar-brand>
        <b-navbar-brand class="mx-3"><router-link tag="div" :to="{name: 'Editar'}">Editar</router-link></b-navbar-brand>
        

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            
            <b-dropdown-item @click="salida">Cerrar Sesión</b-dropdown-item>
        </b-navbar-nav>
    </b-navbar>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Navbar',
    methods: {
        salida() {
            if(this.$store.getters.enviarUser){
                firebase.auth().signOut().then(() => {
                    this.$router.push('/login').catch(() =>{});
                }).catch((error) => {
                    console.error(error);
                })
            }
        }
    },
}
</script>

<style>
div{
color: rgb(255, 197, 8);
font-family:'Chelsea Market', cursive;
 text-shadow: 0.1em 0.1em 0.2em rgb(0, 0, 0);
 font-size: x-large;
}

img {
    background-size: cover;
    width: 20%;
   
}

</style>