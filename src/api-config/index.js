import axios from 'axios'
import router from 'vue-router'
import {Message} from 'element-ui' // 引入 element ui 消息提示框
import * as $globalFun from '../utils/common.js'
import qs from 'qs'


// 开发 url
let baseUrl = 'https://www.easy-mock.com/mock/5cad48af869bde77108e2bed/blog';
// 生产 url
if (process.env.NODE_ENV === 'production') {
  let baseURL = "http://101.132.117.228:9094";
}

const Axios =axios.create({
  baseURL: baseUrl,
  // timeout: 10000,
  responseType: 'json',
  withCredentials: true, // 是否允许携带 cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
});
// post 传参序列化 请求拦截器
Axios.interceptors.request.use((config) => {
  if (window.localStorage.getItem('token')) {
    var AUTH_TOKEN = JSON.parse(window.localStorage.getItem('token'));
    config.headers.common['Authorization'] = AUTH_TOKEN;
  }
  return config;
}, (error) => {
  Message({
      showClose: true,
    message: error,
      type: "error.data.error.message"
  });
  return Promise.reject(error);
});
// 响应拦截器 返回状态判断
Axios.interceptors.response.use((res) => {
  if(typeof(res.data) === 'undefined') {
    console.log('不存在!')
  }else if(res.data === null) {
    return res;
  }else if(res.status && res.status !== 200) {
    return Promise.reject(res)
  }else if(res.data.status != null && res.data.status !== 1) {
    Message({
      showClose: true,
      message: res.data.msg,
      type: 'error.data.error.message'
    });
  }
  // 返回状态判断
  switch (res.data.status) {
    case '-1':
      break;
    case '401':
      //未经授权，请联系系统管理员或使用更高级账户登录
      let errs = res.data.msg;
      throw errs;
      router.push({
        path: "/login"
      });
      break;
    case '-999':
      router.push({
        path: "/login"
      });
      break;
    case '404':
      router.push({
        path: "/404"
      });
      break;
    case '500':
      router.push({
        path: "/index/home"
      });
      break;
    default:
      return res;
  }
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        router.push({
          path: "/404"
        });
        break

      case 408:
        err.message = '请求超时'
        break

      case 499:
        err.message = '客户端等待时间过长'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break
    }
  }
  return Promise.reject(err);
});

// 公共Get方法
export function Get(url, params) {
  return new Promise((resolve, reject) => {
    Axios.get(url,{
      params
    }).then(response => {
      if(response.data !== null) {
        $globalFun.default.localStorage.set("tokenTime", response.data.lastTime);
        resolve(response.data);
      }
    },err => {
      reject(err)
    }).catch((err)=> {
      reject(err)
    })
  })
}
// 公共post方法
export function POST(url, params) {
  let data = qs.stringify(params);
  return new Promise((resolve, reject) => {
    Axios.post(url, data).then(response => {
      $globalFun.default.localStorage.set('tokenTime', response.data.lastTime);
      resolve(response.data);
    },err => {
      reject(err);
    }).catch((err) => {
      reject(err);
    })
  })
}

export default{
  // 登陆接口
  logIn(params) {
    return POST('/login', params);
  },
  // mock
  mockData(params) {
    return POST('/mock', params);
  }
}
