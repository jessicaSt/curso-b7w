<template>
    <div id="exercise2">
        <header class="exercise-header">
            <h2>exercicio 2</h2>
        </header>
        <main>
            <div class="body">
                <div>
                    <input type="text" name="busca" id="busca" placeholder="Persquisar nome" v-model="busca" v-on:keypress.enter="search()">
                    <h3>Lista de Nomes</h3>
                    <ul>
                        <li v-for="nome in filtredList">
                            {{ nome }}
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    name:'Lista Filtrada',
    data() {
        return {
            nomes:[ 'Jéssica', 'Ieda', 'Marino', 'Fernando', 'Ilse', 'Soon Jeon', 'Shin Min', 'David', 'Johannes'],
            busca: '',
        }
    },
    methods: {
        search() {
            if(this.nome.length > 0) {
                this.filtredList
            }
        },
    },
    computed: {
        filtredList: function() {
           if(this.busca.length > 0){
               return this.nomes.filter((nome) => (nome.match(this.busca)))
           }
           return this.nomes
        }
    }
    
}
</script>
<style lang="css">
#exercise1 {
    display: block;
    position: relative;
    width: 100%;
    height: 80vh;
}
.exercise-header {
    display: block;
    width: 100vw;
}
main {
    display: block;
    margin-top: 2rem;
    width: 100%;
    position: relative;
}
    
</style>