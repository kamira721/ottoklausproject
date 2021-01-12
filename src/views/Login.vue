<template>
   <div>
   <form>
   <div class="container">
   <h2 class="titulo">Login</h2>
   <label> Usuario </label>
   <input type="text" placeholder="user7@user.cl" v-model="user"><br>
   <label> Contraseña </label>
   <input type="password" v-model="password"><br>
   <button @click.prevent='login'>Ingresar</button>
   <img class="img2" src="../assets/ottoklauslogo.png" alt="logo">
   </div>
   </form>
   <h1> Bienvenido a <span> Otto  Klauss </span></h1>
   </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Login',

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

.container{
  position:relative;
  width: 400px;
  height: 400px;
  margin-top: 40px;
  font-size:20px; 
  color: black;
}

.img2 {
  display: flex;
  width: 65%;
  margin-left: 65px;
     
}

form{
font-family: 'Chelsea Market', cursive;
height:450px;
background-color:rgb(243, 250, 148);
width:450px;
margin-left:auto;
margin-right:auto;
margin-top:230px;
line-height: 30px;
border-radius: 50%;
border:8px solid #15afb5;


}
h1{
    margin-bottom:200px;
    font-family: 'Chelsea Market', cursive;
    font-size:50px;
    color:rgb(29, 29, 29);
   
}
.titulo {
    font-size:50px;
    color:rgb(5, 17, 6);

  
}
button {
    color:rgb(0, 60, 35);
    text-shadow: 0.2em 0.1em 0.3em black;
}
span {
    color:#c44104;
    font-size:50px;
}

</style>