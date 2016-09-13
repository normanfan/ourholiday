import datePicker from "../../Vue/components/datePicker/datePicker.vue";
var currentDate = new Date(),
  nextWeekDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
var initDateEnd = {
    selectYear: nextWeekDate.getFullYear(),
    selectMonth: nextWeekDate.getMonth() + 1,
    selectDay: nextWeekDate.getDate(),
    callback: 'selectDateEnd'
  },
  initDateFrom = {
    selectYear: currentDate.getFullYear(),
    selectMonth: currentDate.getMonth() + 1,
    selectDay: currentDate.getDate(),
    callback: 'selectDateFrom'
  };
var vm = new Vue({
  el: "#wh-container",
  data: {
    datePickerDataFrom: initDateFrom,
    datePickerDataEnd: initDateEnd,
    dayList: [],
    isLoading: true,
    checkedDates: [],
    isModify: false
  },
  components: {
    'date-picker': datePicker
  },
  computed: {},
  ready: function() {
    queryDate(this)
  },
  methods: {
    deleteSingle: function(date) {
      deleteDates([date]);
    },
    delete: function() {
      deleteDates(this.checkedDates);
    },
    query: function() {
      this.isLoading = true;
      queryDate(this);
    },
    goHome: function() {
      window.location.href = '/home'
    },
    modify: function() {
      this.isModify = !this.isModify;
        modifyDate();
    }
  },
  filters: {
    dateFormat: function(timeStamp) {
      var date = new Date(timeStamp),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();
      return year + "/" + month + "/" + day;
    }
  },
  events: {
    selectDateFrom: function(date, currentView) {
      this.datePickerDataFrom.selectYear = date.year;
      this.datePickerDataFrom.selectMonth = date.month;
      this.datePickerDataFrom.selectDay = date.day;
      if (currentView == 'day-picker') {
        this.$broadcast('show-drop', false);
      }
    },
    selectDateEnd: function(date, currentView) {
      this.datePickerDataEnd.selectYear = date.year;
      this.datePickerDataEnd.selectMonth = date.month;
      this.datePickerDataEnd.selectDay = date.day;
      if (currentView == 'day-picker') {
        this.$broadcast('show-drop', false);
      }
    }
  }
})

function deleteDates(dateList) {
  if (dateList.length > 0) {
    $.ajax({
      url: "/holiday/delete",
      type: 'post',
      data: {
        dateList: JSON.stringify(dateList)
      }
    }).then(function(result) {
      vm.query();
    })
  }
}

function queryDate(self) {
  var endDate = Date.UTC(self.datePickerDataEnd.selectYear, self.datePickerDataEnd.selectMonth - 1, self.datePickerDataEnd.selectDay, 0, 0, 0),
    fromDate = Date.UTC(self.datePickerDataFrom.selectYear, self.datePickerDataFrom.selectMonth - 1, self.datePickerDataFrom.selectDay, 0, 0, 0);
  $.ajax({
    type: 'get',
    url: '/holiday/getworkday',
    data: {
      fromDate: fromDate,
      endDate: endDate
    }
  }).then(function(result) {
    console.log(result);
    self.isLoading = false;
    self.dayList = result;
  })
}

function modifyDate() {
  var date = new Date();
  var timeStamp = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0)
  console.log('shijian' + timeStamp);
  $.ajax({
    type: 'post',
    url: '/holiday/modify',
    data: {
      date: timeStamp,
      name: "hello"
    }
  }).then(function(result) {
    vm.query();
  })
}
