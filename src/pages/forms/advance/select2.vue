<template>
  <box status="primary" :hasborder="true">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">Quick Example</span>
    </div>
    <div slot="body">
      <div id="myApp">
        <v-select :value.sync="selected" :options="options"></v-select>
      </div>
    </div>
  </box>
</template>
<script>
  import vSelect from 'vue-select';
  import box from '../../../components/box';

  export default {
    data() {
      return {
        selected: null,
        options: ['foo', 'bar', 'baz'],
      };
    },
    components: {
      box,
      vSelect,
    },
  };
</script>
