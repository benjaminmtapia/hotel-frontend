import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
   state:{
       reservation_id:[]
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