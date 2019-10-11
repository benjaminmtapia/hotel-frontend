<template>
   
   <b-container>

        <b-row>
        <b-col sm="1"> </b-col>
        <b-col sm="9">
        <div class="filter">
        <h6 justify-center>Filtrar Habitaciones</h6>
        <b-form inline @submit="searchFilter" class="justify-content-md-center">
            
                   <b-form-group id="input-group-1" label="Cantidad Camas: " label-for="input-1">
                <b-form-input
                id="input-1"
                required
                type="number"
                style="height:25px;width:50px;margin-left:5px;margin-right:5px;"
                v-model="searchForm.bedQuantity"
                
                ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Fecha inicio: " label-for="input-2">
                <b-form-input
                id="input-2"
                required
                type="date"
                style="height:30px;width:170px;margin-left:5px;margin-right:5px;"
                v-model="searchForm.fechaInicio"
                
                ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Fecha Fin:" label-for="input-2" >
                <b-form-input
                id="input-2"
                required
                type="date"
                v-model="searchForm.fechaFin"
                style="height:30px;width:170px;"
                placeholder="seleccione" 
                ></b-form-input>
                </b-form-group>
                <div class="queryButton">
                <b-button id="boton" type="submit" variant="primary">buscar</b-button>
                </div>
            
        </b-form>
       </div>
        </b-col>
        <b-col v-if="showCart" sm="2"><div class="cart">
        <h5 style="text-align:center;">Carrito:</h5>
        <li v-for="room in roomsReserved">
            Habitación: {{room.roomNumber}} 
        </li>
        <br>
        <b-button id="boton" variant="warning">Finalizar</b-button>
        </div>
        </b-col>
        </b-row>  
        <b-row v-for="room in rooms">
        <b-col ></b-col>
            <b-col sm="6" class="room">
            
            <b-form>
            <h6>Habitación {{room.roomNumber}}</h6>
            
           <p> Capacidad: {{room.capacity}}
           <br>
             Tipo de Cama: {{room.bedType}}<br>
             Valor: ${{room.value}} </p>
             <div class="reservationButton">
             <b-button id="boton" @click="addToRooms(room)" variant="success">Reservar</b-button>
             </div>
             </b-form>
            </b-col>
        <b-col></b-col>
        </b-row>
        
    </b-container>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            roomIds:[],
            roomsReserved:[],
            rooms:null,
            roomsNeeded:1,
            actualRooms:0,
            showCart:false,
                searchForm:{
                    bedQuantity:0,
                    fechaInicio:null,
                    fechaFin:null,
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
            var date = this.searchForm;
            axios.get('http://192.241.158.237:8081/mingeso/room/filter',{
                params:{
                    addmisionDate: this.fechaInicio,
                    departureDate: this.fechaFin
                }
            })
        },
        getRooms(){
            axios.get('http://192.241.158.237:8081/mingeso/rooms').then((response)=>{
                this.rooms = response.data;
                console.log(response.data)
            });
            console.log(this.rooms)
        },
        addToRooms(room){
            if(this.roomIds.includes(room.id)){
                console.log("ya esta registrada la habitacion")
            }
            else{
            this.roomIds.push(room.id)
            this.roomsReserved.push(room)
            this.actualRooms++;
            }

            console.log(this.roomIds)
        }
    },
    created() {
        this.getRooms();
    },
    watch: {
        actualRooms: function(value){
            if(value==this.roomsNeeded){
                this.showCart=true;
            }
        }
    },
}
</script>

<style lang="css">
    .filter{
    margin-left: 85px;
    font-size:13px;
    margin-top:20px;  
    background-color:#fbfbfb;
    border-radius:10px;
    padding:45px;
    text-align:left;
    border:1px solid #efefec;
    }
    .queryButton{
        margin-left:10px;
        padding:10px;
        height:30px;
        margin-top:10px;
    }
    .room{
        padding:10px;
        background-color:white;
        border:1px solid #aaa;
        text-align:left;
        font-size:13px;
        margin-top:15px;
    }
    .reservationButton{
        margin-bottom:10px;
        margin-right:5px;
        float:right
    }
    .cart{
        padding:20px;
        margin-top:30px;
        position:fixed;
        font-size:14px;
        text-align:left;
        width:240px;
        line-height:20px;
        background-color:#fafafa;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(184,184,184,1);
        -moz-box-shadow: 10px 10px 5px 0px rgba(184,184,184,1);
        box-shadow: 10px 10px 5px 0px rgba(184,184,184,1);
        border:1px solid #fffffa;
    }
</style>