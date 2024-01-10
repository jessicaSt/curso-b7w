<template>
    <div class="body-exercise">
        <div class="exercise-header">
            <button @click="turnOn" :disabled="data.statusGreen == 'on'">Liberar</button>
            <button @click="turnOff" :disabled="data.statusGreen == 'off'">Fechar</button>
        </div>
       <div class="traffic-light-body">
        <Light :color="'red'" :status="data.statusRed" />
        <Light :color="'yellow'" :status="data.statusYellow"/>
        <Light :color="'green'" :status="data.statusGreen"/>
       </div>
        
    </div>
</template>

<script>
import { onMounted, reactive, watch } from 'vue'
import Light from './exer45/light.vue'

export default {
    components: { Light },
    setup(props) {
        const data = reactive({
            colors: ['red', 'yellow', 'green'],
            statusRed: 'on',
            statusYellow: 'off',
            statusGreen: 'off',
            temporizador: null
        });
        function turnOn() {
            data.statusGreen = 'on'
            data.statusYellow = 'off'
            data.statusRed = 'off'
        }
        function turnOff() {
            data.statusGreen = 'off'
            data.statusYellow = 'on'
            setTimeout(function() {
                data.statusYellow = 'off'
                data.statusRed = 'on'
            }, 1500)
            
        }
        onMounted(() => {
            data.colorNow = data.colors[0];
            console.log(data.colorNow)
        });
        return { data, turnOff, turnOn };
    }
}
</script>

<style lang="css">
    .body-exercise {
        width:95vw;
        height: 50vh;
        background-color: black;
        display: flex;
        justify-content: center;
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
    .traffic-light-body {
        background-color: #333;
        padding: 20px 20px 0px 20px;
        display: inline-block;
        border-radius: 25px;
        height: fit-content;
        width: fit-content;
    }
</style>