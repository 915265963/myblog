<template>
  <div class="header">
      <div class="header-box">
        <div class="pic">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="searc">
          <el-input v-model="searchValue" placeholder="请输入内容" class="homeSearc"></el-input>
        </div>
        <ul class="jump">
          <router-link tag="li" to="/">home</router-link>
          <router-link tag="li" to="/personal">personal</router-link>
          <router-link tag="li" to="/discover">discover</router-link>
          <router-link tag="li" to="/hot">hot</router-link>
        </ul>
        <div class="headPic">
          <span class="iconfont icon-header"></span>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {

  },    
};
</script>
<style scoped lang="scss">
.header{
  width: 100%;
  height: 60px;
  background-color: #444444;
  .header-box{
    width: 1200px;
    height: 100%;
    margin:0 auto;
    color:#ffffff;
    .pic{
      float: left;
      width: 80px;
      height: 100%;
      border-right: 2px solid #797979;
    }
    .searc{
      float: left;
      height: 100%;
      padding-left: 30px;
      line-height: 60px;

    }
    .jump{
      float: left;
      li{
        float: left;
        height: 100%;
        line-height: 60px;
        width: 100px;
        text-align: center;
        margin-right: 20px;
      }
      .router-link-exact-active{
        background-color: #999999;
        color:#333;
      }
    }
    .headPic{
      float: right;
      height: 60px;
      line-height: 60px;
      .icon-header{
        font-size:30px
        // width: 40px;
        // height: 40px;
        // display: inline-block;
      }
      // .icon-header::before{
      //   width: 40px;
      //   height: 40px;
      // }
    }
  }
}
</style>
<style lang="scss">
.homeSearc{
    width: 250px;
    margin-right: 100px;
    .el-input__inner{
      border-radius: 10px;
    }
}
</style>


