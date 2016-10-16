<template>
  <div :class="calloutstatus">
    <h4>{{title}}</h4>

    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: 'primary',
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
  computed: {
    calloutstatus() {
      return `callout b-color-${this.status} bg-${this.status}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/baseColor.scss';
  /*
 * Component: Callout
 * ------------------
 */
  .callout {
    border-radius: 3px;
    margin: 0 0 20px 0;
    padding: 15px 30px 15px 15px;
    border-left: 5px solid #eee;
  }
  .callout a {
    color: #fff;
    text-decoration: underline;
  }
  .callout a:hover {
    color: #eee;
  }
  .callout h4 {
    margin-top: 0;
    font-weight: 600;
  }
  .callout p:last-child {
    margin-bottom: 0;
  }
  .callout code,
  .callout .highlight {
    background-color: #fff;
  }

</style>
