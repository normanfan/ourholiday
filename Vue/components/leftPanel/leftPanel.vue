<style lang="sass">

.left-panel {
    position: fixed;
    transition: all .3s ease;
    z-index: 5;
    left: 0;
    color: #fff;
    background: #333;
    padding: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    min-height: 169px;
    top: 32%;
    .normal {
        position: relative li {
            cursor: pointer;
        }
        li {
            color: grey;
            cursor: pointer;
            line-height: 25px;
            height: 25px;
            &+li {
                margin-top: 10px;
            }
            &:hover,
            &.selected {
                color: #fff;
            }
        }
        .hide {
            position: absolute;
            bottom: 9px;
            cursor: pointer;
        }
    }
    .mini {
        width: 17px;
        white-space: normal;
        cursor: pointer;
    }
}

</style>

<template lang="html" el>

<div class="left-panel">
    <div class="normal" v-if="isNormal">
        <ul>
            <li v-for="item in list" @click="selectItem(item,$index)" :class="getClass($index)">{{item.value}}</li>
        </ul>
        <div class="hide" @click="showNormal(false)">hide me</div>
    </div>
    <div class="mini" @click="showNormal(true)" v-else>
        快来点我切换呀
    </div>
</div>

</template>

<script>

export default {
    data() {
            return {
                isNormal: false,
                location: {
                    isReady: false
                },
                selectIndex: 0,
            };
        },
        props: ['list', 'callback'],
        computed: {
            translate: function() {
                // var left = (0 - this.selectedIndex) * 100 + "%";
                // return {
                //     transform: 'translate(' + left + ')'
                // }
            }
        },
        ready() {},
        attached() {},
        events: {
            showNormal: function(isShow) {
                this.isNormal = isShow;
            }
        },
        methods: {
            getClass: function(index) {
                var str = "";
                if (this.selectIndex == index) {
                    str = 'selected';
                };
                return str
            },
            mouseDown: function(event) {
                console.log()
                this.location.isReady = true;
            },
            mouseUp: function() {
                this.location.isReady = false;
            },
            mouseMove: function(event) {
                console.log(event.clientY);
            },
            showNormal: function(isShow) {
                this.isNormal = isShow;
            },
            selectItem: function(item, index) {
                this.selectIndex = index;
                this.$dispatch(this.callback, item)
            }
        },
        components: {}
};

</script>
