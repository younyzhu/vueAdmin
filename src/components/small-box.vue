<template>
  <div :class="smallboxicon">
    <div class="inner">
      <h3>{{number}}</h3>

      <p>{{description}}</p>
    </div>
    <div class="icon">
      <i :class="iconfa"></i>
    </div>
    <a href="#" class="small-box-footer">{{footertext}}<i class="fa fa-arrow-circle-right"></i></a>
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
    number: {
      type: String,
      default: '150',
    },
    description: {
      description: String,
      default: 'New Orders',
    },
    footertext: {
      type: String,
      default: 'More info',
    },
  },
  computed: {
    iconfa() {
      return `fa fa-${this.fa}`;
    },
    smallboxicon() {
      return `small-box ${this.color}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .info{
    background:#20A0FF !important;
  }
  .success{
    background:#13CE66 !important;
  }
  .warning{
    background:#F7BA2A !important;
  }
  .danger{
    background:#FF4949 !important;
  }
  /*
 * Component: Small Box
 * --------------------
 */
  .small-box {
    border-radius: 2px;
    position: relative;
    display: block;
    margin-bottom: 20px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .small-box > .inner {
    padding: 10px;
    color:#fff;
  }
  .small-box > .small-box-footer {
    position: relative;
    text-align: center;
    padding: 3px 0;
    color: #fff;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    z-index: 10;
    background: rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
  .small-box > .small-box-footer:hover {
    color: #fff;
    background: rgba(0, 0, 0, 0.15);
  }
  .small-box h3 {
    font-size: 38px;
    font-weight: bold;
    margin: 0 0 10px 0;
    white-space: nowrap;
    padding: 0;
  }
  .small-box p {
    font-size: 15px;
  }
  .small-box p > small {
    display: block;
    color: #f9f9f9;
    font-size: 13px;
    margin-top: 5px;
  }
  .small-box h3,
  .small-box p {
    z-index: 5;
  }
  .small-box .icon {
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    position: absolute;
    top: -10px;
    right: 10px;
    z-index: 0;
    font-size: 90px;
    color: rgba(0, 0, 0, 0.15);
  }
  .small-box:hover {
    text-decoration: none;
    color: #f9f9f9;
  }
  .small-box:hover .icon {
    font-size: 95px;
  }
  @media (max-width: 767px) {
    .small-box {
      text-align: center;
    }
    .small-box .icon {
      display: none;
    }
    .small-box p {
      font-size: 12px;
    }
  }
</style>
