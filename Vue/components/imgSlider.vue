<style lang="sass">

.img-slider {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    ul {
        transition: all .5s ease;
        width: 100%;
        height: 100%;
        white-space: nowrap;
        li {
            height: 100%;
            width: 100%;
            display: inline-block;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .controller-panel {
        text-align: center;
        span {
            margin-right: 5px;
            cursor: pointer;
        }
    }
}

</style>

<template lang="html">

<div class="img-slider">
    <ul :style="translate">
        <li class="img" v-for="img in imgs" track-by="$index">
            <img :src="img" alt="img" />
        </li>
    </ul>
    <div class="controller-panel">
        <span v-for="img in imgs" v-on:click="changImg($index)" track-by="$index">{{$index+1}}</span>
    </div>
</div>

</template>

<script>

export default {
    data() {
            return {
                imgs: ["http://ac-bvpkzuy5.clouddn.com/f79fe858be612caa.jpg",
                    "http://ac-bvpkzuy5.clouddn.com/d56569b9e44c0e12.jpg",
                    "http://ac-bvpkzuy5.clouddn.com/f79fe858be612caa.jpg"
                ],
                selectedIndex: 0
            };
        },
        computed: {
            translate: function() {
                var left = (0 - this.selectedIndex) * 100 + "%";
                return {
                    transform: 'translate(' + left + ')'
                }
            }

        },
        ready() {
            var self = this;
            setInterval(function() {
                self.selectedIndex++;
                if (self.selectedIndex > self.imgs.length - 1) {
                    self.selectedIndex = 0;
                }
            }, 5000)
        },
        attached() {},
        methods: {
            changImg: function(index) {
                this.selectedIndex = index;
            }
        },
        components: {}
};

</script>
