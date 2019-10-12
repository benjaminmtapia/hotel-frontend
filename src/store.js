import vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'

export default new vuex.Store({
   state:{
       reservation_id:''
   },
   mutations:{
       changeReservationid(state,reservation_id){
        state.reservation_id = reservation_id
       }
   },
   getters:{
       reservation_id: state=> state.reservation_id
   } 
})