<template>
  <div class="formulario">
  <h3> Agregar Reserva</h3>
    <b-form @submit="postToApi" @reset="onReset" v-if="show">
    <b-form-group id="input-group-1" label="Nombres:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="Candidate.name"
          required
          placeholder="Andrea Carolina"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Apellidos:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="Candidate.rut"
          required
          placeholder="Pizarro Toledo"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Rut o Pasaporte:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="Candidate.rut"
          required
          placeholder="11.111.111-1"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-4" label="Correo Electrónico:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="Candidate.rut"
          required
          placeholder="Rut o Pasaporte"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Rut:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="Candidate.rut"
          required
          placeholder="Rut o Pasaporte"
        ></b-form-input>
      </b-form-group>

    <b-form-group id="input-group-6" label="Fecha de Nacimiento:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="Candidate.birthdate"
          required
          placeholder="15-01-2000"
        ></b-form-input>
      </b-form-group>
    
    
<br>
      <b-button id="boton" type="submit" variant="success">Enviar</b-button>
    </b-form>
    
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      
    data() {
      return {
          date:null,
          menu:false,
 date1: new Date().toISOString().substr(0, 10),
         form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        Candidate: {name:'',email:'',birthdate:'',degree:'', rut:''},
        careers: [
            {text: 'Seleccione una Carrera', value: null },
          'Ingeniería Civil Biomédica',
        'Ingeniería Civil Electrónica',
        'Ingeniería Civil en Ambiente',
        'Ingeniería Civil en Electricidad',
        'Ingeniería Civil en Geografía',
        'Ingeniería Civil en Industria',
        'Ingeniería Civil en Informática',
        'Ingeniería Civil en Mecánica',
        'Ingeniería Civil en Metalurgia',
        'Ingeniería Civil en Minas',
        'Ingeniería Civil en Obras Civiles',
        'Ingeniería Civil en Química',
        'Ingeniería de Ejecución en Climatización',
        'Ingeniería de Ejecución en Computación e Informática',
        'Ingeniería de Ejecución en Electricidad',
        'Ingeniería de Ejecución en Geomensura',
        'Ingeniería de Ejecución en Industria',
        'Ingeniería de Ejecución en Mecánica',
        'Ingeniería de Ejecución en Metalurgia',
        'Ingeniería de Ejecución en Minas',
        'Ingeniería de Ejecución en Química',
        'Ingeniería Civil en Biotecnología',
             ],
        show: true
      }
    },
     watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
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
         console.log(this.Candidate)
         var birthday =  this.Candidate.birthdate
         var birthday_day = birthday.substring(0,2)
         var birthday_month = birthday.substring(3,5)
         var birthday_year = birthday.substring(6,birthday.length)
         var birthday_post = birthday_year + "-" + birthday_month + "-" + birthday_day
         console.log(birthday_post)
         var final_date = new Date(birthday_post)
         let newCandidate = {
           name: this.Candidate.name,
           birthdate: final_date,
           degree: this.Candidate.degree,
           rut: this.Candidate.rut
         };
         console.log(newCandidate);
         axios.post('http://192.241.158.237:8081/mingeso/candidate',newCandidate)
         .then((response)=>{
           console.log("hice post de esto: "+response)
         })
         .catch((error)=>{
           console.log(error)
         })
         this.Candidate.name = " "
         this.Candidate.rut=" "
         this.Candidate.email=" "
         this.Candidate.degree=" "
      },
      save (date) {
        this.$refs.menu.save(date)
      },
    }
  }
</script>
<style lang="css">
    .formulario{
    width:350px;
    margin-top:20px;  
    background-color:white;
    border-radius:10px;
    padding:45px;
    text-align:left;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(184,184,184,1);
-moz-box-shadow: 10px 10px 5px 0px rgba(184,184,184,1);
box-shadow: 10px 10px 5px 0px rgba(184,184,184,1);
border:1px solid #fffffa;
  }
</style>
