<template>
  <div id="app" class="wrapper">
    <_header_></_header_>
    <_sidebar_></_sidebar_>
    <transition name="fade">
    <router-view></router-view>
    </transition>
    <_footer_></_footer_>
  </div>
</template>

<script>
import _footer_ from './layouts/footer';
import _header_ from './layouts/header';
import _sidebar_ from './layouts/sidebar';


export default {
  components: {
    _footer_,
    _header_,
    _sidebar_,
  },
};
</script>

<style lang="scss">
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: 400;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 100%;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
    margin: 0;
  }
  * {
    /* -webkit-box-sizing: border-box; */
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .wrapper{
    min-height: 100%;
    position: relative;
    overflow: hidden;
  }

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

  .main-sidebar{
    position: absolute;
    top: 0px;
    left: 0px;
    padding-top: 60px;
    min-height: 100%;
    width: 230px;
    z-index: 810;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
    transition: none;
    background-color: rgb(34, 45, 50);
    .sidebar{
      padding-bottom: 10px;
      height:auto;
    }
    .sidebar-form {
      border-radius: 3px;
      border: 1px solid #374850;
      margin: 10px 10px;
    }
    .user-panel {
      position: relative;
      width: 100%;
      padding: 10px;
      overflow: hidden;
      .image {
        img {
          width: 100%;
          max-width: 45px;
          height: auto;
        }
      }
      .info {
        padding: 5px 5px 5px 15px;
        line-height: 1;
        position: absolute;
        left: 55px;
        p {
          font-weight: 600;
          margin: 0 0 10px;
          color: #fff;
        }
        a {
          text-decoration: none;
          padding-right: 5px;
          margin-top: 3px;
          font-size: 11px;
          color: #fff;
        }
      }
    }
    .img-circle {
      border-radius: 50%;
    }
    img {
      vertical-align: middle;
      border: 0;
    }
    .user-panel:before, .user-panel:after {
      content: " ";
      display: table;
    }
    .sidebarmenu, .user-panel{
      white-space: nowrap;
      overflow: hidden;
    }
    .sidebarmenu{
      list-style: none;
      margin: 0px;
      padding: 0px;
    }
  }
  .clearfix:after, .clearfix:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before{
    clear:both;
  }
  :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
