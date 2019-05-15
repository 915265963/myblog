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

        <div class="login-box" v-if="index === 0">
          <el-form>
            <el-form-item label="账号" prop="account" placeholder="请输入账号" >
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <div class="button-box">
              <el-form-item>
<!--                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
<!--                <el-button @click="resetForm('ruleForm')">重置</el-button>-->
                <el-button @click="logIn" class="btn" type="primary" round>登&nbsp;&nbsp;录</el-button>
                <el-button class="btn" type="warning" round>忘记密码</el-button>
              </el-form-item>
            </div>
          </el-form>
          <div class="button-box">
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
              <!--            <el-button @click="logIn" class="btn" type="primary" round>登&nbsp;&nbsp;录</el-button>-->
              <!--            <el-button class="btn" type="warning" round>忘记密码</el-button>-->
            </el-form-item>
          </div>
        </div>
        <div class="sign-box" v-else-if="index === 1">
          <el-input v-model="telNum" placeholder="请输入手机号" class="ipt"></el-input>
          <el-input v-model="verificationCode" placeholder="请输入验证码" class="ipt"></el-input>
          <div class="button-box">
            <el-button @click="logIn" class="btn" type="primary" round>注册</el-button>
            <el-button class="btn" round type="success">获取验证码</el-button>
          </div>
        </div>
      </div>

      <el-dialog title="提示" :visible.sync="dialogVisible" width="20%">
        <span>{{ dialogMessage }}</span>
        <span slot="footer" class="dialog-footer">
  </span>
      </el-dialog>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        index: 0, // tab 开关
        account: '',
        passWord: '',
        telNum: '',
        verificationCode: '', // 手机验证码
        dialogVisible: false, // 弹出错误提示框
        dialogMessage: '这是一条信息',
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 登录
      logIn() {
        let params = {
          account: this.account,
          password: this.passWord
        };
        this.$api.logIn(params).then(result => {
          if (result.data || result.data!== null || result.data!== 'undefined') {

          }
          return result;
        }).then((resData) => {
          switch (resData.errorCode) {
            case '1003':
              // this.dialogVisible = true;
              this.dialogMessage = resData.data;
              this.$message(resData.data);
              break
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
        margin-bottom: 10%;
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
  .button-box {
    .el-form-item {
      width: 100% !important;
      .el-form-item__content {
        display: flex;
        justify-content: space-around;
      }
    }
  }
</style>
