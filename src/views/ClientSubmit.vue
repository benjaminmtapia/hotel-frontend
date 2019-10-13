<template>
    <b-container>
        <b-row justify-center>
            <b-col sm="3"></b-col>
        <b-col sm="6" ><ClientRegister/> </b-col>
            <b-col sm="3"></b-col>
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