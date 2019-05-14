<template>
  <div>
    <div class="login-bg">
      <h1 class="login-sys-title">GSQ个人博客系统</h1>
      <div class="login-signin">
        <div class="cutover">
          <div class="cutover-box">
            <div class="logIn" @click="flag = !flag" v-bind:class="{clicked: flag === true}">登录</div>
            <div class="point">·</div>
            <div class="signIn" @click="flag = !flag" v-bind:class="{clicked: flag === false}">注册</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flag: true,
        userName: '',
        passWord: ''
      }
    },
    methods: {
      // 登录
      logIn() {
        let params = {
          account: '317776764@qq.com',
          password: '222222'
        };
        this.$api.logIn(params).then(result => {
          if(result.data || result.data!== null || result.data!== 'undefined') {
            console.log(result.data);
          }
          return result.data;
        }).then((resData) => {
          this.tableData = resData;
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    created() {

    },
    mounted() {

    }
  }
</script>
<style scoped lang="scss">
  .login-bg{
    width: 100vw;
    height: 100vh;
    background-color: #2c3e50;
    position: relative;
    .login-sys-title {
      width: 100%;
      height: 100px;
      line-height: 100px;
      font-size: 48px;
      color: #ffffff;
      font-family: 'Microsoft YaHei', sans-serif;
      text-align: center;
      position: relative;
      top: 10%;
    }
    .login-signin {
      width: 6rem;
      height: 5rem;
      background: rgba(10, 10, 10, 0.17);
      margin: 0 auto;
      padding: .5rem;
      border-bottom: 8px solid #f7296f;
      border-radius: 30px 30px 50px 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .cutover {
        width: 100%;
        padding: 0;
        height: 50px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        .cutover-box {
          display: flex;
          .logIn, .signIn {
            width: 80px;
            height: 50px;
            line-height: 50px;
            text-align: center;
          }
          .point {
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 60px;
          }
        }
        .clicked {
          color: red;
          border-bottom: 2px solid #d81e06;
        }
      }
    }
  }
</style>
