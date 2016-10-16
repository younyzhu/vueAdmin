<template>
  <box status="success" :hasborder="true">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">Quick Example</span>
    </div>
    <div slot="body">
      <el-form label-position="top" :model="formAlignRight">
        <el-form-item label="Email address">
          <el-input v-model="formStacked.name" placeholder="Email address"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="formStacked.region"placeholder="Password"> </el-input>
        </el-form-item>
        <el-form-item >
          <el-checkbox label="Remember me" v-model="formStacked.type" name="type"></el-checkbox>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer">
      <el-button type="default pull-left" size="small">Cancel</el-button>
      <el-button type="primary pull-right" size="small">Submmit</el-button>
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
        type: true,
      },
    };
  },
  components: {
    box,
  },
};
</script>
