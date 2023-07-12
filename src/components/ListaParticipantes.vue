<template>
    <div id="exercise1">
        <header class="exercise-header">
            <h2>exercicio 1</h2>
        </header>
        <main>
            <div class="body-exercise">
                <div class="left-side">
                    <label>Add a new participant: </label>
                    <input type="text" name="newParticipant" id="newParticipant" v-model="newItem" v-on:change="setList()">
                </div>
                <div class="rigth-side">
                    <h3>Participants</h3>
                    <ul v-if="items.length > 0">
                        <li v-for="item in items">
                            {{ item }}
                        </li>
                    </ul>
                    <p>Total of participants: {{ items.length }}</p>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    name:'Lista de Participantes',
    data() {
        return {
            items:[],
            newItem: ''
        }
    },
    methods: {
        setList() {
            this.items.push( this.newItem )
            this.newItem = ''
        }
    },
    
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
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
}

.left-side {
    position: relative;
    height: 100%;
    width: 70%;
    background-color: steelblue;
}

.rigth-side {
    position: relative;
    height: 100%;
    width: 30%;
    min-width: 3vw;
    background-color: aquamarine;
}
    
</style>