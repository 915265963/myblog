<template>
  <div class="home">
    <vheader></vheader>
    <div class="content"></div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from '@/components/public/header.vue'
import vfooter from '@/components/public/footer.vue'
  export default {
    components:{
      vheader,
      vfooter,
    },
    name: 'HelloWorld',
    data () {
      return {
        tableData: []
      }
    },
    methods: {
      mock: function() {
        let params = {
          name: 'xiaoming',
          sex: 'female'
        };
        // let data = this.$qs.stringify(params);
        this.$api.mockData(params).then(result => {
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
      this.mock();
    }
  }
</script>

<style lang="scss" scoped>
.home{
  width:100%;
  .content{
    width: 1200px;
    margin: 0 auto;
    height: 300px;
    background-color: #ccc;
  }
}
</style>
