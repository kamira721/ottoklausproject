<template>
    <div>
        <div v-if="this.$route.params.id">
            <b-form class="container mt-5" @submit.prevent="editando">
    <!-- Codigo -->
            <b-form-group 
            id="input-group-1" 
            label="Codigo" 
            label-for="input-1"
            >
                <b-form-input 
                id="input-1" 
                v-model="Juguetes.codigo" 
                placeholder="Codigo Juguete"
                ></b-form-input>
            </b-form-group>
    <!-- Nombre -->
            <b-form-group 
            id="input-group-2" 
            label="Nombre Juguete" 
            label-for="input-2"
            >
                <b-form-input 
                id="input-2" 
                v-model="Juguetes.nombre" 
                placeholder="Nombre Juguete"
                ></b-form-input>
            </b-form-group>
    <!-- Stock -->
            <b-form-group 
            id="input-group-3" 
            label="Stock" 
            label-for="input-3"
            >
                <b-form-input 
                id="input-3" 
                v-model="Juguetes.stock" 
                required 
                placeholder="Stock" 
                type="number"
                ></b-form-input>
            </b-form-group>
    <!-- Precio -->
            <b-form-group 
            id="input-group-4" 
            label="Precio" 
            label-for="input-4"
            >
                <b-form-input 
                id="input-4" 
                v-model="Juguetes.precio" 
                required 
                placeholder="Precio" 
                type="number"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" size="lg" pill variant="info" class="mx-3">Editar</b-button>
            <b-button pill variant="danger" size="lg" class="mx-3" @click="$router.push('/inventario')">Volver</b-button>

            </b-form>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';
import Swal from 'sweetalert2';

export default {
    name: "Editar",
    props: ['id'],
    ...mapGetters(['enviarJuegos']),

    data() {
        return {
            Juguetes: {
                codigo: '',
                nombre: '',
                stock: '',
                precio: '',
            }
        }
    },
    mounted() {
        let Juguetes = {};
        Juguetes = this.$store.getters.enviarJuegos.find(resp => resp.id === this.$route.params.id)
        if (Juguetes !== undefined){
            this.Juguetes.codigo = Juguetes.codigo;
            this.Juguetes.nombre = Juguetes.nombre;
            this.Juguetes.stock = Juguetes.stock;
            this.Juguetes.precio = Juguetes.precio;
            this.Juguetes.id = Juguetes.id;
        }else {
            this.$message('');
            setTimeout(()=>{
                this.$router.push('/inventario');
            },1000);
        }
    },
    methods: {
        editando() {
           Swal.fire({
                title: 'Estas seguro que deseas editar este juguete?',             
                showCancelButton: true,
                confirmButtonText: `Sí`,          
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Editado con éxito!', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('Decidiste no editar juguete', '', 'info')
                }
                });
            this.$store.dispatch("listaActual", this.Juguetes);
            }
        },
    }
    

</script>

<style>

</style>