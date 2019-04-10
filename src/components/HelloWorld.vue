<template>
  <div class="hello">
    <el-input></el-input>
    <el-button type="">click</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: []
    }
  },
  methods: {
    mock: function() {
      this.$api.mock().then(result => {
        if(result.data || result.data!== null || result.data!= 'undefined') {
          console.log(result.data);
        }
        return result.data;
      }).then((resData) => {
          this.tableData = resData;
      })
    }
  },
  mounted() {
    this.mock();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
