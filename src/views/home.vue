<template>
  <div>
    <div class="home-warp">
      <home-header class="home-head"></home-header>
      <section class="content">
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

      }
    },
    components: {
      homeHeader: homeHeader,
      homeFooter: homeFooter
    },
    methods: {
      // 测试接口
      mockData() {
        let params = {
          userName: '1111',
          password: '222222'
        };
        this.$api.mock(params).then(result => {
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
    mounted() {
      this.mockData()
    }
  }
</script>

<style scoped lang="scss">
  .home-head {
    margin-bottom: .6rem;
    position: fixed;
    top: 0;
    left: 0;
  }
  .content {

    padding: .2rem;
    min-height: calc(100vh - 2rem);
  }
</style>
