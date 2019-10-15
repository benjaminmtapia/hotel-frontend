import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export const store = new Vuex.Store({
   state:{
       reservation_id:[],
       reservations:[],
       reservationData:[],
       rooms:[],
       roomsData:[],
       clientData:[]
   },
   mutations: {
    async getRooms(state){
        await axios
          .get('http://192.241.158.237:8081/mingeso/rooms')
          .then(response => (
              state.rooms = response.data
              ))
            for(let i =0; i < state.rooms.length;i++ ){
                state.roomsData.push({
                    Id: state.rooms[i].id,
                    Text: "Habitacion "+ state.rooms[i].roomNumber,
                    Color: "#ff8787"
                })
            }
            
            return state.roomsData
      },
    async getReservations(state){
        await axios.get('http://192.241.158.237:8081/mingeso/reservations').then((response)=>(
            state.reservations = response.data
        ))
        //console.log(state.reservations)
        for(let i =0; i < state.reservations.length; i++){
            if(state.reservations[i].rooms.length!=0){
                for(let j=0;j < state.reservations[i].rooms.length;j++){
                    state.reservationData.push({
                        EventName: "Reserva " + state.reservations[i].id,
                        StartTime: new Date(state.reservations[i].addmisionDate),
                        EndTime: new Date(state.reservations[i].departureDate),
                        OwnerId: state.reservations[i].rooms[j].id,
                        IsAllDay: true,
                        Subject: "Reserva #" + state.reservations[i].id 
                    })
                }
            }
        }
        //console.log(state.reservationData)
        return state.reservationData
    }
   }
})