<template>
  <div class="container">
    <b-jumbotron bg-variant="danger" class="fondo" text-variant="white" border-variant="danger">
      <img src="../assets/ottoklauslogo.png" class="imagen" alt="Kitten">

      <template #lead>
        <h2>Sistema de inventario</h2>
      </template>

    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagen {
  width: 95%;
  
}
.fondo {
height:700px;
width:700px;
margin-left:auto;
margin-right:auto;
margin-top:30px;
border-radius:50%;
opacity: 0.9;
font-size:70px;


}


</style>

