window.onload = function() {
  var vm = new Vue({
    el: '#days',
    data: {
      holidays: [],
      workDays: []
    },
    computed: {
      uniqueHolidays: function() {
        var length = this.holidays.length;
        var array = [];
        for (var i = 0; i < length; i++) {
          if (array[this.holidays[i].date]) {

          } else {
            array[this.holidays[i].date] = true;
            array.push(this.holidays[i])
          }
        }
        return array;
      },
      uniqueWorkdays: function() {
        var length = this.workDays.length,
          array = [];
        for (var i = 0; i < length; i++) {
          if (array[this.workDays[i].Date]) {

          } else {
            array[this.workDays[i].Date] = true;
            array.push(this.workDays[i])
          }
        }
        return array;
      }
    },
    methods: {
      getRemainDays: function() {
        return this.uniqueWorkdays.length - this.uniqueHolidays.length;
      },
      edit: function() {
        alert('老公还没做完恩！！稍等')
        // $.ajax({
        //   url: '/sendmessage',
        //   type: 'get',
        //   success: function(results) {
        //     alert('success');
        //   }
        // })

      }
    }
  })

  function getWorkDays() {
    $.ajax({
      url: '/getworkday',
      type: 'get',
      data: '',
      success: function(results) {
        vm.workDays = results.results;
      }
    })
  }

  function getHolidays() {
    $.ajax({
      url: '/getholiday',
      type: 'get',
      data: '',
      success: function(results) {
        vm.holidays = results.results;
      }
    })
  }
  getWorkDays();
  getHolidays();
};
