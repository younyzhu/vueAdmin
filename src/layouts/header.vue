<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Vue Admin</b></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <!--<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">-->
        <!--<span class="sr-only">Toggle navigation</span>-->
      <!--</a>-->
      <!-- Navbar Right Menu -->
      <div class="navbar-right-menu">
        <el-menu default-active="1" class="transparentBg" mode="horizontal" >
          <el-menu-item index="1"><span><i class="el-icon-setting"></i></span></el-menu-item>
          <el-menu-item index="3"><span>订单管理</span></el-menu-item>
          <el-submenu index="2">
            <template slot="title"><span>个人中心</span></template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </nav>
  </header>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $backgroundColor:#3c8dbc;

  .transparentBg{
    background-color: transparent;
  }

  .main-header{
    position: relative;
    max-height: 100px;
    z-index: 1030;
  a{
    text-decoration: none;
    cursor:pointer;
  }
  .nav:before{
    clear: both;
  }
  .navbar {
    -webkit-transition: margin-left 0.3s ease-in-out;
    -o-transition: margin-left 0.3s ease-in-out;
    transition: margin-left 0.3s ease-in-out;
    margin-bottom: 0;
    margin-left: 230px;
    border: none;
    min-height: 60px;
    border-radius: 0;
    background-color:$backgroundColor;
  .navbar-right-menu{
    float:right;
    background-color:$backgroundColor;
  }

  li span{
    color:#fff;
  }
  a:hover,li:hover{
    background:#367fa9;
  }
  .el-menu--horizontal .el-menu-item:hover, .el-menu--horizontal .el-submenu__title:hover {
    background: #367fa9;
  }
  }
  .logo{
    -webkit-transition: width .3s ease-in-out;
    -o-transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;
    display: block;
    float: left;
    height: 60px;
    font-size: 20px;
    line-height: 60px;
    text-align: center;
    width: 230px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 300;
    overflow: hidden;
    color: #fff;
    background-color: #367fa9;
  .logo-lg{
    display:block;
  }
  .logo-mini{
    display:none;
  }
  }
  .sidebar-toggle{
    float: left;
    background-color: transparent;
    background-image: none;
    padding: 20px 20px;
    font-family: fontAwesome;
    color: rgb(255, 255, 255);
  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
  }
  .sidebar-toggle:before {
    content: "\f0c9";
  }
  }
</style>
