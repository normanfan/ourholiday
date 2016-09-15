import datePicker from "../../Vue/components/datePicker/datePicker.vue";
import leftPanel from "../../Vue/components/leftPanel/leftPanel.vue";
var currentDate = new Date(),
  lastWeekDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);
var initDateEnd = {
    selectYear: currentDate.getFullYear(),
    selectMonth: currentDate.getMonth() + 1,
    selectDay: currentDate.getDate(),
    callback: 'selectDateEnd'
  },
  initDateFrom = {
    selectYear: lastWeekDate.getFullYear(),
    selectMonth: lastWeekDate.getMonth() + 1,
    selectDay: lastWeekDate.getDate(),
    callback: 'selectDateFrom'
  };

var vm = new Vue({
  el: "#wh-container",
  data: {
    remainCount: 0,
    showAdd: false,
    datePickerDataFrom: initDateFrom,
    datePickerDataEnd: initDateEnd,
    dayList: [],
    addFromDate: '',
    addEndDate: '',
    holidayList: [],
    isLoading: true,
    checkedDates: [],
    isModify: false,
    currentType: 'working',
    tabList: [{
      key: 'working',
      value: "working days"
    }, {
      key: 'holiday',
      value: "holiday days"
    }, {
      key: 'remainholiday',
      value: "remain holiday days"
    }]
  },
  components: {
    'date-picker': datePicker,
    'left-panel': leftPanel
  },
  computed: {},
  ready: function() {
    queryDate(this)
  },
  methods: {
    saveAdd: function() {
      this.showAdd = false;
      var classObj = 'workDate';
      if (this.currentType == "holiday") {
        classObj = 'holidayDate';
      }
      var dateArr = this.addFromDate.split('-')
      if (dateArr.length > 0) {

        modifyDate({
          classObj: classObj,
          year: dateArr[0],
          month: Number(dateArr[1]) - 1,
          date: dateArr[2]
        });
      }
    },
    addItem: function(type) {
      this.showAdd = true;
    },
    getButtonText: function() {
      var str = "修改"
      if (this.isModify) {
        str = "取消修改"
      }
      return str;
    },
    deleteSingle: function(date) {
      deleteDates([date], this);
    },
    delete: function() {
      deleteDates(this.checkedDates, this);
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
      if (this.isModify) {} else {

      }
    },
    cancelAdd: function() {
      this.showAdd = false;
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
    changeTab: function(item) {
      if (item.key == this.currentType) {

      } else {
        this.currentType = item.key;
        if (item.key == 'remainholiday') {
          getRemainCount(this);
        } else {
          queryDate(this);
        }
      }
      this.$broadcast('showNormal', false);
    },
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

function deleteDates(dateList, self) {
  var classObj = 'workDate';
  if (self.currentType == "holiday") {
    classObj = 'holidayDate';
  }
  if (dateList.length > 0) {
    $.ajax({
      url: "/holiday/delete",
      type: 'post',
      data: {
        dateList: JSON.stringify(dateList),
        classObj: classObj
      }
    }).then(function(result) {
      vm.query();
    })
  }
}

function getRemainCount(self) {
  $.ajax({
    type: 'get',
    url: '/holiday/remain',
  }).then(function(result) {
    if (result.status == 'success') {
      self.remainCount = result.workDayCount - result.holidayCount;
    }
  }, function() {})
}

function queryDate(self) {
  var endDate = Date.UTC(self.datePickerDataEnd.selectYear, self.datePickerDataEnd.selectMonth - 1, self.datePickerDataEnd.selectDay, 0, 0, 0),
    fromDate = Date.UTC(self.datePickerDataFrom.selectYear, self.datePickerDataFrom.selectMonth - 1, self.datePickerDataFrom.selectDay, 0, 0, 0),
    classObj = 'workDate';
  if (self.currentType == "holiday") {
    classObj = 'holidayDate';
  }
  $.ajax({
    type: 'get',
    url: '/holiday/getworkday',
    data: {
      fromDate: fromDate,
      endDate: endDate,
      classObj: classObj
    }
  }).then(function(result) {
    self.isLoading = false;
    self.dayList = result;
  })
}

function modifyDate(options) {
  var timeStamp = Date.UTC(options.year, options.month, options.date, 0, 0, 0);
  $.ajax({
    type: 'post',
    url: '/holiday/modify',
    data: {
      date: timeStamp,
      classObj: options.classObj
    }
  }).then(function(result) {
    vm.query();
  })
}
