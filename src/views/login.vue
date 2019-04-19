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

      add(){
        window.onscroll = function(){
          var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
          var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          if(scrollTop + windowHeight === scrollHeight){
            console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
            this.data();
          }
        }
      },
      data() {
        let param = new URLSearchParams();
        param.append('AccessToken', '7529cc0d39214bd69fb7e19cf5ed2210')
        param.append('service', 'getSongsByDirectory')
        param.append('Singer', [this.singer])
        param.append('PageIndex', 2)
        this.$axios.logIn(param).then(result => {
          if(result || result!== null || result!== 'undefined') {
            console.log(result)
          }
        });
      }
    },
    created() {
      this.add();
    },
    mounted() {

    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/style/logIn.scss";
</style>
