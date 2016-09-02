//header
var Layout = Vue.extend({
  template: '#layout',
  methods: {
    login: function() {
      alert("a");
    }
  }
});
// Vue.component('my-layout', Layout);
var vm = new Vue({
  el: '#header',
  components: {
    'my-layout': Layout
  }
})
