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
        &.no-animation {
            transition: none;
        }
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
    <ul :style="translate" class="{{initClass}}">
        <li class="img" v-for="img in imgList" track-by="$index">
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
                isLast: false,
                selectedIndex: 1
            };
        },
        computed: {
            initClass: function() {
                if (this.selectedIndex > this.imgList.length - 1) {
                    this.selectedIndex = 1;
                    return "no-animation";
                }
            },
            translate: function() {
                var left = (0 - this.selectedIndex) * 100 + "%";
                return {
                    transform: 'translate(' + left + ')'
                }
            },
            imgList: function() {
                let length = this.imgs.length,
                    imgList = this.imgs.slice(0, length);
                if (length > 0) {
                    let firstImg = imgList[0],
                        lastImg = imgList[length - 1];
                    imgList.unshift(firstImg);
                    imgList.push(lastImg);
                }
                return imgList;
            },
            styleObj: function() {

            }

        },
        ready() {
            let self = this,
                splitTimer = 3000;

            function slider(splitTime) {

                setTimeout(function() {
                    splitTime = splitTimer;
                    self.selectedIndex++;
                    if (self.selectedIndex==self.imgList.length) {
                        splitTime = 0;
                    }
                    slider(splitTime);
                }, splitTime);
            }
            slider(splitTimer)
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
