<template>
  <div class="formulario">
  <h3 align="center"> Registro de cliente </h3>
  <p>Por favor, llene con sus datos para finalizar su reserva</p>
    <b-form @submit="postToApi"  v-if="show">
    <b-form-group id="input-group-2" label="Nombres:" label-for="input-2">
        <b-form-input
          id="input-2"
          required
          placeholder="María Paz"
          v-model="Client.name"
        ></b-form-input>
  
        </b-form-group>

      <b-form-group id="input-group-1" label="Apellidos:" label-for="input-1">
        <b-form-input
          id="input-2"
          v-model="Client.surname"
          required
          placeholder="Retamales Zamorano"
        ></b-form-input>
        
      </b-form-group>
      
  


      <b-form-group id="input-group-3" label="Numero de Identificación:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="Client.identificationNumber"
          required
          placeholder="Rut o Pasaporte"
        ></b-form-input>
      </b-form-group>

    <b-form-group id="input-group-4" label="Mail:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="Client.mail"
          required
          type="email"
          placeholder="noname@example.com"

        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Telefono:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="Client.phone"
          required
          type="Number"
          placeholder=" 9 12345678"
        ></b-form-input>
        
      </b-form-group>
      <b-form-group id="input-group-4" label="Edad:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="Client.age"
          required
          min="1"
          type="number"
          placeholder="21"
        ></b-form-input>
        
        </b-form-group>

    
    
<br>
      <b-button id="boton" type="submit" variant="success">Enviar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
import {mapState} from 'vuex';

  export default {

    data() {
      return {
        computed:{
            ...mapState['reservation_id','clientData']
        },

        Client: {name:'',surname:'',identificationNumber:'',headline:true, mail:'', age:'', phone:''},
        show: true,
      }
    },
    methods: {

      postToApi(evt){
       evt.preventDefault();
         console.log(this.Client)
         var id = this.$store.state.reservation_id
         var url = 'http://192.241.158.237:8081/mingeso/client/'+id+'/reservation'
         axios.post(url,this.Client).then((response)=>{
           console.log(response.data)
         });
        // wait(7000);
        //NOTIFICACION
        const h = this.$createElement
        // Using HTML string
        const titleVNode = h('div', { domProps: { innerHTML: 'Su reserva fue creada con éxito' } })
        // More complex structure
        const messageVNode = h('div', { class: ['foobar'] }, [
          h('p', { class: ['text-center'] }, [
            ' Se le enviara un correo a  ', this.Client.mail, ' con los detalles de su reserva'
          ]),
          h('p', { class: ['text-center'] }),
          h('b-img', {
            props: {
              src: 'https://uradi.me/assets/admin/images/icon/success.svg',
              thumbnail: true,
              center: true,
              fluid: true
            }
          })
        ])
        // We must pass the generated VNodes as arrays
        this.$bvModal.msgBoxOk([messageVNode], {
          title: [titleVNode],
          buttonSize: 'sm',
          centered: true, size: 'sm'
        })
        setTimeout(() => {
          window.location.href='/'
        }, 30000);
        


         //this.$router.push('/')
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