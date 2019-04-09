// 公共方法

// 本地存储公共方法
const localStorage = {
  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  get(key) {
    return window.localStorage.getItem(key)
  },
  delete(key) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  },
};
// cookie 公共方法
const cookie = {
  set(key, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 3600 * 1000);
    document.cookie = key + "=" + escape(value) + ";path=/;expires=" + date.toGMTString();
  },
  get(key) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(";");
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split("=");
      if (arr[0] == key)
        return arr[1];
    }
    return "";
  },
  delete(key) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(key);
    if (cval != null)
      document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
  }
};
// session 公共方法
const session = {
  set(key, value) {
    sessionStorage.setItem(key, value);
  },
  delete(key) {
    sessionStorage.removeItem(key);
  },
  get(key, value) {
    sessionStorage.getItem(key, value);
  },
  // 清除全部
  clean() {
    sessionStorage.clear();
  }

};
export default {
  localStorage,
  cookie,
  session
}
