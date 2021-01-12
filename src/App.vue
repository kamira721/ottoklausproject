<template>
   <div id="app">
    <NavBar />
    <router-view/>
 
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import firebase from 'firebase'

  export default {
    name: 'App',
    components: {
      NavBar
    },
     data: () =>({

  }),
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.$store.dispatch('agregarUser', user)
        console.log('Sesion Activa');
      } else {
        console.log('No hay sesion activa...')
        this.$store.dispatch('agregarUser', '')
      }
    });
    this.$store.dispatch('traerDatos');
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');
body{
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-position: center; 
    background-size: cover;
    width:100%; 
    background-image: url("../src/assets/toys-smile.jpg");
    opacity: 0.9;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;   
}

</style>
