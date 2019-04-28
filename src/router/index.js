import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Route = [
  {
    path: '/',
    name: 'home',
    // redirect: '/logIn',
    component: resolve => require(['../views/home.vue'], resolve)
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: resolve => require(['@/views/login.vue'], resolve)
  },
  {
    path: '/personal',
    name: 'personal',
    component: resolve => require(['@/views/personal.vue'], resolve),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/hot',
    name: 'hot',
    component: resolve => require(['@/views/hot.vue'], resolve),
  },
  {
    path: '/discover',
    name: 'discover',
    component: resolve => require(['@/views/discover.vue'], resolve),
  },

  ];

// 配置路由
const router = new Router({
  routes: Route,
  history: false,
  mode: 'history'
});

// 全局守卫  控制用户未登录状况下的加载
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireLogin)) {
    // 判断是否需要登录权限
    if (window.localStorage.getItem('token')) {
      let loginTime = parseInt(window.localStorage.getItem('tokenTime')) + 1000 * 60 * 60 * 1 * 1;
      let nowTime = (new Date()).getTime(); // 当前时间时间戳
      if (nowTime < loginTime) {
        next();
      } else {
        // token超时
        Message({
          showClose: true,
          message: "登录状态信息过期,请重新登录",
          type: "error"
        });
        window.localStorage.clear();
        next({
          path: "/login"
        });
      }
    } else {
      // 没登录则跳转到登录界面
      next({
        path: "/login"
      });
    }
  } else {
    next();
  }
})
// 暴露router
export default router
