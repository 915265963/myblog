<template>
  <div>
    <div class="login-bg">
      <h1 class="login-sys-title">GSQ个人博客系统</h1>
      <div class="login-signin">
        <div class="cutover">
          <div class="cutover-box">
            <div class="logIn" @click="index = 0" v-bind:class="{clicked: index === 0}">登录</div>
            <div class="point">·</div>
            <div class="signIn" @click="index = 1" v-bind:class="{clicked: index === 1}">注册</div>
          </div>
        </div>
<!-- 登陆部分 -->
        <div class="login-box" v-if="index === 0">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
            <el-form-item label="账号" prop="account">
              <el-input type="text" v-model="ruleForm.account" autocomplete="off" placeholder="手机号" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-input type="password" v-model="ruleForm.passWord" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <div class="button-box">
              <el-form-item>
                <el-button @click="submitForm('ruleForm')" class="btn" type="primary" round>登&nbsp;&nbsp;录</el-button>
                <el-button class="btn" type="warning" round>忘记密码</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
<!-- 注册部分 -->
        <div class="sign-box" v-else-if="index === 1">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
            <el-form-item label="手机号" prop="telNum">
              <el-input v-model="ruleForm.telNum" auto-complete="off" placeholder="请输入11位手机号" class="ipt" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verificationCode">
              <el-input v-model="ruleForm.verificationCode" auto-complete="off" placeholder="请输入6位验证码" class="ipt"></el-input>
            </el-form-item>
            <div class="button-box">
              <el-form-item>
                <el-button @click="logIn" class="btn" type="primary" round>注册</el-button>
                <el-button class="btn" round type="success">获取验证码</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      // 账号 手机号 正则
      let checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        } else {
          if (value.length < 11) {
            return callback(new Error('手机号长度小于11位'));
          } else if (!(/^[1][34578]\d{9}$/).test(value) || !(/^[1-9]\d*$/).test(value) || value.length !== 11) {
            return callback(new Error('手机号填写不正确'))
          }
        }
        callback();
      };
      // 密码正则
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length < 6) {
            callback(new Error('密码不能小于6位'));
          }
          callback();
        }
      };
      // 手机号正则
      let checkTelNum = (rule, value, callback) => {
        if(value === '') {
          return callback(new Error('手机号不能为空'));
        } else {
          if (value.length < 11) {

          }
        }
      };
      return {
        index: 0, // tab 登录注册切换
        loginFlag: true, // 登录按钮
        // 正则规则
        ruleForm: {
          account: '', // 账号
          passWord: '', // 密码
          telNum: '', // 手机号
          verificationCode: '', // 手机验证码
        },
        rules: {
          passWord: [
            { validator: validatePass,trigger: 'change'}
          ],
          account: [
            { validator: checkAccount, trigger: 'change' }
          ],
          telNum: [
            { validator: checkAccount, trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      // 表单提交验证
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.logIn();
            console.log('submit!')
          } else {
            this.$message({
              type: 'error',
              showClose: true,
              message: '账号或密码填写错误，请重试！'
            });
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 登录
      logIn() {
        let params = {
          account: this.ruleForm.account,
          password: this.ruleForm.passWord
        };
        this.$api.logIn(params).then(result => {
          if (result.data || result.data!== null || result.data!== 'undefined') {

          }
          return result;
        }).then((resData) => {
          switch (resData.errorCode) {
            case '1003':
              this.$message({
                type: 'error',
                showClose: true,
                message: resData.data,
              });
              break;
            case '1004':
              this.$message({
                type: 'success',
                showClose: true,
                message: resData.errorMessage
              })
          }
        }).catch((error) => {
          console.log(error);
        })
      },
      // 获取短信验证码
      getVerCode() {
        let params = {
          account: this.account
        };
        this.$api.getVerCode(params).then(result => {

        }).then((resData) => {

        }).catch((error) => {
          console.log(error);
        })
      },
      // 注册
      signUp() {
        let params = {
          account: this.ruleForm.telNum, // 注册手机号
          verificationCode: this.ruleForm.verificationCode // 验证码
        };
        this.$api.signUp(params).then(result => {
          if (result.data || result.data !== null || result.data !== 'undefined') {

          }
          return result;
        }).then((resData) => {

        }).catch((error) => {

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
    /*background-color: #2c3e50;*/
    background: url(../assets/images/login/bg1.jpg) no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .login-sys-title {
      width: 100%;
      height: 100px;
      line-height: 100px;
      font-size: 48px;
      color: #2B2B36;
      font-family: 'Exo 2', sans-serif;
      text-align: center;
      position: relative;
      top: 10%;
    }
    .login-signin {
      width: 6rem;
      height: 5rem;
      background: rgba(10, 10, 10, 0.6);
      margin: 0 auto;
      padding: .5rem;
      border-bottom: 6px solid #f7296f;
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
        margin-bottom: 5%;
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
      .login-box ,.sign-box {
        width: calc(100% - 20%);
        margin: 0 auto;
        .ipt {
          /*margin-bottom: 10%;*/
        }
        .button-box {
          margin-top: 15%;
          display: flex;
          justify-content: space-around;
          .btn {
            width: 30%;
          }
        }

      }
    }
  }
</style>

<style lang="scss">
  .login-box, .sign-box {
    .el-form-item__label {
      color: #fff;
    }
    .button-box {
      .el-form-item {
        width: 100% !important;
        .el-form-item__content {
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
  .el-icon-error, .el-message--success {
    font-size: 16px;
  }
</style>
