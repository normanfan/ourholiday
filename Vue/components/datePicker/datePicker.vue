<style lang="sass">

.expand-transition {
    transition: all .3s ease;
    height: auto;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
}


/* .expand-enter 定义进入的开始状态 */


/* .expand-leave 定义离开的结束状态 */

.expand-enter,
.expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
}

.date-pciker {
    width: 200px;
    position: relative;
    &:focus {
        outline: 0;
    }
    .date-control-panel {
        span {
            user-select: none;
            cursor: pointer;
            display: inline-block;
        }
    }
    .content {
        user-select: none;
        cursor: pointer;
    }
    .drop-down {
        position: absolute;
        z-index: 6
    }
}

</style>

<template lang="html">

<div class="date-pciker" tabindex="1" @blur="hideDropDown">
    <div class="data-show">
        <div class="data-show-content" @click="showDropDown">{{getValue()}}</div>
    </div>
    <div class="drop-down" transition="expand" v-if="isShow">
        <div class="date-control-panel" @click.stop>
            <span class="prev" @click="changeDate('prev')">prev</span>
            <span class="panal-content" @click="changeView">{{getContent()}}</span>
            <span class="next" @click="changeDate('next')">next</span>
        </div>
        <div class="date-pciker-content" @click.stop>
            <component :is="currentView" :children-data="childrenData"></component>
        </div>
    </div>
</div>

</template>

<script>

import dayPicker from './dayPicker.vue';
import monthPicker from './monthPicker.vue';
import yearPicker from './yearPicker.vue';
export default {
    data() {
            return {
                currentView: 'day-picker',
                isShow: false
            };
        },
        props: ['childrenData'],
        computed: {},
        ready() {},
        attached() {},
        methods: {
            showDropDown: function() {
                if (this.isShow) {
                    this.isShow = false;
                } else {

                    this.isShow = true;
                }
            },
            hideDropDown: function() {
                this.isShow = false;
            },
            getValue: function() {
                return `${this.childrenData.selectMonth}/${this.childrenData.selectDay}/${this.childrenData.selectYear}`
            },
            getContent: function() {
                var str = "",
                    selectYear = this.childrenData.selectYear;
                if (this.currentView == "day-picker") {
                    str = `${this.childrenData.selectMonth},${selectYear}`;
                } else if (this.currentView == "month-picker") {
                    str = `${selectYear}`;
                } else {
                    var startYear = selectYear - 1 - selectYear % 10;
                    str = `${startYear}-${startYear+11}`;
                }
                return str;
            },
            changeView: function() {
                if (this.currentView == "day-picker") {
                    this.currentView = "month-picker";
                } else if (this.currentView == "month-picker") {
                    this.currentView = "year-picker";
                }
            },
            changeDate: function(type) {
                if (type == "prev") {
                    if (this.currentView == "day-picker") {
                        this.childrenData.selectMonth--;
                        if (this.childrenData.selectMonth == 0) {
                            this.childrenData.selectMonth = 12;
                            this.childrenData.selectYear--;
                        }

                    } else if (this.currentView == "month-picker") {
                        this.childrenData.selectYear--;
                    } else {
                        this.childrenData.selectYear = this.childrenData.selectYear - 10 - this.childrenData.selectYear % 10;
                    }
                } else {
                    if (this.currentView == "day-picker") {
                        this.childrenData.selectMonth++;
                        if (this.childrenData.selectMonth == 13) {
                            this.childrenData.selectMonth = 1;
                            this.childrenData.selectYear++;
                        }

                    } else if (this.currentView == "month-picker") {
                        this.childrenData.selectYear++;
                    } else {
                        this.childrenData.selectYear = this.childrenData.selectYear + 10 - this.childrenData.selectYear % 10;
                    }
                }
            }
        },
        events: {
            'select-day': function(date) {
                var oldView = this.currentView;
                if (this.currentView == "year-picker") {
                    this.currentView = "month-picker"
                } else if (this.currentView == "month-picker") {
                    this.currentView = "day-picker"
                }
                var callback = 'selectDate';
                if (this.childrenData.callback) {
                    callback = this.childrenData.callback;
                }
                this.$dispatch(callback, date, oldView);
            },
            'show-drop': function(isShow) {
                this.isShow = isShow;
            }
        },
        components: {
            'day-picker': dayPicker,
            'month-picker': monthPicker,
            'year-picker': yearPicker
        }
};

</script>
