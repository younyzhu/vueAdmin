<template>
  <div class="products-list product-list-in-box">
    <div :class="itemColor">
      <div class="product-img">
        <img :src="productImg" alt="Product Image">
      </div>
      <div class="product-info">
        <a :href="productTitleLink" class="product-title">{{productTitle}}
          <span :class="labelStaus">
            {{productNumber}}
          </span>
        </a>
        <span class="product-description">
          {{productDescription}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  const defaultImg = require('../../static/img/default-50x50.gif');

  export default {

    props: {
      productImg: {
        type: String,
        default: defaultImg,
      },
      productTitleLink: {
        type: String,
        default: '',
      },
      productTitle: {
        type: String,
        default: '',
      },
      productNumber: {
        description: String,
        default: '$8000',
      },
      productDescription: {
        type: String,
        default: '',
      },
      status: {
        type: String,
        default: 'info',
      },
    },
    computed: {
      labelStaus() {
        return `label bg-${this.status} pull-right`;
      },
      itemColor() {
        return `item  bt-color-${this.status}`;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/baseColor.scss';

  .label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
  }

  /*
   * Component: Products List
   * ------------------------
   */
  .products-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .products-list > .item {
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    margin:10px 0px;
    padding: 8px 8px;
    background: #fff;
    border-top: 3px solid #d2d6de;
  }
  .products-list > .item:before,
  .products-list > .item:after {
    content: " ";
    display: table;
  }
  .products-list > .item:after {
    clear: both;
  }
  .products-list .product-img {
    float: left;
  }
  .products-list .product-img img {
    width: 50px;
    height: 50px;
  }
  .products-list .product-info {
    margin-left: 60px;
  }
  .products-list .product-title {
    font-weight: 600;
  }
  .products-list .product-description {
    display: block;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .product-list-in-box > .item {
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid #f4f4f4;
  }
  .product-list-in-box > .item:last-of-type {
    border-bottom-width: 0;
  }
</style>
