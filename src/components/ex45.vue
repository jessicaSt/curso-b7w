<template>
    <div class="exercise-header">
    </div>
    <div class="body-semafaro">
       <div>{{ data.colorNow }}</div>
        
    </div>
</template>
<script>
import { onMounted, reactive, watch } from 'vue'
export default {
    setup(props) {
        const data = reactive({
            colors: [{name: 'red', code: "#ff0000"}, {name: 'yellow', code: "#fdd456"}, {name: 'green', code: "#3abf00"} ],
            colorNow: 'red',
            temporizador: null
        })

        watch(
            () => data.colorNow, 
            (count) => {
                if(data.temporizador != null) {
                    data.colors.forEach((element, index) => {
                        if (data.colorNow === element.name){
                            data.colorNow = index != 2 ? colors[index++] : colors[0]
                        }
                        
                    });
                    clearTimeout(this.temporizador);
                }
        
                if(data.colorNow != '') {
                    data.temporizador = setInterval(1000);
                }
        }),

        onMounted(() => {
            data.colorNow = data.colors[0].name;
        })

        return { data }
    }    
}
</script>
<style lang="css">
    .body-semafaro {
        width:95vw;
        height: 50vh;
        background-color: black;
        display: flex;
        justify-content: center;
    }
    .semafaro {
        width: 500px;
    }
</style>