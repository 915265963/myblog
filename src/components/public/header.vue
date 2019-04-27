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
          <el-row class="block-col-2">
            <el-col :span="12">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <span class="iconfont icon-header"></span>
                </span>
                <el-dropdown-menu slot="dropdown" class="dropdownHeader">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
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
      li:hover{
        color:#333;
        background-color: #999999;
        cursor: pointer;
      }
    }
    .headPic{
      float: right;
      height: 60px;
      line-height: 60px;
      .icon-header{
        font-size:30px;
        color:#fff;
      }
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
.dropdownHeader{
  top:40px !important;
  left: 1240px !important;
}
</style>


