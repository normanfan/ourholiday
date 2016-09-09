<style lang="sass">

.day-picker {
    ul {
        width: 200px;
        padding: 0 0 0 3px;
        font-size: 0;
        li {
            height: 24px;
            width: 24px;
            margin-left: 3px;
            margin-bottom: 3px;
            text-align: center;
            line-height: 25px;
            display: inline-block;
            font-size: 13px;
            cursor: default;
            user-select: none;
            &.today {
                background-color: rgb(3, 156, 254);
            }
            &.other-month {
                background-color: rgba(100, 117, 152, 0.09);
            }
            &.last-li::after {
                content: " ";
                display: block;
            }
        }
        &.day-content {
            background-color: #fff;
            width: 200px;
            height: 168px;
            border: 1px solid gray;
            padding: 3px 0 0 3px;
            li {
                cursor: pointer;
                &:hover {
                    background-color: #dadada;
                }
                &.selected-day {
                    background-color: #333;
                    color: #fff;
                }
            }
        }
    }
}

</style>

<template lang="html">

<div class="day-picker">
    <ul>
        <li v-for="weekend in weekends">{{weekend}}</li>
    </ul>
    <ul class="day-content">
        <template v-for="date in days">
            <li :class="getClass(date)" v-on:click="selet(date)">{{date.day}}</li>
            <br v-if="isLastLi($index,7)">
        </template>
    </ul>
</div>

</template>

<script>

export default {
    data() {
            return {
                weekends: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
            };
        },
        props: ['childrenData'],
        computed: {

            selectYear: function() {
                return this.childrenData.selectYear;
            },
            selectMonth: function() {
                return this.childrenData.selectMonth;
            },
            selectDay: function() {
                return this.childrenData.selectDay;
            },
            days: function() {
                var selectedYear = this.selectYear,
                    selectedMonth = this.selectMonth - 1,
                    days = [],
                    startDay = new Date(selectedYear, selectedMonth, 1),
                    lastDay = new Date(selectedYear, selectedMonth + 1, 0),
                    lastMonth = new Date(selectedYear, selectedMonth, 0),
                    nextMonth = new Date(selectedYear, selectedMonth + 1, 1),
                    lastMonthDays = lastMonth.getDate();
                //last month
                var remainLastMonthdays = startDay.getDay() == 0 ? 7 : startDay.getDay();
                console.log(remainLastMonthdays);
                for (var i = 0; i < remainLastMonthdays; i++) {
                    days.unshift({
                        day: lastMonthDays - i,
                        year: lastMonth.getFullYear(),
                        month: lastMonth.getMonth() + 1
                    })
                };
                //current month
                var endDays = lastDay.getDate();
                for (var i = 1; i < endDays; i++) {
                    days.push({
                        day: i,
                        year: selectedYear,
                        month: selectedMonth + 1
                    })
                }
                //next month
                var remainNextMonthdays = 42 - days.length;
                for (var i = 1; i <= remainNextMonthdays; i++) {
                    days.push({
                        day: i,
                        year: nextMonth.getFullYear(),
                        month: nextMonth.getMonth() + 1
                    })
                }
                // debugger;

                return days;
            }

        },
        ready() {},
        attached() {},
        methods: {
            'getClass': function(item) {
                var classStr = "",
                    today = new Date();
                if (this.selectMonth == item.month) {
                    classStr += " current-month";
                } else {
                    classStr += " other-month";
                }
                if (item.year == today.getFullYear() && item.month - 1 == today.getMonth() && item.day == today.getDate()) {
                    classStr += " today"
                }
                if (item.year == this.selectYear && item.month == this.selectMonth && item.day == this.selectDay) {
                    classStr += " selected-day"
                }
                return classStr;
            },
            'isLastLi': function(index, length) {
                var result = false;
                if ((index + 1) % length == 0) {
                    result = true;
                }
                return result;
            },
            'selet': function(date) {
                this.$dispatch('select-day', date);
            }
        },
        components: {}
};

</script>
