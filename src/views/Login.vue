<template>
   <div>
   <form>
   <div class="container">
   <h2>Login</h2>
   <label>Usuario</label>
   <input type="text" placeholder="user7@user.cl" v-model="user"><br>
   <label>Contraseña</label>
   <input type="password" v-model="password"><br>
   <button @click.prevent='login'>Ingresar</button>
   </div>
   </form>
   <h1> Bienvenido a <span> Otto </span> Klauss</h1>
   </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'formulario',

    data() {
        return {
            user:'',
            password:'',
        }
    },
 
    methods: {
        login(){
            console.log(firebase.auth)
            console.log(firebase.default.auth)
            firebase.auth().signInWithEmailAndPassword(this.user, this.password)
            .then(()=>{
                this.$router.push('/home')
            })
            .catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message
                console.log(errorCode, errorMessage)
              })
        }
    },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');
.container{
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  margin-top: 100px;
  font-size:25px;
  text-shadow: 0.2em 0.1em 0.1em black;
  color: rgb(22, 255, 72);
}
form{
display:flex;
flex-direction:column;
font-family: 'Chelsea Market', cursive;
height:500px;
background-image: url('../assets/legofondo.jpg');
background-color:white;
background-size:100px;
background-position:bottom;
border:5px solid rgb(252, 5, 5);
width:500px;
margin-left:auto;
margin-right:auto;
margin-top:80px;
border-radius:50%;
opacity: 0.9;
background-repeat:no-repeat;
  background-size: cover;

}
h1{
    margin-bottom:200px;
    font-family: 'Chelsea Market', cursive;
    font-size:100px;
    color:blue;
    text-shadow: 0.2em 0.1em 0.2em black;
}
h2 {
    font-size:80px;
    color:rgb(235, 188, 0);
    text-shadow: 0.2em 0.1em 0.1em rgb(0, 0, 0);
}
button {
    color:blue;
    text-shadow: 0.2em 0.1em 0.3em black;
}
span {
    color:#ff3f98;
    font-size:140px;
}

</style>