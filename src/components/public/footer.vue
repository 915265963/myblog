<template>
  <div class="footer">
    <div class="content">
      <div class="logo">
        <div class="top">
          <img src="../../assets/images/logo.png" alt="">
          <div class="forum">
            <p style="font-weight: bold;">数字论坛</p>
            <p>there to tango</p>
          </div>
        </div>
        <div class="icon">
                    <span class="weixin">
                        <span class="iconfont icon-weixin"></span>
                        <span class="iconfont icon-weixinColor" style="color:#24db5a;"></span>
                    </span>
          <span class="weibo">
                        <span class="iconfont icon-weibo"></span>
                        <span class="iconfont icon-weiboColor-copy" style="color:#d81e06;"></span>
                    </span>
        </div>
      </div>
      <div class="cooperationPartner">
        <div class="title">合作伙伴</div>
      </div>
      <div class="aboutUs">
        <div class="title">关于我们</div>
        <ul>
          <li>关于GSQ</li>
          <li>软件许可及服务协议</li>
          <li>隐私保护政策</li>
          <li>社区准则</li>
        </ul>
      </div>
      <div class="cooperation">
        <div class="title">商业合作</div>
        <ul>
          <li>联系我们</li>
          <li>我们的优势</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
<style lang="scss" scoped>
  .footer{
    width: 100%;
    min-width: 12rem;
    height: 2rem;
    background-color: #444444;
    // margin-top: -200px;
    // position: absolute;
    // bottom: 0px;
    // left:0;
    .content{
      width: 12rem;
      background-color: #444444;
      margin: 0 auto;
      height: 100%;
      .logo{
        width: 25%;
        height: 100%;
        float: left;
        color:#fff;
        .top{
          width: 1.86rem;
          height: 50%;
          display: flex;
          text-align: center;
          align-items: center;
          margin: 0 auto;
          img{
            float: left;
            margin-right: .1rem;
          }
          .forum{
            float: left;
            p{
              font-size: .18rem;
              text-align: center;
              line-height: .24rem;
              width: 1.12rem;
            }
          }
        }
        .icon{
          text-align: center;
          .iconfont{
            font-size: 36px;
            margin-right: .2rem;
          }
          .weixin{
            float: left;
            position: relative;
            margin-left: .9rem;
            .icon-weixin{
              opacity: 1;
              transition: .5s;
              position: absolute;
              top:0;
              left:0;
            }
            .icon-weixinColor{
              opacity: 0;
              transition: .5s;
              position: absolute;
              top:0;
              left:0;
            }
          }
          .weibo{
            float: left;
            margin-left: 1.6rem;
            position: relative;
            .icon-weibo{
              opacity: 1;
              transition: .5s;
              position: absolute;
              top:0;
              left:0;
            }
            .icon-weiboColor-copy{
              opacity: 0;
              transition: .5s;
              position: absolute;
              top:0;
              left:0;
            }

          }
          .weixin:hover .icon-weixin{
            opacity: 0;
            transition:.5s;
          }
          .weixin:hover .icon-weixinColor{
            opacity: 1;
            transition:.5s;
          }
          .weibo:hover .icon-weibo{
            opacity: 0;
            transition:.5s;
          }
          .weibo:hover .icon-weiboColor-copy{
            opacity: 1;
            transition:.5s;
          }
        }
      }
      .cooperationPartner{
        width: 25%;
        height: 100%;
        float: left;
        padding-top: .2rem;
        .title{
          text-align: center;
          font-weight: bold;
          color:#fff;
          margin-bottom: .2rem;
        }
      }
      .aboutUs{
        width: 25%;
        height: 100%;
        float: left;
        padding-top: .2rem;
        .title{
          text-align: center;
          font-weight: bold;
          color:#fff;
          margin-bottom: .2rem;
        }
        ul{
          font-size: .14rem;
          padding-left: 1.09rem;
          li{
            color:#ccc;
            line-height: .28rem;
          }
          li:hover{
            color:#fff;
          }
        }
      }
      .cooperation{
        width: 25%;
        height: 100%;
        float: left;
        padding-top: .2rem;
        .title{
          text-align: center;
          font-weight: bold;
          color:#fff;
          margin-bottom: .2rem;
        }
        ul{
          font-size: .14rem;
          padding-left: 1.09rem;
          li{
            color:#ccc;
            line-height: .28rem;
          }
          li:hover{
            color:#fff;
          }
        }
      }
    }
  }
</style>

