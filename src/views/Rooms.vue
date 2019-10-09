<template>
   
   <b-container>
   <div class="filter">
        <b-row>
        
        <b-form inline @submit="searchFilter" class="justify-content-md-center">
        
                <b-form-group id="input-group-1" label="Tipo de Habitación" label-for="input-1">
                <b-form-select
                id="input-1"
                required
                v-model="searchForm.tipoHabitacion"
                type="select"
                :options="nombres"
                style="margin-right:20px;padding:10px;"
                placeholder="Simple"
                ></b-form-select>
                </b-form-group>

                <b-form-group id="input-group-2" label="Fecha inicio: " label-for="input-2">
                <b-form-input
                id="input-2"
                required
                type="date"
                v-model="searchForm.fechaInicio"
                style="width:180px;padding:10px; margin-right:10px;"
                placeholder="0" 
                ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Fecha Fin:" label-for="input-2" >
                <b-form-input
                id="input-2"
                required
                type="date"
                v-model="searchForm.fechaFin"
                
                placeholder="0" 
                ></b-form-input>
                </b-form-group>
                <b-button id="boton" type="submit" variant="success">Enviar</b-button>
            
        </b-form>
        </b-row>
        </div>   
        <b-button id="boton2" variant="dark" @click="showRooms=!showRooms">mostrar</b-button>
        <h1 v-if="showRooms">hola</h1>
    </b-container>
</template>

<script>
export default {
    data(){
        return{
            searchForm:{
            tipoHabitacion:null,
            fechaInicio:null,
            fechaFin:null
            },
            showRooms:false,
            nombres:[
                {value:'single',text:'Simple'},
                {value:'doble',text:'Doble'},
                {value:'triple',text:'Triple'}
            ],
        }
    },
    methods: {
        searchFilter(evt){
            evt.preventDefault();
            console.log( this.searchForm);
           // this.showRooms!=this.showRooms
        }
    },
}
</script>

<style lang="css">
    .filter{
   
    font-size:15px;
    margin-top:20px;  
    background-color:#fafafa;
    border-radius:10px;
    padding:45px;
    text-align:left;
    border:1px solid #ffffaa;
    }
</style>