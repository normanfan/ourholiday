import layout from '../../vue/components/layout.vue';
import dayPicker from '../../Vue/components/datePicker/datePicker.vue';
import grid from '../../Vue/components/grid/grid.vue';
var components = {
  'my-layout': layout,
  'day-picker': dayPicker,
  'grid': grid

};
var vm = new Vue({
  el: '#container',
  data: {
    menus: [{
      name: 'dayPicker',
      components: 'day-picker',
      type: 1,
      data: {
        selectYear: 2016,
        selectMonth: 9,
        selectDay: 1
      }
    }, {
      name: 'grid',
      components: 'grid',
      type: 2,
      data: {
        options: {},
        columns: [{
          displayName:"aaa",
          columnName:"Hello"
        },{
          displayName:"action",
          columnName:"Action",
          filter:function(){
            return "Action"
          }
        }],
        columnDatas:[{
          Hello:"a",
          ddd:'cc'
        },
        {
          Hello:"b"
        }]
      }
    }],
    childrenData: {},
    selectMenuIndex: 1,
  },
  computed: {
    currentView: function() {
      var menu = this.menus[this.selectMenuIndex];
      this.childrenData = menu.data;
      return menu.components
    }
  },
  components: components,
  methods: {
    'checkSelected': function(index) {
      if (index == this.selectMenuIndex) {
        return 'selected';
      }
    },
    'selectMenu': function(index) {
      if (index == this.selectMenuIndex) {

      } else {
        this.selectMenuIndex = index;
      }
    }
  },
  events: {
    'selectDate': function(date) {
      this.menus[0].data.selectYear = date.year;
      this.menus[0].data.selectMonth = date.month;
      this.menus[0].data.selectDay = date.day;
    }

  }
})
