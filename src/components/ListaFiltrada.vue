<template>
    <div id="exercise2">
        <header class="exercise-header">
            <h2>exercicio 2</h2>
        </header>
        <main>
            <div class="body-exercise">
                <div class="left-side">
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
                <div class="rigth-side">
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
            nomes:[ 'Jéssica', 'Ieda', 'Marino', 'Fernando', 'Ilse', 'So Ji-Sub', 'Shin Min-a'],
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

.body-exercise {
    position: relative;
    width: 90vw;
    height: 50vh;
    display: flex;
    flex-direction: row;
}

.left-side {
    position: relative;
    height: 100%;
    width: 70%;
    background-color: rgb(206, 233, 255);
}

.rigth-side {
    position: relative;
    height: 100%;
    width: 30%;
    min-width: 3vw;
    background-color: rgb(187, 187, 187);
}
    
</style>