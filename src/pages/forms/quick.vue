<template>
  <box status="primary" :hasborder="true">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">Quick Example</span>
    </div>
    <div slot="body">
      <el-form label-position="top" :model="formStacked">
        <el-form-item label="Email address">
          <el-input v-model="formStacked.name" placeholder="Email address"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="formStacked.region"placeholder="Password"> </el-input>
        </el-form-item>
        <el-form-item label="File input">
          <el-input type="file" ></el-input>
        </el-form-item>
        <el-form-item >
          <el-checkbox label="Check me out" v-model="formStacked.type" name="type"></el-checkbox>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer">
      <el-button type="primary" size="small">Submmit</el-button>
    </div>
  </box>
</template>
<script>
  import box from '../../components/box';

  export default {
    data() {
      return {
        formStacked: {
          name: '',
          region: '',
          type: '',
        },
      };
    },
    components: {
      box,
    },
  };
</script>
