import layout from "../vue/components/layout.vue";
import imgSlider from "../vue/components/imgSlider.vue";
var vm = new Vue({
  el:"#container",
  components:{
    'my-layout':layout,
    'img-slider':imgSlider
  }
})
