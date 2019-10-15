<template>
   
   <b-container>

        <b-row>
        <b-col cols="9">
            <div class="filter">
            <h5 align="center">Crear Reserva</h5>
            <b-form inline @submit="searchFilter" class="justify-content-md-center">
            
                <b-form-group id="input-group-1" label="Cantidad Personas: " label-for="input-1">
                    <b-form-input
                    id="input-1"
                    required
                    type="number"
                    style="width:60px;"
                    v-model="searchForm.numberPeople"
                    
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Fecha inicio: " label-for="input-2">
                    <b-form-input
                    id="input-2"
                    required
                    type="date"
                    v-model="searchForm.addmisionDate"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Fecha Fin:" label-for="input-2" >
                    <b-form-input
                    id="input-2"
                    required
                    type="date"
                    v-model="searchForm.departureDate"
                    placeholder="seleccione" 
                    ></b-form-input>
                </b-form-group>
                
                <b-button id="boton" type="submit" @click="searchFilter" class ="queryButton">buscar</b-button>
               
            
        </b-form>
       </div>
        </b-col>

            
        </b-row>  

        <b-row v-if="showRooms" v-for="room in rooms">
            <b-col sm="1" ></b-col>
                <b-col sm="6" class="room">
                    <b-form>
                        
                    <b-card img-src="../images/room1.jpg" img-width="200px;" img-height="200px;" img-left>
                     <b-card-text>
                        <h6>Habitación {{room.roomNumber}}</h6>
                    
                        <p> Capacidad: {{room.capacity}}
                        <br>
                        Tipo de Cama: {{room.bedType}}
                        <br>
                        Valor: ${{room.value}} </p>
                        <b-button id="boton" @click="addToRooms(room)" class ="reservationButton" variant="success">Reservar</b-button>
                    </b-card-text>
                     </b-card>

                   
                    </b-form>
                </b-col>
            <b-col>
               
            <div class="cart" v-if="showCart">
                <h5 style="text-align:center;">Habitaciones en Reserva:</h5>
                    <li v-for="room in roomsReserved">
                        Habitación {{room.roomNumber}} 
                    </li>
                    <br>
                <b-button id="boton2" type="submit" class="reservationButton"  variant="warning" @click="createReservation()">Finalizar</b-button>
                </div>
            </b-col>
        </b-row>
        
    </b-container>
</template>

<script>
import axios from 'axios';
export default {
    computed:{
        reservation_id(){
            return this.$store.state.reservation_id
        }
    },
    data(){
        return{
            roomIds:[],
            roomsReserved:[],
            rooms:[],
            reservation:0,
            roomsNeeded:1,
            actualRooms:0,
            filterNeeded:1,
            actualFilter:0,

            actualReservation:0,
            reservationNeeded:1,

            showCart:false,
            showRooms:false,
                searchForm:{
                    numberPeople:0,
                    addmisionDate:null,
                    departureDate:null,
                },
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
           // console.log( this.searchForm);
            axios.post('http://192.241.158.237:8081/mingeso/room/filter',{
                addmisionDate:this.searchForm.addmisionDate,
                departureDate:this.searchForm.departureDate,
                numberPeople:this.searchForm.numberPeople
            }).then((response)=>{
                //console.log(response.data);
                this.rooms = response.data;

                this.showRooms=true
            })
        },
        addToRooms(room){
            if(this.roomIds.includes(room.id)){
                //console.log("ya esta registrada la habitacion")
            }
            else{
            this.roomIds.push(room.id)
            this.roomsReserved.push(room)
            this.showCart=true
            
            }

            //console.log(this.roomsReserved)
        },
       
        createReservation(){
            axios.post('http://192.241.158.237:8081/mingeso/reservation',{
                addmisionDate:this.searchForm.addmisionDate,
                departureDate:this.searchForm.departureDate
                }).then((response)=>{   
                    console.log(response.data);
                    this.reservation =response.data.id
                    this.sendReservation(response.data.id)

            });
        },
        
         sendReservation(id){
             console.log(id)
             this.reservation_id = id
             this.$store.state.reservation_id.push(this.reservation)
             console.log(this.reservation_id)
            for(let i = 0; i < this.roomsReserved.length; i++){
                        console.log(this.roomsReserved[i])
                        const URL = 'http://192.241.158.237:8081/mingeso/reservation/'+id+'/room/'+this.roomsReserved[i].id
                        axios.put(URL);
                }
            this.$router.push('/clientSubmit')
            //console.log("el id de la reserva es "+this.reservation)
        }

        
    },  

}
</script>

<style lang="css">
    .avatar{
        width:120px;
        padding:10px;

    }
    .filter{
    font-size:13px;
    margin-top:20px;  
    background-color:#fbfbfb;
    border-radius:10px;
    padding:35px;
    border:1px solid #efefec;
    }
    .queryButton{
        background: #17a2b8;
        border:none;
        margin:7px;
    }
    .btn:hover {
        background:#17a2b8;
        border:none;
    }
    .room{
        padding:10px;
        background-color:white;
        text-align:left;
        font-size:13px;
        margin-top:15px;
    }
    .reservationButton{
        margin-bottom:5px;
        margin-right:5px;
        float:right
    }
    .cart{
    overflow-y:scroll;
    position:fixed;
    min-height:150px;
    max-height:180px;
    top:305px;
    font-size:12px;
    padding:20px;
    background:White;
    border:10px solid #eee;
    font-family:'Calibri', sans-serif;
    text-transform:Capitalize;
    text-align:left;
    }
    .deleteButton{
        font-size:14px;
        color:#dc3545;
        text-decoration:none;
    }
    .form-group{
        margin:10px;
    }
</style>