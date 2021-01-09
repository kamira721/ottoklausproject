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
  },
};
</script>

<style>
body{
    background-image: url('./assets/fondo6.jpg');
    background-size:100%;
    background-repeat:no-repeat;
    background-position: 20% 75%;
    background-attachment: fixed;
    background-position: center; 
    background-size: cover;
    width:100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
