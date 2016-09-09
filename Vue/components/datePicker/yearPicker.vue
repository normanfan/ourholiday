<style lang="sass">

.year-picker {
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
            &.selected-year {
                background-color: rgb(17, 166, 74);
            }
            &.other-year {
                background-color: rgba(100, 117, 152, 0.09);
            }
        }
    }
}

</style>

<template lang="html">

<div class="year-picker">
    <ul>
        <template v-for="year in years">
            <li :class="getClass(year,$index)" @click="select(year)">{{year}}
            </li>
            <br v-if="isLastLi($index,4)">
        </template>
    </ul>
</div>

</template>

<script>

export default {
    data() {
            return {};
        },
        props: ['childrenData'],
        computed: {
            selectYear: function() {
                return this.childrenData.selectYear;
            },
            years: function() {
                var startYear = this.selectYear - this.selectYear % 10 - 1,
                    years = [];
                for (var i = 0; i < 12; i++) {
                    years.push(startYear++)
                }
                return years;
            }
        },
        ready() {},
        attached() {},
        methods: {
            'getClass': function(year, index) {
                var classStr = "";
                if (this.selectYear == year) {
                    classStr += "selected-year";
                }
                if (index == 0 || index == 11) {
                    classStr += " other-year";
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
            select: function(year) {
                var self = this;
                this.$dispatch('select-day', {
                    year: year,
                    month: self.childrenData.selectMonth,
                    day: self.childrenData.selectDay
                });
            }
        },
        components: {}
};

</script>
