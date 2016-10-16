<template>
  <div class="content-wrapper" style="min-height:916px">
    <section class="content-header">
      <h1>
        Widgets
        <small>Preview page</small>
      </h1>
      <el-breadcrumb separator=">" class="pull-right breadcrumb">
        <el-breadcrumb-item><i class="fa fa-dashboard"></i>Home</el-breadcrumb-item>
        <el-breadcrumb-item>Widgets</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <section class="content">
      <el-row :gutter="20">
        <el-col :span="6">
          <info-box fa="cog" color="info" textbox="CPU TRAFFIC" numberbox="90%"></info-box>
        </el-col>
        <el-col :span="6">
          <info-box fa="google-plus-official" color="success" textbox="LIKES" numberbox="41,410"></info-box>
        </el-col>
        <el-col :span="6">
          <info-box fa="cart-plus" color="warning" textbox="SALES" numberbox="760"></info-box>
        </el-col>
        <el-col :span="6">
          <info-box fa="user-md" color="danger" textbox="NEWMEMBERS" numberbox="2,431"></info-box>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <info-box fa="university" color="info" :progress="true" :progressValue="90" progressDescription="20% Increase in 30 Minutes" textbox="CPU TRAFFIC" numberbox="90%"></info-box>
        </el-col>
        <el-col :span="6">
          <info-box fa="bell" color="success" textbox="LIKES" numberbox="41,410" :progress="true" :progressValue="90" progressDescription="20% Increase in 30 Minutes" ></info-box>
        </el-col>
        <el-col :span="6">
          <info-box fa="car" color="warning" textbox="SALES" numberbox="760" :progress="true" :progressValue="90" progressDescription="20% Increase in 30 Minutes" ></info-box>
        </el-col>
        <el-col :span="6">
          <info-box fa="briefcase" color="danger" textbox="NEWMEMBERS" numberbox="2,431" :progress="true" :progressValue="90" progressDescription="20% Increase in 30 Minutes" ></info-box>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <small-box fa="cog" color="info" number="120" description="配置"></small-box>
        </el-col>
        <el-col :span="6">
          <small-box fa="google-plus-official" number="145" description="G+" color="success"></small-box>
        </el-col>
        <el-col :span="6">
          <small-box fa="cart-plus"  number="123" description="购物车" color="warning"></small-box>
        </el-col>
        <el-col :span="6">
          <small-box fa="user-md" color="danger"  number="1,120" description="注册用户数" footertext="更多"></small-box>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <box status="success" :hasborder="false">
            <div slot="header" class="clearfix">
              <span style="line-height: 36px;">success卡片名称</span>
              <el-button style="float: right;" type="primary">确 定</el-button>
            </div>
            <div slot="body">
              <div v-for="o in 4" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </div>
                 <span slot="footer" >
                   <el-button >取 消</el-button>
                   <el-button type="primary" >确 定</el-button>
                 </span>
          </box>
        </el-col>
        <el-col :span="12">
          <box status="info">
            <div slot="header" class="clearfix">
              <span style="line-height: 36px;">info卡片名称</span>
              <el-button style="float: right;" type="primary">确 定</el-button>
            </div>
            <div slot="body">
              <div v-for="o in 4" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </div>
                 <span slot="footer" >
                   <el-button >取 消</el-button>
                   <el-button type="primary" >确 定</el-button>
                 </span>
          </box>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <box status="warning" :hasborder="false">
            <div slot="header" class="clearfix">
              <span style="line-height: 36px;">warning卡片名称</span>
              <el-button style="float: right;" type="primary">确 定</el-button>
            </div>
            <div slot="body">
              <div v-for="o in 4" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </div>
                 <span slot="footer" >
                   <el-button >取 消</el-button>
                   <el-button type="primary" >确 定</el-button>
                 </span>
          </box>
        </el-col>
        <el-col :span="12">
          <box status="danger">
            <div slot="header" class="clearfix">
              <span style="line-height: 36px;">danger卡片名称</span>
              <el-button style="float: right;" type="primary">确 定</el-button>
            </div>
            <div slot="body">
              <div v-for="o in 4" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </div>
                 <span slot="footer" >
                   <el-button >取 消</el-button>
                   <el-button type="primary" >确 定</el-button>
                 </span>
          </box>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <box status="default" :hasborder="false">
            <div slot="header" class="clearfix">
              <span style="line-height: 36px;">default卡片名称</span>
              <el-button style="float: right;" type="primary">确 定</el-button>
            </div>
            <div slot="body">
              <div v-for="o in 4" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </div>
                 <span slot="footer" >
                   <el-button >取 消</el-button>
                   <el-button type="primary" >确 定</el-button>
                 </span>
          </box>
        </el-col>
        <el-col :span="12">
          <box status="primary">
            <div slot="header" class="clearfix">
              <span style="line-height: 36px;">primary卡片名称</span>
              <el-button style="float: right;" type="primary">确 定</el-button>
            </div>
            <div slot="body">
              <div v-for="o in 4" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </div>
                 <span slot="footer" >
                   <el-button >取 消</el-button>
                   <el-button type="primary" >确 定</el-button>
                 </span>
          </box>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <products-list status="warning" productNumber="$1800" product-title="Samsung TV" product-description='"Samsung 32" 1080p 60Hz LED Smart HDTV."'></products-list>
        </el-col>
        <el-col :span="8">
          <products-list status="info" productNumber="$1700" product-title="Nike" product-description='"Samsung 32" 1080p 60Hz LED Smart HDTV."'></products-list>
        </el-col>
        <el-col :span="8">
          <products-list status="success" productNumber="$1600" product-title="Anger" product-description='"Samsung 32" 1080p 60Hz LED Smart HDTV."'></products-list>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <products-list status="default" productNumber="$1500" product-title="Apple" product-description='"Samsung 32" 1080p 60Hz LED Smart HDTV."'></products-list>
        </el-col>
        <el-col :span="8">
          <products-list status="danger" productNumber="$1400" product-title="Amazon" product-description='"Samsung 32" 1080p 60Hz LED Smart HDTV."'></products-list>
        </el-col>
        <el-col :span="8">
          <products-list status="primary" productNumber="$1300" product-title="Alibaba" product-description='"Samsung 32" 1080p 60Hz LED Smart HDTV."'></products-list>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<style lang="scss">
  .content-wrapper{
    min-height: 100%;
    background-color: #ecf0f5;
    -webkit-transition: -webkit-transform .3s ease-in-out,margin .3s ease-in-out;
    -moz-transition: -moz-transform .3s ease-in-out,margin .3s ease-in-out;
    -o-transition: -o-transform .3s ease-in-out,margin .3s ease-in-out;
    transition: transform .3s ease-in-out,margin .3s ease-in-out;
    margin-left: 230px;
    z-index: 820;
    .content-header{
      position: relative;
      padding: 15px 15px 0 15px;
      h1 {
        margin: 0;
        font-size: 24px;
        small {
          font-size: 15px;
          display: inline-block;
          padding-left: 4px;
          font-weight: 300;
          line-height: 1;
          color: #777;
        }
      }
      .breadcrumb{
        margin-top: -15px;
        margin-bottom: 10px;
      }
      .el-breadcrumb__item__text i:after{
        content: ' ';
        margin-right:10px;
      }
    }
    .content{
      min-height: 250px;
      padding: 15px;
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;
    }
  }

</style>

<script>
  import infoBox from '../components/info-box';
  import box from '../components/box';
  import smallBox from '../components/small-box';
  import productsList from '../components/products-list';

  export default {
    components: {
      infoBox,
      box,
      smallBox,
      productsList,
    },
  };
</script>
