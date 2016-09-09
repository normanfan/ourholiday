<style lang="sass">

/* 必需 */

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

.nav-header {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    height: 70px;
    white-space: nowrap;
    font-size: 0;
    .logo {
        display: inline-block;
        img {
            height: 70px;
        }
    }
    .nav-header-right {
        padding-top: 30px;
        padding-left: 50px;
        vertical-align: top;
        height: 100%;
        width: calc(100% - 75px);
        font-size: 14px;
        display: inline-block;
        .menu {
            >div {
                margin-right: 20px;
                cursor: pointer;
                position: relative;
            }
            .menu-panel {
                .menu-dropdown {
                    position: absolute;
                    z-index: 100;
                }
                &:focus {
                    outline: 0;
                }
                li {
                    height: 20px;
                    line-height: 20px;
                }
            }
        }
        .search {
            margin-right: 10px;
            input {
                padding: 0 5px;
            }
        }
    }
}

</style>

<template lang="html">

<div class='nav-header'>
    <div class="logo">
        <img src="../../public/imgs/logo.jpg" alt="" />
    </div>
    <div class="nav-header-right">
        <div class='menu left'>
            <div class="left" v-on:click="goHome">主页</div>
            <div class="left menu-panel" v-on:click.stop="showMenu" v-on:blur="hideMenu" tabindex="1">菜单
                <div class="menu-dropdown" transition="expand" v-el:menu v-if="isSHowMenu" v-on:click.stop>
                    <ul>
                        <li v-on:click.stop="viewMore">查看详情</li>
                        <li v-on:click.stop="viewDemo">我的DEMO</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header-right right">
            <!-- <div class="search left">
                <input type="text" placeholder="so so">
                <i>搜索</i>
            </div> -->
            <div class="login right">
                <a href="#">登录</a>
                <a href="#">注册</a>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
    data() {
            return {
                isSHowMenu: false,
            };
        },
        computed: {},
        ready() {},
        attached() {

        },
        methods: {
            "goHome": function() {
                window.location.href = "/";
            },
            "showMenu": function() {
                this.isSHowMenu = !this.isSHowMenu;
                if (this.isSHowMenu) {}
            },
            "hideMenu": function() {
                this.isSHowMenu = false;
            },
            'viewMore': function() {
                this.isSHowMenu = false;
                alert('i will go to see menu')
            },
            'viewDemo': function() {
                window.location.href = "/view/demo";
            }
        },
        components: {}
};

</script>
