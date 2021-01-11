<template>

    <div class="container my-4 text-center">
        <b-button size="lg" class="mb-5 px-5 mx-5" pill variant="danger" @click.prevent="addJuguete">Agregar Juguetes</b-button>
        <table class="table" >
        <thead>
            <tr class="bg-success text-white">
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
                <b-button pill variant="primary" size="lg" class="mx-5 text-white" @click.prevent="editJuguete(item.id)">Editar</b-button>
                <b-button pill variant="danger" size="lg" class="mx-2 text-white" @click.prevent="eliJuguete(item.id)">Eliminar</b-button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

   <script>
    //import Swal from 'sweetalert2'
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
                this.$confirm('¿Seguro que deseas eliminar este producto?', {
                confirmButtonText: 'Si',
                cancelButtonText: 'Cancelar',
                type: 'warning',
                center: true
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Producto eliminado.'
                });
                this.$store.dispatch('deletJuguete',id);
                }).catch(() => {
                console.log('Se produjo un error al eliminar este producto.')
                });
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