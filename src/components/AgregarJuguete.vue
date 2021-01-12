<template>
    <div>
        <b-form class="container mt-5">
         <!-- Codigo del juguete-->
        <b-form-group 
        id="input-group-1" 
        label="Código" 
        label-for="input-1"
        >
            <b-form-input 
            id="input-1" 
            v-model="codigo" 
            placeholder="Código Juguete"
            ></b-form-input>
        </b-form-group>
           <!-- Nombre juguete -->
        <b-form-group 
        id="input-group-2" 
        label="Nombre Juguete" 
        label-for="input-2"
        >
            <b-form-input 
            id="input-2" 
            v-model="nombre" 
            placeholder="Nombre Juguete"
            ></b-form-input>
        </b-form-group>
          <!-- Stock juguete -->
        <b-form-group 
        id="input-group-3" 
        label="Stock" 
        label-for="input-3"
        >
            <b-form-input 
            id="input-3" 
            v-model="stock" 
            required 
            placeholder="Stock" 
            type="number"
            ></b-form-input>
        </b-form-group>
        <!-- Precio juguete-->
        <b-form-group 
        id="input-group-4" 
        label="Precio" 
        label-for="input-4"
        >
            <b-form-input 
            id="input-4" 
            v-model="precio" 
            required 
            placeholder="Precio" 
            type="number"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" pill variant="info" size="lg" class="mx-3" @click.prevent="agregar">Agregar</b-button>
        <b-button pill variant="danger" size="lg" class="mx-3" @click="$router.push('/inventario')">Volver</b-button>
        </b-form>
    </div>
</template>

<script>
import firebase from 'firebase';
import Swal from 'sweetalert2';


export default {
    name: "AgregarJuguete",
    props: ['id'],
    data() {
        return {
            codigo: '',
            nombre: '',
            precio: '',
            stock: '',
        }
    },
    methods: {
        agregar(){
            Swal.fire({
                title: 'Estas seguro que deseas agregar este juguete?',
                showCancelButton: true,
                confirmButtonText: `Sí`,
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Juguete agregado con éxito!', '', 'success')
                }     
            }).then(() => {
                firebase.firestore().collection('toys').add({
                    codigo: this.codigo,
                    nombre: this.nombre,
                    precio: this.precio,
                    stock: this.stock,
            
                }),
                this.$router.push('/inventario');
            }).catch(() => {
                console.log('Se produjo un error al agregar el juguete.')
            });
        }
    }
};
</script>

<style scoped>

</style>