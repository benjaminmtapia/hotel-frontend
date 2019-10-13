<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  
  components:{
    Navbar
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@import '/node_modules/@syncfusion/ej2-base/styles/material.css';
@import '/node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '/node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '/node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '/node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '/node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '/node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '/node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
