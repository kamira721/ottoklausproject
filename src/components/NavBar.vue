<template>
   <div>
    <b-navbar type="dark" variant="info">
        <img class="img1" src="../assets/letras.png" alt="logo">
        <b-dropdown-item><router-link  tag="div" :to="{name: 'Home'}"><i class="fas fa-home"></i> Home </router-link></b-dropdown-item>
      <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-dropdown-item><router-link tag="div" :to="{name: 'Inventario'}"><i class="fas fa-wrench"></i>  Administración  </router-link></b-dropdown-item>
            <b-dropdown-item><router-link variant="outline-success" class="mx-5" tag="div" :to="{name: 'Login'}"><i class="fas fa-user"></i>   Login   </router-link></b-dropdown-item>
            <b-dropdown-item  @click="salida"><i class="fas fa-sign-out-alt"></i>   Sing out  </b-dropdown-item>
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
    font-family:'Chelsea Market', cursive;
    font-size: large;    
}
.img1 {
    width: 90px;
    margin-left: 45px;
    border-radius: 50%;
    border:2px solid #008791;
    -webkit-box-shadow:inset 0 0 15px 0 rgba(0,0,0,0.3);
    box-shadow:inset 0 0 15px 0 rgba(0,0,0,0.3);
    text-shadow: 0 1px 0 rgba(255,255,255,0.3);
    }
.fas{
    font-size: 35px;
    color: #ffdf75;
    text-shadow:  0.2em 0.1em 0.3em black;
    line-height: 45px;
}
.far{
    font-size: 35px;
    color: #ffdfa2;
     text-shadow:  0.2em 0.1em 0.3em black;
    line-height: 45px;
}

</style>