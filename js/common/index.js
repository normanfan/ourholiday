var Vue = require('Vue');
import MyLayout from '../../Vue/components/layout.vue';
var vm = new Vue({
  el: '#header',
  components: {
    'my-layout': MyLayout
  }
})
