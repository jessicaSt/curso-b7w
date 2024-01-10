<template>
    <div id="exercise43" class="body">
        <header class="exercise-header">
            <h2>exercicio 43</h2>
           <HeaderComponent @setList="setList"/>
        </header>
        <main>
            <div class="left-side"></div>
            <div class="body-exercise">
               <ListaComponent :items="items" />
            </div>
        </main>
    </div>
</template>
<script>
import HeaderComponent from './exer43/headerComponent.vue';
import ListaComponent from './exer43/listaComponent.vue';

export default {
    name: 'Lista de Participantes',
    components: { HeaderComponent, ListaComponent },
    data() {
        return {
            items: [],
            newItem: '',
        };
    },
    methods: {
        setList(value) {
            this.items.push(value);
        },
    },
    watch: {}
}
</script>
<style lang="css">
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
    
</style>