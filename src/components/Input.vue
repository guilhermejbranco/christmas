<template>
  <div class="hello">
     <div class="font-weight-bold w-100 text-center" style="font-size:7rem;">
      Olá Amigo.
      
    </div>
    
    <div class="row mt-5">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <input id="disabled-wrapper" type="text" v-model="code" class="input" placeholder="Insere aqui o código que recebeste do pai natal" v-mask="'######'" :style="triedToSubmit && code.trim().length !== 6 ? 'border-bottom: solid 3px #dc3545' : ''">
                        <div class="row">
                          <div class="col-md-8">
                            <transition name="fade" mode="out-in">
                              <div class="mt-3 font-weight-bold text-danger" v-show="triedToSubmit && code.trim().length === 0">
                              Esqueceu-se de pôr o código avô/ó...
                              </div>
                            </transition>
                            <transition name="fade" mode="out-in">
                              <div class="mt-3 font-weight-bold text-danger" v-show="triedToSubmit && (code.trim().length !== 6 && code.trim().length !== 0)">
                              Mimi, o código tem 6 números, assim não vais lá.
                              </div>
                            </transition>
                            </div>
                          <div class="col-md-4 text-right">
                            <span  class="d-inline-block" tabindex="0">
                       <b-button  variant="dark" squared style="background-color:black; font-weight:bold"  class="mt-3 text-right" @click="submit()">Submeter</b-button>
  </span>
                          </div>
                        </div>
                             
         
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    methods:{
    submit(){
      this.triedToSubmit = true
      if(this.code.trim().length === 6){
        this.$emit('submit', this.codes[this.code], this.code)
      }
    }
  },
    data(){
    return{
      code: '',
      triedToSubmit: false,
      codes:{
        "030331" : "Clara Picão",
        "298998" : "João Oliveira",
        "408628" : "Maria Lima",
        "385311" : "Guilherme Branco",
        "613864" : "João Olival",
        "413587" : "Pedro Soares",
        "905948" : "Lucas",
        "414688" : "Margarida Dias",
        "205744" : "Leonor Carrapatoso",
        "419229" : "Diogo Ferreira",
        "398282" : "Diogo Ramos",
        "289981" : "Gonçalo Ramalho",
        "604969" : "João Cabral",
        "743380" : "Sara Azevedo",
        "065779" : "Micaela Martins",
        "719483" : "Sofia Queiroz",
        "842456" : "Carolina Esteves",
        "997348" : "Catarina Madureira"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
