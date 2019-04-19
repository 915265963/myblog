<template>
  <div>
    <div class="parent">
      <div class="child"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        top: 0,
        startY: 0,          // 保存 y轴点的位置
        touching: false,   // 代表当前是否处于 下拉刷新行为的开关，也就是当属于滚动行为时，就要退出该事件机制
      }
    },
    methods: {
      touchStart(e) {
        // e代表该事件对象，e.targetTouches[0].pageY可以拿到手指按下的 y轴点
        this.startY = e.targetTouches[0].pageY
        // 开启下拉刷新状态
        this.touching = true

      },
      touchMove(e) {
        //这个 touchMove，只要页面在动都会发生的，所以 touching就起作用了
        // 如果 touching为false，说明这个正在移动的页面不是我们想要的下拉刷新，有可能是用户随意拉了一下页面而已，或者其他
        if(!this.touching) return
        // 获取移动的距离
        let diff = e.targetToc=uches[0].pageY - this.startY
        //判断是向上拉还是向下拉
        if(diff > 0 ) {
          e.preventDefault()
        } else {
          return
        }
        //这个this.top要对应绑定到该元素的transform: translateY(+top+ 'px')上，不然是无法拉动的
        // 因此这里还要对偏移高度做一下处理，直接设置diff +(this.state === 2 ? 40 : 0) 太快了，因为拉取幅度太大
        // 让diff*0.25这样子就差不多了
        this.top = Math.floor(diff*0.25) + (this.state === 2 ? 40 : 0);
        if(this.top >= 40){
          this.state = 1   //代表正在拉取
        } else {
          this.state = 0  // 代表初始转态
        }
      },
　　　　touchEnd(e) {
        this.touching = false;
        if(this.state === 2) {
          this.top = 40;
          return
      }
    // 判断抬起时的高度，是大于40 就开启刷新
    if(this.top >= 40) {
      this.refresh()
    } else {
      this.state = 0
      this.top = 0
    }
  },
  refresh() {
    this.state = 2
    this.top = 40
    const self = this
    // 这里可以调用父组件的方法去请求刷新接口
    this.$emit('getRefresh', function(self){
      //传个回调过去，请求完数据就复原
      self.state = 0;
      self.top = 0
    })
  }
  }

  }
</script>
<style scoped>
  .parent{
    height: 100vh;
    width: 100vw;
  }
  .child{
    height: 300vh;
    width: ;
  }
</style>
