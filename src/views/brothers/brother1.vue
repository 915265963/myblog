<template>
  <div>
    <h1>我是老哥</h1>
    <router-link to="/brother2" tag="h1">点击我找老弟</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        resultData: []
      }
    },
    methods: {
      mock: function () {
        this.$api.mock().then(result => {
          if(result.data || result.data!== null || result.data!= 'undefined') {
            console.log(result.data);
          }
          return result.data;
        }).then((resData) => {

        })
      }
    },
    mounted() {

    }
  }
</script>
