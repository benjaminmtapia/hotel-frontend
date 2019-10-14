<template>
    <b-container>
        <b-row justify-center>
            <b-col ></b-col>
        <b-col sm="6" ><ClientRegister/> </b-col>
            <b-col ></b-col>
       </b-row>
    </b-container>
</template>
<script>
import ClientRegister from '../components/ClientRegister.vue'
export default {
    components:{
        ClientRegister
    }
}
</script>
<style>
body {
    
    background-image: url('../images/hotel_3.jpg');
    background-size: cover;
}
</style>