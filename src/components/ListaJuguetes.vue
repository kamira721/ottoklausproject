<template>

    <div class="container my-4 text-center">
        <b-button size="lg" class="mb-5 px-5 mx-5" pill variant="primary" @click.prevent="addJuguete">Agregar Juguetes</b-button>
        <table class="table" >
        <thead>
            <tr class="bg-secondary text-white">
            <th scope="col">Código</th>
            <th scope="col">Nombre Juguete</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
            <th scope="col">Editar o Eliminar</th>
            </tr>
        </thead>
        <tbody v-for="(item, index) in traerJuego" :key="index">
            <tr class="bg-light">
            <th>{{item.codigo}}</th>
            <td>{{item.nombre}}</td>
            <td>{{item.stock}}</td>
            <td>${{item.precio}}</td>
            <td>
                <b-button pill variant="info" size="lg" class="mx-5 text-white" @click.prevent="editJuguete(item.id)">Editar</b-button>
                <b-button pill variant="danger" size="lg" class="mx-2 text-white" @click.prevent="eliJuguete(item.id)">Eliminar</b-button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

   <script>
    import Swal from 'sweetalert2';
    export default {
        name: "ListaJuguetes",
        data() {
            return {
            }
        },
        methods: {
            editJuguete(id){
                this.$router.push({name: 'Editar', params: {id: id}});
            },
            addJuguete(){
                this.$router.push('/agregar')
            },
            eliJuguete(id){
                Swal.fire({
                title: 'Estas seguro que deseas eliminar este juguete?',
                showCancelButton: true,
                confirmButtonText: `Sí`,
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Juguete eliminado!', '', 'success')
                } 
                });
                this.$store.dispatch('deletJuguete',id);
                
            }
        },
        mounted() {
            this.$store.dispatch('traerDatos');
        },
        computed: {
            traerJuego() {
                return this.$store.getters.enviarJuegos;
            }
        },
        
    }
</script>
<style scoped>

</style>