<template>
     <div class="header-content">
        <label>Add a new participant: </label>
        <input type="text" name="newParticipant" id="newParticipant" v-model="data.newItem" v-on:keypress.enter="setList()">
        <button v-on:click="setList" >Adicionar</button>
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {
    name:'Lista de Participantes',
    emits: ['setList'],
    setup(props, { emit }) {
        const data = reactive({
            newItem: ''
        })
        function setList() {
            if(data.newItem.length > 2) {
                emit('setList', data.newItem)
                data.newItem = ''
            }
        }
        return { data, setList}
        
    }
    
}
</script>
<style lang="css">
    .header-content{
        display: flex;
        gap: 5px;
    }
</style>