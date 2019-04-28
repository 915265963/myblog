<template>
  <div>
    <div class="login-bg">
      <div class="login-sys-title">GSQ个人博客系统</div>
      <div class="login-input">
        <div class="login-title">logIn now!</div>
        <div>
          <div>userName</div>
          <el-input v-model="userName" placeholder=""></el-input>
        </div>
        <div>
          <div>passWord</div>
          <el-input v-model="passWord" placeholder=""></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        passWord: ''
      }
    },
    methods: {

    },
    created() {

    },
    mounted() {

    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/style/logIn.scss";
</style>
