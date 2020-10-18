<template>
  <div class="hello" style="background-color: rgba(255,255,255,0.7);
padding: 50px;
}">
    <div class="w-100 text-center">
      <div class="text-center mb-5">
        <!-- <audio controls autoplay>
        <source src="@/assets/music.mp3" type="audio/mpeg">
        </audio> -->



    <vue-typed-js :strings="['Estás pronto para descobrir?']" class="d-block" @onComplete="showButton = true" v-if="!reveal">
      <h1 v-if="!reveal"><span class="typing" v-if="!reveal"></span></h1>
    </vue-typed-js>
    
    </div>
    
    <div>
      <transition name="fade" mode="in-out">
      <button  class="btn btn-dark" @click="done()" squared style="background-color:black; font-weight:bold" v-if="showButton">Revelar</button>
      </transition>
    </div>

    <transition name="fade" mode="in-out">
      
      <div class="font-weight-bold w-100 text-center title" v-if="reveal">
        <video autoplay muted loop id="myVideo" style="  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  z-index:-1">
  <source src="@/assets/video.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>{{name.trim()}}
        
      </div>
    </transition>
    <transition name="bounce">
          <div v-if="reveal">
            <img :src="require('@/assets/imgs/' +  name + '.jpg')" alt=""  style="width:100%; max-width: 500px">
          </div>
        </transition>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'Processing',
  
  props:{
    name:{
      type:String
    }
  },
  data(){
    return{ 
      audioSources: ['@/assets/music.mp3'],
      reveal: false,
      showButton: false
    }
  },
  methods:{
    done(){
      this.reveal = true
      this.showButton = false
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
@media only screen and (max-width: 600px) {
  .title {
    font-size: 3rem !important;
    text-align: center !important;
    padding:20px;
  }
  .hello{
    padding-top: 0px !important;
  }
}
.title{
  font-size: 7rem;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.media-controls.inline .time-control, .media-controls.inline .status-label{
  display:none !important;
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
