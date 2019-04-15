<template>
  <div class>
    <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  </div>
</template>

<script>
  export default {
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
        let data = this.$qs.stringify(params);
        this.$api.mockData(data).then(result => {
          if(result.data || result.data!== null || result.data!= 'undefined') {
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

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
