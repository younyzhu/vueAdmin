<template>
  <div class="content-wrapper" style="min-height:916px">
    <section class="content-header">
      <h1>
        Top Navigation
        <small>Example 2.0</small>
      </h1>
      <el-breadcrumb separator=">" class="pull-right breadcrumb">
        <el-breadcrumb-item><i class="fa fa-dashboard"></i>Layout</el-breadcrumb-item>
        <el-breadcrumb-item>Top Navagation</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <section class="content">
      <el-row :gutter="20">
        <callout status="primary" title="Tip" content="Add the layout-top-nav class to the body tag to get this layout. This feature can also be used with a sidebar! So use this class if you want to remove the custom dropdown menus from the navbar and use regular links instead."></callout>
      </el-row>
      <el-row :gutter="20">
        <callout status="success" title="Tip" content="Add the layout-top-nav class to the body tag to get this layout. This feature can also be used with a sidebar! So use this class if you want to remove the custom dropdown menus from the navbar and use regular links instead."></callout>
      </el-row>
      <el-row :gutter="20">
        <callout status="info" title="Tip" content="Add the layout-top-nav class to the body tag to get this layout. This feature can also be used with a sidebar! So use this class if you want to remove the custom dropdown menus from the navbar and use regular links instead."></callout>
      </el-row>
      <el-row :gutter="20">
        <callout status="warning" title="Tip" content="Add the layout-top-nav class to the body tag to get this layout. This feature can also be used with a sidebar! So use this class if you want to remove the custom dropdown menus from the navbar and use regular links instead."></callout>
      </el-row>
      <el-row :gutter="20">
        <callout status="danger" title="Tip" content="Add the layout-top-nav class to the body tag to get this layout. This feature can also be used with a sidebar! So use this class if you want to remove the custom dropdown menus from the navbar and use regular links instead."></callout>
      </el-row>
      <el-row :gutter="20">
        <callout status="default" title="Tip" content="Add the layout-top-nav class to the body tag to get this layout. This feature can also be used with a sidebar! So use this class if you want to remove the custom dropdown menus from the navbar and use regular links instead."></callout>
      </el-row>
    </section>
  </div>
</template>

<script>
  import callout from '../components/callout';

  export default {
    components: {
      callout,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }
  .hello-exp{
    margin-left: 230px;;
    min-height: 680px;
  }
  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
h1 {
  color: #42b983;
}
</style>
