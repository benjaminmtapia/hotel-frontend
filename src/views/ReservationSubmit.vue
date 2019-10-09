
<template>
    <div>
        <b-container >
         <b-row class="justify-content-md-center">
            <SubmitForm/>
         </b-row>
        </b-container>
    </div>
</template>
<script>
import SubmitForm from '../components/ReservationForm.vue';
export default {
    components:{
        SubmitForm,
    }
}
</script>