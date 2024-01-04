<template>
    <div id="exercise1">
        <header class="exercise-header">
            <h2>exercicio 1</h2>
        </header>
        <main>
            <div class="body-exercise">
                <div class="left-side">
                    <div>
                        <label>Add a new participant: </label>
                        <input type="text" name="newParticipant" id="newParticipant" v-model="newItem" v-on:keypress.enter="setList()">
                        <span v-if="showLegend" >Digitando...</span>
                    </div>
                    <button v-if="this.itemValid" v-on:click="setList" >Adicionar</button>
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
            newItem: '',
            showLegend: false,
            temporizador: null,
            itemValid: false
        }
    },
    methods: {
        setList() {
            if(this.itemValid) {
                this.items.push( this.newItem )
                this.newItem = ''
                this.itemValid = false
            }
        },
        readyTypping:function() {
            this.showLegend = false 
            if(this.newItem.length > 2) {
                this.itemValid = true
            }
        }
    },
    watch: {
        newItem: function() {
            if(this.temporizador != null) {
                clearTimeout(this.temporizador);
            }

            if(this.newItem != '') {
                this.showLegend = true 
                this.itemValid = false
                this.temporizador = setInterval(this.readyTypping, 1000);
            } 
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