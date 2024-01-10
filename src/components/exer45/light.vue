<template>
    <div class="lightCircle" :class="color, status">
        
    </div>
</template>
<script>
export default {
    name: 'Light',
    props: ['color', 'status'],
    setup(props, { emit }) {        
    }    
}
</script>
<style lang="css">
.lightCircle {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #999;
    margin-bottom: 20px;
    padding: 1em;
}  
.red {
    background-color: #ff0000;
}  
.yellow {
    background-color: #ffff00;
}
.green {
    background-color: #00ff00;
}
.off {
    background-color: #000 !important;
}
</style>