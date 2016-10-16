<template>
  <div class="info-box">
    <span :class="bgboxicon"><i :class="iconfa" aria-hidden="true"></i></span>

    <div class="info-box-content">
      <span class="info-box-text">{{ textbox }}</span>
      <span class="info-box-number">{{ numberbox }}</span>
      <div class="progress" v-if="progress">
        <div :class="progressbg" :style="progressvalue"></div>
      </div>
      <span class="progress-description">
        {{progressDescription}}
      </span>
    </div>
    <!-- /.info-box-content -->
  </div>
</template>

<script>
export default {
  props: {
    fa: {
      type: String,
      default: 'cog',
      required: true,
    },
    color: {
      type: String,
      default: 'info',
    },
    bgcolor: {
      type: String,
      default: '',
    },
    textbox: {
      type: String,
      default: '',
    },
    numberbox: {
      type: String,
      default: '',
    },
    progress: {
      type: Boolean,
      default: false,
    },
    progressValue: {
      type: Number,
      default: 100,
    },
    progressDescription: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconfa() {
      return `fa fa-${this.fa}`;
    },
    bgboxicon() {
      return `info-box-icon bg-${this.color}`;
    },
    progressbg() {
      return `progress-bar ${this.bgcolor}`;
    },
    progressvalue() {
      return `width: ${this.progressValue}%`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/baseColor.scss';
  /*
 * Component: Info Box
 * -------------------
 */
  .info-box {
    display: block;
    min-height: 90px;
    background: #fff;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-bottom: 15px;
  }
  .info-box small {
    font-size: 14px;
  }
  .info-box .progress {
    background: rgba(0, 0, 0, 0.2);
    margin: 5px -10px 5px -10px;
    height: 2px;
  }
  .info-box .progress,
  .info-box .progress .progress-bar {
    border-radius: 0;
  }
  .info-box .progress .progress-bar {
    width: 90%;
    height: 2px;
    background: #20A0FF;
  }
  .info-box-icon {
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px;
    display: block;
    float: left;
    height: 90px;
    width: 90px;
    text-align: center;
    font-size: 45px;
    line-height: 90px;
    background: rgba(0, 0, 0, 0.2);
  }
  .info-box-icon > img {
    max-width: 100%;
  }
  .info-box-content {
    padding: 5px 10px;
    margin-left: 90px;
  }
  .info-box-number {
    display: block;
    font-weight: bold;
    font-size: 18px;
  }
  .progress-description,
  .info-box-text {
    display: block;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info-box-text {
    text-transform: uppercase;
  }
  .info-box-more {
    display: block;
  }
  .progress-description {
    margin: 0;
  }
</style>
