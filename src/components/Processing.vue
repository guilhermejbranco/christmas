<template>
  <div class="hello">
    <div class="w-100 text-center">
      <div class="text-center mb-5">
    <vue-typed-js :strings="['A comunicar com os servidores do Pólo Norte...', 'Mensagem de conexão ao Pai Natal enviada...', 'A inserir barrete de Rui Pinto...', 'A validar o código <strong>' + code + '</strong>...',  'O teletrabalho já viu melhores dias...', 'O Duende Fernando faz sestas à hora de almoço agora...', 'A desencriptar a resposta obtida...', '<strong>Finalmente! Já tenho a resposta!</strong>']" @onComplete="done()" class="d-block">
      <h1><span class="typing"></span></h1>
    </vue-typed-js>
    </div>
     <video autoplay muted loop id="myVideo" style="  
  right: 0;
  bottom: 0;
  width: 500px;
  min-height: 100%;
  z-index:-1">
  <source src="@/assets/ron.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>
    </div>
  </div>
</template>

<script type="text/javascript">
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
<style type="text/css">
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
