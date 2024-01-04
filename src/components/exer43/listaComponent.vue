<template>
    <div class="rigth-side">
        <h3>Participants</h3>
        <ul v-if="items.length > 0">
            <li v-for="item in items">
                {{ item }}
            </li>
        </ul>
        <p>Total of participants: {{ items.length }}</p>
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {
    name:'Lista Component',
    props: [ 'items' ],
    setup(props, { emit }) {        
    }
    
}
</script>
<style lang="css">
.rigth-side {
    position: relative;
    height: 100%;
    width: 30%;
    min-width: 3vw;
    background-color: rgb(187, 187, 187);
}
</style>