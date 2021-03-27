import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.mixin({
  methods:{
    reRender:()=>{
      if(window.MathJax){
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub])
      }
    }

  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')

