<style lang="sass">

.month-picker {
    ul {
        font-size: 0;
        white-space: nowrap;
        li {
            cursor: pointer;
            display: inline-block;
            font-size: 13px;
            height: 48px;
            width: 48px;
            line-height: 48px;
            text-align: center;
            &.selected-month {
                background-color: rgb(17, 166, 74);
            }
        }
    }
}

</style>

<template lang="html">

<div class="month-picker picker-content">
    <ul>
        <template v-for="month in monthList">
            <li :class="getClass($index)" v-on:click="select($index)">{{month}}</li>
            <br v-if="isLastLi($index,4)">
        </template>
    </ul>
</div>

</template>

<script>

export default {
    data() {
            return {
                monthList: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            };
        },
        props: ['childrenData'],
        computed: {
            selectMonth: function() {
                return this.childrenData.selectMonth;
            }
        },
        ready() {},
        attached() {},
        methods: {
            'getClass': function(month) {
                var classStr = "";
                if (this.selectMonth - 1 == month) {
                    classStr += "selected-month";
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
            select: function(index) {
                var self = this;
                this.$dispatch('select-day', {
                    year: self.childrenData.selectYear,
                    month: index + 1,
                    day: self.childrenData.selectDay
                });
            }
        },
        components: {}
};

</script>
