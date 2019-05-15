<template>
    <div class="home-warp">
      <home-header class="home-head"></home-header>
      <section class="home">
        <div class="content">
          <div class="banner">
            <div class="block show">
              <el-carousel trigger="click" class="pics" ref="example">
                <el-carousel-item v-for="item in img" :key="item">
                  <img :src="item" alt>
                </el-carousel-item>
              </el-carousel>
            </div>
            <ul class="select">
              <li @click="$refs.example.setActiveItem(0)">
                <img src="../assets/images/home/banner1.jpg" alt>
              </li>
              <li @click="$refs.example.setActiveItem(1)">
                <img src="../assets/images/home/banner2.jpg" alt>
              </li>
              <li @click="$refs.example.setActiveItem(2)">
                <img src="../assets/images/home/banner3.jpg" alt>
              </li>
            </ul>
          </div>
          <div class="body">
            <ul class="left">
              <li class="classify">
                <h2>热门分类</h2>
                <h3>Popular categories</h3>
                <ul>
                  <li>
                    <img src="../assets/images/home/pic1.jpg" alt>
                    <div class="mask"></div>
                    <div class="Englishtitle">MOTION</div>
                    <div class="title">运动</div>
                  </li>
                  <li>
                    <img src="../assets/images/home/pic2.jpg" alt>
                    <div class="mask"></div>
                    <div class="Englishtitle">PETS</div>
                    <div class="title">萌宠</div>
                  </li>
                  <li>
                    <img src="../assets/images/home/pic3.jpg" alt>
                    <div class="mask"></div>
                    <div class="Englishtitle">SPORTS CAR</div>
                    <div class="title">跑车</div>
                  </li>
                </ul>
              </li>
              <div class="demo-image__lazy">
                <el-image class="item" v-for="url in newPic" :key="url" :src="url" lazy>
                  <i class="iconfont icon-bqxin"></i>
                  <div>动物</div>
                </el-image>
              </div>
            </ul>
            <div class="right">
              <ul class="nav">
                <li class="calendar">
                  <span class="iconBox">
                    <i class="iconfont icon-calendar"></i>
                  </span>
                  <p>今日运势</p>
                </li>
                <li class="edit">
                  <i class="iconfont icon-edit"></i>
                  <p>编辑</p>
                </li>
                <li class="notice">
                  <i class="iconfont icon-notice"></i>
                  <p>公告</p>
                </li>
              </ul>
              <h2>精选话题</h2>
              <h3>Selected topic</h3>
              <div class="title">2019苹果春季发布会你怎么看！</div>
              <ul class="news">
                <li v-for="(item, index) in news" :key="index">
                  <div class="publication">
                    <i class="iconfont icon-header"></i>
                    <span>{{item.name}} - {{item.date}}</span>
                    <p>{{item.text}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </section>
      <home-footer class="home-foot"></home-footer>
    </div>
</template>

<script>
import homeHeader from "../components/public/header.vue";
import homeFooter from "../components/public/footer.vue";
export default {
  data() {
    return {
      img: [
        require("../assets/images/home/banner1.jpg"),
        require("../assets/images/home/banner2.jpg"),
        require("../assets/images/home/banner3.jpg")
      ],
      news: [
        {
          name: "闫泽鹏",
          date: "3小时前",
          text:
            "可穿戴设备真的让你更健康了吗可穿戴设备真的让你更健康设备真的让你更健康设备真的让你更健康设备真的让你更健康了吗？"
        },
        {
          name: "孙照",
          date: "8小时前",
          text: "可穿戴设备真的让你更健康了吗可穿戴设备真的让你更健康了吗？"
        },
        {
          name: "雅雅",
          date: "2天前",
          text: "可穿戴设备真的让你更健康了吗可穿戴设备真的让你更健康了吗？"
        }
      ],
      newPic: [
        require("../assets/images/home/banner1.jpg"),
        require("../assets/images/home/banner2.jpg"),
        require("../assets/images/home/banner3.jpg"),
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
      loading: false,
    };
  },
  components: {
    homeHeader: homeHeader,
    homeFooter: homeFooter
  },
  mounted() {
    // console.log(this.$refs.example);
    this.show()
    window.addEventListener("scroll", () => {
      this.toBottom();
      // console.log(red)
    });
  },
  created() {},
  methods: {
    // 滚动加载更多
    toBottom() {
      let scrollH =
        document.body.scrollTop || document.documentElement.scrollTop;
      var docH, windowH; //滚动条滚动高度
      docH =
        document.body.scrollHeight || document.documentElement.scrollHeight; //文档高度
      windowH =
        window.innerHeight ||
        document.body.clientHeight ||
        document.documentElement.clientHeight; //浏览器窗口高度


      console.log(scrollH+'滚动的高度')
      console.log(docH+'文档高度')
      console.log(windowH+'浏览器窗口高度')

      if (scrollH + windowH >= docH && !this.loading) {
        //滚动到底部和页面没有正在执行请求网络数据的过程中的条件要同时成立才可以执行请求请求数据操作
        // this.show();
      }
    },
    show() {
      this.loading = true;
    }
  }
};
</script>

<style scoped lang="scss">
// .home-head {
// margin-bottom: .6rem;
// position: fixed;
// top: 0;
// left: 0;
// }
.home-warp{
  // width: 100%;
  // height: 100%;
  // min-height: calc(100vh - 2rem);
  .home {
    // height: 800px;
    // background-color: #ccc;
    // padding: .2rem;
    // height: 100%;
    // min-height: calc(100vh - 2rem);
    .content {
      width: 12rem;
      margin: 0 auto;
      .banner {
        width: 100%;
        height: 4rem;
        img {
          width: 100%;
          height: 100%;
        }
        .show {
          width: 70%;
          height: 100%;
          float: left;
          border-right: 1px solid #fff;
          .pics {
            height: 100%;
          }
          img {
            float: left;
          }
        }
        .select {
          width: 30%;
          height: 100%;
          float: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          li {
            width: 100%;
            height: 33%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              transition: all 0.5s;
            }
          }
          li:hover img {
            transform: scale(1.3, 1.3);
          }
        }
      }
      .body {
        width: 100%;
        padding: 0.24rem;
        padding-bottom: 0;
        // height: 8rem;
        padding-right: 0;
        display: flex;
        .left {
          width: 70%;
          height: 100%;
          // float: left;
          // display: flex;
          // justify-content: space-between;
          // flex-wrap: wrap;
          .classify {
            width: 46%;
            height: 2.2rem;
            border-radius: 6px;
            float: left;
            margin-right: 30px;
            h2 {
              font-size: 24px;
              color: #666;
              text-align: left;
              line-height: 1;
            }
            h3 {
              font-size: 24px;
              color: #666;
              text-align: center;
              line-height: 3;
              margin-bottom: 22px;
            }
            ul {
              width: 100%;
              height: 1rem;
              display: flex;
              justify-content: space-around;
              li {
                width: 30%;
                height: 1rem;
                border-radius: 6px;
                background-color: red;
                overflow: hidden;
                position: relative;
                img {
                  width: 100%;
                  height: 100%;
                  transition: all 0.5s;
                }
                .mask {
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  background-color: rgba(0, 0, 0, 0.4);
                  margin-bottom: 20px;
                  display: none;
                }
                .Englishtitle {
                  width: 100%;
                  background-color: black;
                  color: #fff;
                  text-align: center;
                  font-size: 15px;
                  font-weight: bold;
                  position: absolute;
                  top: 28px;
                  left: -100%;
                  line-height: 1.6;
                  transition: all 0.5s;
                }
                .title {
                  width: 100%;
                  color: #ccc;
                  text-align: center;
                  font-size: 13px;
                  position: absolute;
                  top: 60px;
                  left: 100%;
                  transition: all 0.5s;
                }
              }
              li:hover img {
                transform: scale(1.3, 1.3);
              }
              li:hover .mask {
                display: block;
              }
              li:hover .Englishtitle {
                left: 0;
              }
              li:hover .title {
                left: 0;
              }
            }
          }
          .item {
            width: 46%;
            height: 2.2rem;
            border-radius: 6px;
            overflow: hidden;
            transition: all 0.5s;
            float: left;
            margin-right: 30px;
            margin-bottom: 20px;
            .el-image__inner {
              width: 100%;
              height: 100%;
              transition: all 0.5s;
            }
          }
          .item:hover {
            box-shadow: 0 5px 10px 5px #999999;
          }
          .item:hover .el-image__inner {
            transform: scale(1.3, 1.3);
          }
        }
        .right {
          // float: left;
          width: 30%;
          height: 100%;
          .nav {
            width: 100%;
            display: flex;
            justify-content: space-around;
            height: 0.74rem;
            li {
              width: 30%;
              height: 100%;
              text-align: center;
              i {
                font-size: 46px;
              }
              p {
                font-size: 20px;
                line-height: 2;
              }
              .iconBox {
                display: inline-block;
                width: 46px;
                height: 46px;
                position: relative;
              }
            }
            .calendar:hover p {
              color: #d81e06;
              transition: 0.5s;
            }
            .calendar:hover .icon-calendar {
              color: #d81e06;
              transition: 0.5s;
            }
            .edit:hover p {
              color: #3305a9;
              transition: 0.5s;
            }
            .edit:hover .icon-edit {
              color: #3305a9;
              transition: 0.5s;
            }
            .notice:hover p {
              color: #05a972;
              transition: 0.5s;
            }
            .notice:hover .icon-notice {
              color: #05a972;
              transition: 0.5s;
            }
          }
          h2 {
            font-size: 24px;
            color: #666;
            text-align: left;
            line-height: 1;
            margin-top: 0.2rem;
          }
          h3 {
            font-size: 24px;
            color: #666;
            text-align: right;
            line-height: 2;
            margin-bottom: 0.22rem;
            border-bottom: 1px solid #cccccc;
          }
          .title {
            font-size: 24px;
            margin-bottom: 20px;
          }
          .news {
            width: 100%;
            li {
              width: 100%;
              height: 100px;
              transition: all 0.5s;
              padding: 0.1rem;
              border-radius: 4px;
              margin-bottom: 0.1rem;
              span {
                font-size: 16px;
                margin-left: 0.1rem;
              }
              p {
                margin-top: 0.1rem;
                font-size: 18px;
                text-indent: 2em;
                line-height: 1.3;
                width: 3.33rem;
                height: 0.46rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
            li:hover {
              box-shadow: 0 2px 10px 2px #999999;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.home {
  .el-carousel__container {
    height: 100%;
  }
  .item{
    .el-image__inner{
      transition: all 0.5s;
    }
  }
  .item:hover .el-image__inner {
    transform: scale(1.3, 1.3);
  }
}
</style>

