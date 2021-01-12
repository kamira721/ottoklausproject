<template>
      <b-container>
    <h2 class="titulo5">Lista de Juguetes</h2>
      <b-row>
        <b-col cols="12" sm="12" md="6" lg="4" xl="4">
         <b-card title="Figura Cuphead" img-src="https://static.fnac-static.com/multimedia/Images/FR/MC/7f/e1/59/39444863/1540-1/tsp20190603180930/Figurine-Cuphead-Action-Figure-Mugman.jpg" img-alt="Image1" img-top tag="article"  style="max-width: 20rem;" class="card1 mb-5 text-white p-2">
              <b-card-text>
                  <p>$9.990</p>             
              </b-card-text>
            </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="4" xl="4">
         <b-card title="Figura Max Steel" img-src="https://www.chedraui.com.mx/medias/74677519444-00-CH300Wx300H?context=bWFzdGVyfHJvb3R8Mjc0ODR8aW1hZ2UvanBlZ3xoNTIvaGUzLzg4MTkxMzY2NTk0ODYuanBnfDExZTVlYWRlMmMxMzk5ODdjZDE5MWUwZDdkY2UyMjQ1ZjcyZmM0YzI0OTZhZTRkZDJkZDdhZmRjMWFmMjQ4N2E" img-alt="Image2" img-top tag="article" style="max-width: 20rem;" class="card2 bg-primary  mb-5 text-white p-2">
              <b-card-text>
                <p>$8.990</p>
              </b-card-text>
            </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="4" xl="4">
         <b-card title="Auto Hot Wheels " img-src="https://cdn.shopify.com/s/files/1/0270/6663/0217/products/hot-wheels10-02-copec_300x.jpg?v=1595636917" img-alt="Image3" img-top tag="article" style="max-width: 20rem;" class="card3 mb-5 text-white p-2">
              <b-card-text>
                <p>$1.190</p>
              </b-card-text>
            </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="4" xl="4">
         <b-card title="Cartas Inglesas" img-src="https://www.zonadejuegos.com/wp-content/uploads/2019/07/Barajas-de-Cartas-Francesas.jpg" img-alt="Image4" img-top tag="article" style="max-width: 20rem;" class="card4 mb-5 text-white p-2">
              <b-card-text>
                <p>$1.490</p>
              </b-card-text>
            </b-card>
        </b-col>
         <b-col cols="12" sm="12" md="6" lg="4" xl="4">
         <b-card title="Cartas Españolas" img-src="https://i.ebayimg.com/images/g/40QAAOSwfUZdGKNC/s-l300.jpg" img-alt="Image5" img-top tag="article" style="max-width: 20rem;" class="card5 bg-secondary mb-5 text-white p-2">
              <b-card-text>
                <p>$990</p>
              </b-card-text>
            </b-card>
        </b-col>
         <b-col cols="12" sm="12" md="6" lg="4" xl="4">
         <b-card title="Furby" img-src="https://http2.mlstatic.com/D_NQ_NP_860901-MLC28070956609_092018-O.jpg" img-alt="Image6" img-top tag="article" style="max-width: 20rem;" class="card6 bg-info mb-5 text-white p-2">
              <b-card-text>
                <p>$39.990</p>
              </b-card-text>
            </b-card>
        </b-col>
      </b-row>   
  </b-container>
</template>

<script>
 import { mapGetters } from "vuex";
export default {
    name: 'ListaToys',
    data() {
      return {
        mostrar: true,
      }
    },
    computed: {
      ...mapGetters(['enviarJuegos'])
    },
    mounted() {
    setTimeout(() =>{
      this.mostrar = false;
    },3000)
  }
}
</script>

<style scoped>
  .titulo5 {
    margin-top: 20px;
  }
 .card1 {
  justify-content: space-evenly;
  text-shadow: 0.2em 0.1em 0.3em black;
  background-color: rgb(255, 87, 87)
 }
 .card2 {
  justify-content: space-evenly;
  text-shadow: 0.2em 0.1em 0.3em black;
 }
 .card3 {
  justify-content: space-evenly;
  text-shadow: 0.2em 0.1em 0.3em black;
  background-color: rgb(118, 160, 130);
 }
 .card4 {
  justify-content: space-evenly;
  text-shadow: 0.2em 0.1em 0.3em black;
  background-color: rgb(102, 41, 92);
 }
 .card5 {
  justify-content: space-evenly;
  text-shadow: 0.2em 0.1em 0.3em black;
 }
 .card6 {
  justify-content: space-evenly;
  text-shadow: 0.2em 0.1em 0.3em black;
 }
 p {
  font-size: 30px;
 }

</style>

