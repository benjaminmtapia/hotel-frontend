<template>
    <b-container class="rack">
    <h4>Rack de Habitaciones 2019</h4>

        <Rack/>
    
    </b-container>
</template>
<script>
import Rack from '../components/RackTable.vue'
export default {
    components:{
        Rack
    },
}
</script>
<style scoped>
    .rack{
        margin-top:45px;
        text-align:center;
        padding:30px;
        background-color:white;
    }
    body{
        background-color:white !important;
        background-image:none;
    }
</style>