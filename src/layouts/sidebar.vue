<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img :src="user2" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Yongnan Zhu</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <el-input placeholder="请输入内容" >
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </form>
      <el-menu default-active="2" class="sidebar-menu" theme="dark">
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-menu"></i>组件库</template>
          <el-menu-item index="4-1"><router-link to="/widgqets">Widgets</router-link></el-menu-item>
          <el-menu-item index="4-2"><router-link to="/form">Form</router-link></el-menu-item>
          <el-menu-item index="4-3"><router-link to="/about">About</router-link></el-menu-item>
          <el-menu-item index="4-4"><router-link to="/chart">Chart</router-link></el-menu-item>
          <el-menu-item index="4-5"><router-link to="/navagation">Top navagation bar</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="2"><router-link to="/widgets1"><i class="el-icon-menu"></i><span>导航二</span></router-link></el-menu-item>
        <el-menu-item index="3"><i class="el-icon-menu"></i>导航三</el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group title="分组一">
            <el-menu-item index="1-1">
              <router-link to="/widgets" class="clear-fix">
                Widgets
                <span class="pull-right-container">
                  <el-button type="danger pull-right" size="mini">New</el-button>
                </span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2"><router-link to="/about">About</router-link></el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </section>
  </aside>
</template>
<script>
  const user2 = require('../../static/img/user2-160x160.jpg');

  export default {
    data() {
      return {
        user2: user2,
      };
    },
  };
</script>
<style lang="scss">
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
    .sidebar {
      padding-bottom: 10px;
      height: auto;
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
    li{
      a{
        display: block;
        color: #a7b1c2;
        font-weight: 600;
        padding: 0px 0px 5px 0px;
        text-decoration: none;
      }
    }
  }
  .sidebar-form input[type="text"],
  .sidebar-form .btn {
    box-shadow: none;
    background-color: #374850;
    border: 1px solid transparent;
    height: 35px;
  }
  .sidebar-form input[type="text"] {
    color: #666;
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px;
  }
  .sidebar-form input[type="text"]:focus,
  .sidebar-form input[type="text"]:focus + button {
    background-color: #fff;
    color: #666;
  }
  .sidebar-form input[type="text"]:focus + button {
    border-left-color: #fff;
  }
  .sidebar-form button {
    color: #999;
    border-top-left-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 0;
  }
  .sidebar .el-input-group__append{
    border-color: transparent;
    background-color: transparent;
  }
  .sidebar .el-menu-item, .el-submenu__title{
    height: 44px;
    line-height: 44px;
  }
  .sidebar-menu li>a>.pull-right-container {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -7px;
  }
</style>
