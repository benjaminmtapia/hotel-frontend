<template>
  <div class="formulario">
  <h3 align="center"> Registro de cliente </h3>
  <p>Por favor, llene con sus datos para finalizar su reserva</p>
    <b-form @submit="postToApi" @reset="onReset" v-if="show">
    <b-form-group id="input-group-2" label="Nombres:" label-for="input-2">
        <b-form-input
          id="input-2"
          
          placeholder="María Paz"

        ></b-form-input>
  
        </b-form-group>

      <b-form-group id="input-group-1" label="Apellidos:" label-for="input-1">
        <b-form-input
          id="input-2"
          v-model="surname"
          
          placeholder="Retamales Zamorano"
        ></b-form-input>
        
      </b-form-group>
      
  


      <b-form-group id="input-group-3" label="Numero de Identificación:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="identificationNumber"
          required
          placeholder="Rut o Pasaporte"
        ></b-form-input>
      </b-form-group>

    <b-form-group id="input-group-4" label="Mail:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="mail"
          required
          type="email"
          placeholder="noname@example.com"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Telefono:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="phone"
          required
          type="Number"
          placeholder=" 9 12345678"
        ></b-form-input>
        
      </b-form-group>
      <b-form-group id="input-group-4" label="Edad:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="age"
          required
          type="number"
          placeholder="21"
        ></b-form-input>
        
        </b-form-group>
       <b-form-group label="Es titular">
      <b-form-radio v-model="Client.headline" name="some-radios" value="true">Sí</b-form-radio>
      <b-form-radio v-model="Client.headline" name="some-radios" value="false">No</b-form-radio>
    </b-form-group>

    
    
<br>
      <b-button id="boton" type="submit" variant="success">Enviar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
import {mapState} from 'vuex';
import { required, minLength, between } from 'vuelidate/lib/validators'

  export default {

    data() {
      return {
        computed:{
            ...mapState['reservation_id','clientData']
        },
        name:'',
        surname:'',
        identificationNumber:'',
        headline:'',
        mail:'',
        age:'',
        phone:'',
        Client: {name:'',surname:'',identificationNumber:'',headline:'', mail:'', age:'', phone:''},
        show: true,
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      postToApi(evt){
       evt.preventDefault();
         console.log(this.Client)
         var id = this.$store.state.reservation_id
         var url = 'http://192.241.158.237:8081/mingeso/client/'+id+'/reservation'
         axios.post(url,this.Client).then((response)=>{
           console.log(response.data)
         });
         this.$router.push('/')
      },
    }
  }
</script>
<style>
    .formulario{
    width:400px;
    text-align:left;
    font-size:14px;
    margin-top:30px;
    margin-bottom:20px;
    background-color:white;
    border-radius:10px;
    padding:45px;
    
border:1px solid #fffffa;
  }
</style>