<template >
  <div class="nav-panel">
    <div class="nav-header">
      <div class="wh-logo">
        <a Class="vh-logo-img" href="#"></a>
      </div>
      <div class="vh-search"></div>
      <div class="wh-menu">
        <span v-on:click="login">登录/注册</span>
      </div>
      <div class="vh-account"></div>
    </div>
  </div>
</template>

<style></style>

<script>
  module.exports={
    methods:{
      login:function(){
        alert("a");
      }
    }
  }
</script>
