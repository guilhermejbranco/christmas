
<template>
  <div id="app">
 
    <transition name="fade" mode="out-in">
      <Input v-on:submit="submitted" v-if="!loading && !success"/>
    </transition>
    <transition name="fade" mode="out-in">
      
      <div v-if="!loading && !success && submit" class="font-weight-bold text-center text-danger mt-5">
        <!-- eslint-disable no-irregular-whitespace -->
        O código está errado amigo... Olival se és tu a tentar descobrir os códigos aleatóriamente, fica a saber que tens 10^6 (1 000 000) de combinações possíveis. 
      </div>
    </transition>
    
    <transition name="fade" mode="out-in">
      <Processing v-on:finished="finished" style="position:absolute; top:0; width:100%; margin-top:50px;" v-if="loading" :code="code"/>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="!loading && success">
        <Reveal :name="name"/>
      </div>
    </transition>
    
  </div>
</template>

<script type="text/javascript">
import Input from '@/components/Input.vue'
import Processing from '@/components/Processing.vue'
import Reveal from '@/components/Reveal.vue'
export default {
  name: 'App',
  components: {
    Input,
    Reveal,
    Processing
  },
  data(){
    return{
      name: "",
      loading: false,
      success: false,
      submit: false,
      code: ""
    }
  },
  methods:{
    submitted(value, value2){
      this.name = value
      this.code = value2
      this.loading = true
    },
    finished(){
      this.submit = true
      this.loading = false
      if(this.name.length > 0){    
        this.success = true
      }
    }
  }

}
</script>

<style type="text/css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: black;
  margin-top: 60px;
}
.input{
  border: none;
  border-bottom: solid 3px black;
  padding-bottom:10px;
  width:100%;
  font-weight: bold;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
input:focus,
select:focus,
textarea:focus,
span:focus,
button:focus {
    outline: none !important;
}
input::placeholder{
  color:black
}

</style>
