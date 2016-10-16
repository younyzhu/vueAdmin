<template>
  <div class="content-wrapper" style="min-height:916px">
    <section class="content-header">
      <h1>
        Chart
        <small>Preview page</small>
      </h1>
      <el-breadcrumb separator=">" class="pull-right breadcrumb">
        <el-breadcrumb-item><i class="fa fa-dashboard"></i>Home</el-breadcrumb-item>
        <el-breadcrumb-item>Chart</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <section class="content">
      <el-row :gutter="20">
        <el-col :span="12">
          <line-example></line-example>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
  import LineExample from './charts/LineExample';

  export default {
    components: {
      LineExample,
    },
  };
</script>
