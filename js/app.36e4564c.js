(function(t){function e(e){for(var a,r,s=e[0],c=e[1],d=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,d||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=o[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=a,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/christmas/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("85ec"),i=o.n(a);i.a},"21e0":function(t,e,o){t.exports=o.p+"media/music.ba6e0668.mp3"},3914:function(t,e,o){t.exports=o.p+"img/Margarida Dias.1f04e814.jpg"},"3a4b":function(t,e,o){},"43f2":function(t,e,o){t.exports=o.p+"img/Clara Picão.f97270cf.jpg"},"47bd":function(t,e,o){t.exports=o.p+"img/Leonor Carrapatoso.26c242b7.jpg"},"532b":function(t,e,o){t.exports=o.p+"img/João Olival.c28a5e18.jpg"},"564e":function(t,e,o){t.exports=o.p+"img/João Cabral.17358cc9.jpg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("f9e3"),o("2dd8");var a=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loading||t.success?t._e():o("Input",{on:{submit:t.submitted}})],1),o("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loading||t.success||!t.submit?t._e():o("div",{staticClass:"font-weight-bold text-center text-danger mt-5"},[t._v(" O código está errado amigo... Olival se és tu a tentar descobrir os códigos aleatóriamente, fica a saber que tens 10^6 (1 000 000) de combinações possíveis. ")])]),o("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loading?o("Processing",{staticStyle:{position:"absolute",top:"0",width:"100%","margin-top":"50px"},attrs:{code:t.code},on:{finished:t.finished}}):t._e()],1),o("transition",{attrs:{name:"fade",mode:"out-in"}},[!t.loading&&t.success?o("div",[o("Reveal",{attrs:{name:t.name}})],1):t._e()]),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("audio",{attrs:{controls:"",id:"player",loop:"",hidden:""}},[a("source",{attrs:{src:o("21e0"),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])}],r=(o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("div",{staticClass:"font-weight-bold w-100 text-center title"},[t._v(" Olá Amigo. ")]),o("div",{staticClass:"row mt-5"},[o("div",{staticClass:"col-1 col-md-4"}),o("div",{staticClass:"col-10 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"},{name:"mask",rawName:"v-mask",value:"######",expression:"'######'"}],staticClass:"input",style:t.triedToSubmit&&6!==t.code.trim().length?"border-bottom: solid 3px #dc3545":"",attrs:{id:"disabled-wrapper",type:"text",placeholder:"Põe aqui o código que recebeste do pai natal"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-8"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.triedToSubmit&&0===t.code.trim().length,expression:"triedToSubmit && code.trim().length === 0"}],staticClass:"mt-3 font-weight-bold text-danger"},[t._v(" Esqueceu-se de pôr o código avô/ó... ")])]),o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.triedToSubmit&&6!==t.code.trim().length&&0!==t.code.trim().length,expression:"triedToSubmit && (code.trim().length !== 6 && code.trim().length !== 0)"}],staticClass:"mt-3 font-weight-bold text-danger"},[t._v(" Mimi, o código tem 6 números, assim não vais lá. ")])])],1),o("div",{staticClass:"col-md-4 text-right"},[o("span",{staticClass:"d-inline-block",attrs:{tabindex:"0"}},[o("b-button",{staticClass:"mt-3 text-right",staticStyle:{"background-color":"black","font-weight":"bold"},attrs:{variant:"dark",onclick:"document.getElementById('player').play()",squared:""},on:{click:function(e){return t.submit()}}},[t._v("Submeter")])],1)])])]),o("div",{staticClass:"col-1 col-md-4"})])])}),s=[],c=(o("498a"),{name:"HelloWorld",methods:{submit:function(){this.triedToSubmit=!0,6===this.code.trim().length&&this.$emit("submit",this.codes[this.code],this.code)}},data:function(){return{code:"",triedToSubmit:!1,codes:{"030331":"Clara Picão",298998:"João Oliveira",408628:"Maria Lima",385311:"Guilherme Branco",613864:"João Olival",413587:"Pedro Soares",905948:"Lucas Laporta",414688:"Margarida Dias",205744:"Leonor Carrapatoso",419229:"Diogo Ferreira",398282:"Diogo Ramos",289981:"Gonçalo Ramalho",604969:"João Cabral",743380:"Sara Azevedo","065779":"Micaela Martins",719483:"Sofia Queiroz",842456:"Carolina Esteves",997348:"Catarina Madureira"}}}}),d=c,l=(o("e706"),o("2877")),u=Object(l["a"])(d,r,s,!1,null,null,null),p=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"w-100 text-center"},[a("div",{staticClass:"text-center mb-5",staticStyle:{height:"100px"}},[a("vue-typed-js",{staticClass:"d-block",attrs:{strings:["A comunicar com os servidores do Pólo Norte...","Mensagem de conexão ao Pai Natal enviada...","A inserir barrete de Rui Pinto...","A validar o código <strong>"+t.code+"</strong>...","O teletrabalho já viu melhores dias...","O Duende Fernando faz sestas à hora de almoço agora...","A desencriptar a resposta obtida...","<strong>Finalmente! Já tenho a resposta!</strong>"]},on:{onComplete:function(e){return t.done()}}},[a("h1",[a("span",{staticClass:"typing"})])])],1),a("video",{staticStyle:{right:"0",bottom:"0",width:"500px","max-width":"100%","min-height":"100%","z-index":"-1",padding:"30px",border:"solid 4px black"},attrs:{autoplay:"",muted:"",loop:"",id:"myVideo"},domProps:{muted:!0}},[a("source",{attrs:{src:o("83ad"),type:"video/mp4"}}),t._v(" Your browser does not support HTML5 video. ")]),t._m(0)])])},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"blob red"}),t._v(" "),o("span",{staticClass:"font-weight-bold"},[t._v("Em directo do Pólo Norte.")])])}],g={name:"Processing",props:{code:{type:String}},methods:{done:function(){this.$emit("finished",!0)}}},b=g,v=(o("68d4"),Object(l["a"])(b,m,f,!1,null,null,null)),h=v.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello",staticStyle:{"background-color":"rgba(255,255,255,0.7)",padding:"50px"}},[a("div",{staticClass:"w-100 text-center"},[a("div",{staticClass:"text-center mb-5"},[t.reveal?t._e():a("vue-typed-js",{staticClass:"d-block",attrs:{strings:["Estás pronto para descobrir?"]},on:{onComplete:function(e){t.showButton=!0}}},[t.reveal?t._e():a("h1",[t.reveal?t._e():a("span",{staticClass:"typing"})])])],1),a("div",[a("transition",{attrs:{name:"fade",mode:"in-out"}},[t.showButton?a("button",{staticClass:"btn btn-dark",staticStyle:{"background-color":"black","font-weight":"bold"},attrs:{squared:""},on:{click:function(e){return t.done()}}},[t._v("Revelar")]):t._e()])],1),a("transition",{attrs:{name:"fade",mode:"in-out"}},[t.reveal?a("div",{staticClass:"font-weight-bold w-100 text-center title"},[a("video",{staticStyle:{position:"fixed",right:"0",bottom:"0","min-width":"100%","min-height":"100%","z-index":"-1"},attrs:{autoplay:"",muted:"",loop:"",id:"myVideo"},domProps:{muted:!0}},[a("source",{attrs:{src:o("ae46"),type:"video/mp4"}}),t._v(" Your browser does not support HTML5 video. ")]),t._v(t._s(t.name.trim())+" ")]):t._e()]),a("transition",{attrs:{name:"bounce"}},[t.reveal?a("div",[a("img",{staticStyle:{width:"100%","max-width":"500px"},attrs:{src:o("9308")("./"+t.name+".jpg"),alt:""}})]):t._e()])],1)])},j=[],w={name:"Processing",props:{name:{type:String}},data:function(){return{audioSources:["@/assets/music.mp3"],reveal:!1,showButton:!1}},methods:{done:function(){this.reveal=!0,this.showButton=!1}}},C=w,y=(o("855a"),Object(l["a"])(C,x,j,!1,null,null,null)),_=y.exports,S={name:"App",components:{Input:p,Reveal:_,Processing:h},data:function(){return{name:"",loading:!1,success:!1,submit:!1,code:""}},methods:{submitted:function(t,e){this.name=t,this.code=e,this.loading=!0},finished:function(){this.submit=!0,this.loading=!1,this.name.length>0&&(this.success=!0)}}},O=S,P=(o("034f"),Object(l["a"])(O,i,n,!1,null,null,null)),M=P.exports,k=o("5f5b"),E=o("b1e0"),L=o("3a60"),T=o.n(L),D=o("8cb8");a["default"].use(D["default"]),a["default"].use(T.a),a["default"].use(k["a"]),a["default"].use(E["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(M)}}).$mount("#app")},"56fa":function(t,e,o){t.exports=o.p+"img/João Oliveira.f35b47f7.jpg"},"5e36":function(t,e,o){t.exports=o.p+"img/Lucas Laporta.9fe06c63.jpg"},"64bf":function(t,e,o){t.exports=o.p+"img/Gonçalo Ramalho.46d2bd8f.jpg"},"68d4":function(t,e,o){"use strict";var a=o("3a4b"),i=o.n(a);i.a},7032:function(t,e,o){t.exports=o.p+"img/Maria Lima.b7de5e98.jpg"},"7c4b":function(t,e,o){t.exports=o.p+"img/Sara Azevedo.54108350.jpg"},"7c92":function(t,e,o){t.exports=o.p+"img/Pedro Soares.e4091caf.jpg"},"7e55":function(t,e,o){},"83ad":function(t,e,o){t.exports=o.p+"media/ron.951685c1.mp4"},"855a":function(t,e,o){"use strict";var a=o("97ad"),i=o.n(a);i.a},"85ec":function(t,e,o){},"8e4c":function(t,e,o){t.exports=o.p+"img/Micaela Martins.f99fedbd.jpg"},9308:function(t,e,o){var a={"./Carolina Esteves.jpg":"e4cf","./Catarina Madureira.jpg":"e1c2","./Clara Picão.jpg":"43f2","./Diogo Ferreira.jpg":"bc4d","./Diogo Ramos.jpg":"9fad","./Gonçalo Ramalho.jpg":"64bf","./Guilherme Branco.jpg":"dde7","./João Cabral.jpg":"564e","./João Olival.jpg":"532b","./João Oliveira.jpg":"56fa","./Leonor Carrapatoso.jpg":"47bd","./Lucas Laporta.jpg":"5e36","./Margarida Dias.jpg":"3914","./Maria Lima.jpg":"7032","./Micaela Martins.jpg":"8e4c","./Pedro Soares.jpg":"7c92","./Sara Azevedo.jpg":"7c4b","./Sofia Queiroz.jpg":"bb29"};function i(t){var e=n(t);return o(e)}function n(t){if(!o.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="9308"},"97ad":function(t,e,o){},"9fad":function(t,e,o){t.exports=o.p+"img/Diogo Ramos.1980600a.jpg"},ae46:function(t,e,o){t.exports=o.p+"media/video.a0c79c5f.mp4"},bb29:function(t,e,o){t.exports=o.p+"img/Sofia Queiroz.6f701731.jpg"},bc4d:function(t,e,o){t.exports=o.p+"img/Diogo Ferreira.2b196b2b.jpg"},dde7:function(t,e,o){t.exports=o.p+"img/Guilherme Branco.06b480e2.jpg"},e1c2:function(t,e,o){t.exports=o.p+"img/Catarina Madureira.803bf9f0.jpg"},e4cf:function(t,e,o){t.exports=o.p+"img/Carolina Esteves.d1b609b3.jpg"},e706:function(t,e,o){"use strict";var a=o("7e55"),i=o.n(a);i.a}});
//# sourceMappingURL=app.36e4564c.js.map