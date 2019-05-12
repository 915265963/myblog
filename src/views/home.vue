<template>
  <div>
    <div class="home-warp">
      <home-header class="home-head"></home-header>
      <section class="home">
        <div class="content">
          <div class="banner">
            <div class="block show">
              <el-carousel trigger="click" class="pics" ref="example">
                <el-carousel-item v-for="item in img" :key="item">
                  <img :src="item" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
            <ul class="select">
              <li @click="$refs.example.setActiveItem(0)"><img src="../assets/images/home/banner1.jpg" alt=""></li>
              <li @click="$refs.example.setActiveItem(1)"><img src="../assets/images/home/banner2.jpg" alt=""></li>
              <li @click="$refs.example.setActiveItem(2)"><img src="../assets/images/home/banner3.jpg" alt=""></li>
            </ul>
          </div>
        </div>
        <router-view></router-view>
      </section>
      <home-footer class="home-foot"></home-footer>
    </div>

  </div>
</template>

<script>
  import homeHeader from '../components/public/header.vue';
  import homeFooter from '../components/public/footer.vue';
  export default {
    data() {
      return {
        image: require('../assets/images/home/banner1.jpg'),
        img: [require('../assets/images/home/banner1.jpg'),require('../assets/images/home/banner2.jpg'),require('../assets/images/home/banner3.jpg')],
      }
    },
    components: {
      homeHeader: homeHeader,
      homeFooter: homeFooter
    },
    methods: {
      // 测试接口
      // mockData() {
      //   let params = {
      //     userName: '1111',
      //     password: '222222'
      //   };
      //   this.$api.mock(params).then(result => {
      //     if(result.data || result.data!== null || result.data!== 'undefined') {
      //       console.log(result.data);
      //     }
      //     return result.data;
      //   }).then((resData) => {
      //     this.tableData = resData;
      //   }).catch((error) => {
      //     console.log(error);
      //   })
      // }
    },
    mounted() {
      console.log(this.$refs.example)
    },
    created() {
      
    },
    methods: {
      add() {
        this.$refs.aaa.value = 20;
      }
    },
  }
</script>

<style scoped lang="scss">
  // .home-head {
    // margin-bottom: .6rem;
    // position: fixed;
    // top: 0;
    // left: 0;
  // }
  .home {
    // height: 800px;
    // background-color: #ccc;
    // padding: .2rem;
    min-height: calc(100vh - 2rem);
    .content{
      width: 12rem;
      margin:0 auto;
      .banner{
        width: 100%;
        height: 4REM;
        img{
          width: 100%;
          height: 100%;
        }
        .show{
          width: 70%;
          height: 100%;
          float: left;
          border-right:1px solid #fff;
          .pics{
            height: 100%;
          }
          img{
            float: left;
          }
        }
        .select{
          width: 30%;
          height: 100%;
          float: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          li{
            width: 100%;
            height: 33%;
          }
        }
      }
    }
  }
</style>
<style lang="scss">
.home{
  .el-carousel__container{
    height: 100%;
  }
}
</style>

