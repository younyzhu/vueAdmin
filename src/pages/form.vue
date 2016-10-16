<template>
  <div class="content-wrapper" style="min-height:916px">
    <section class="content-header">
      <h1>
        General Form Elements
        <small>Preview</small>
      </h1>
      <el-breadcrumb separator=">" class="pull-right breadcrumb">
        <el-breadcrumb-item><i class="fa fa-dashboard"></i>Forms</el-breadcrumb-item>
        <el-breadcrumb-item>General Elements </el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <section class="content">
      <el-row :gutter="20" class="pb20">
         <el-col :span="24">
           <el-alert
             title="Form表单元素"
             type="success"
             description="Form表单元素主要基于Element库的<a href='http://element.eleme.io/#/component/form'></a>表单元素介绍">
           </el-alert>
         </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
            <quick></quick>
        </el-col>
        <el-col :span="12">
          <horizontal></horizontal>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <general></general>
        </el-col>
        <el-col :span="12">
          <validate></validate>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<style lang="scss">
    .pb20{
      padding-bottom: 20px;
    }

</style>

<script>
  import quick from './forms/quick';
  import horizontal from './forms/horizontal';
  import general from './forms/general';
  import validate from './forms/validate';

  export default {
    components: {
      quick,
      horizontal,
      general,
      validate,
    },
  };
</script>
