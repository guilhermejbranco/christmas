<template>
  <div class="hello">
    <div class="w-100 text-center">
      <div class="text-center mb-5">
    <vue-typed-js :strings="['A comunicar com os servidores do Pólo Norte...', 'A validar o código <strong>' + code + '</strong>...', 'Está dificil...', 'O teletrabalho já viu melhores dias...', 'O Duende Fernando faz sestas à hora de almoço agora...', '<strong>Finalmente! Já tenho a resposta!</strong>']" @onComplete="done()" class="d-block">
      <h1><span class="typing"></span></h1>
    </vue-typed-js>
    </div>
    <img src="https://i.pinimg.com/originals/c3/88/a6/c388a6a67a785c35b116d24eeca11234.gif" alt="" width="300">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Processing',
  props:{
    code:{
      type:String
    }
  },
  methods:{
    done(){
      this.$emit("finished", true)
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
