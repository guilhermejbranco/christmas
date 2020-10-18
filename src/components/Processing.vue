<template>
  <div class="hello">
    <div class="w-100 text-center">
      <div class="text-center mb-5" style="height:100px;">
    <vue-typed-js :strings="['A comunicar com os servidores do Pólo Norte...', 'Mensagem de conexão ao Pai Natal enviada...', 'A inserir barrete de Rui Pinto...', 'A validar o código <strong>' + code + '</strong>...',  'O teletrabalho já viu melhores dias...', 'O Duende Fernando faz sestas à hora de almoço agora...', 'A desencriptar a resposta obtida...', '<strong>Finalmente! Já tenho a resposta!</strong>']" @onComplete="done()" class="d-block">
      <h1><span class="typing"></span></h1>
    </vue-typed-js>
    </div>
     <video autoplay muted loop id="myVideo" style="  
  right: 0;
  bottom: 0;
  width: 500px;
  max-width: 100%;
  
  min-height: 100%;
  z-index:-1;
  padding:30px;
  border:solid 4px black">
  <source src="@/assets/ron.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>
<div>
  <div class="blob red"></div> <span class="font-weight-bold">Em directo do Pólo Norte.</span>
</div>
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

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
	box-sizing: border-box;
}


.blobs-container {
	display: flex;
}

.blob {
	background: black;
	border-radius: 50%;
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	margin: 10px;
	height: 20px;
	width: 20px;
	transform: scale(1);
	animation: pulse-black 2s infinite;
}

@keyframes pulse-black {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}

.blob.white {
	background: white;
	box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
	animation: pulse-white 2s infinite;
}

@keyframes pulse-white {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
	}
}

.blob.red {
	background: rgba(255, 82, 82, 1);
	box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
	animation: pulse-red 2s infinite;
  display: -webkit-inline-flex;
  margin-bottom:-2px;
  margin-right: 10px;
}

@keyframes pulse-red {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
	}
}

.blob.orange {
	background: rgba(255, 121, 63, 1);
	box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);
	animation: pulse-orange 2s infinite;
}

@keyframes pulse-orange {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);
	}
}

.blob.yellow {
	background: rgba(255, 177, 66, 1);
	box-shadow: 0 0 0 0 rgba(255, 177, 66, 1);
	animation: pulse-yellow 2s infinite;
}

@keyframes pulse-yellow {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255, 177, 66, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 177, 66, 0);
	}
}

.blob.blue {
	background: rgba(52, 172, 224, 1);
	box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
	animation: pulse-blue 2s infinite;
}

@keyframes pulse-blue {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
	}
}

.blob.green {
	background: rgba(51, 217, 178, 1);
	box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
	animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
	}
}

.blob.purple {
	background: rgba(142, 68, 173, 1);
	box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);
	animation: pulse-purple 2s infinite;
}

@keyframes pulse-purple {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
	}
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}
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
