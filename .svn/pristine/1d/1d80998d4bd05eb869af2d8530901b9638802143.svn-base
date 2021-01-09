import Vue from "vue";
import { Message } from "element-ui";
export default {
  showSuccess(text, close) {
    const m = Vue.prototype.$message({
      message: text,
      type: "success",
      duration: 2000
    });
    if (close) {
      // debugger
      setTimeout(() => {
        m.close();
      }, 1000);
    } else {
      m;
    }
  },

  showWarning(text, close) {
    let m = Vue.prototype.$message({
      message: text,
      type: "warning",
      duration: 1800
    });
    if (close) {
      // debugger
      setTimeout(() => {
        m.close();
      }, 1800);
    } else {
      m;
    }
  },
  showError(text, close) {
    const m = Vue.prototype.$message({
      message: text,
      type: "error",
      duration: 1800
    });
    if (close) {
      // debugger
      setTimeout(() => {
        m.close();
      }, 1800);
    } else {
      m;
    }
  },
  showMsg(text, type, time, close, center) {
    const m = Vue.prototype.$message({
      message: text,
      type: type,
      duration: time,
      center: center
    });
    if (close) {
      // debugger
      setTimeout(() => {
        m.close();
      }, time);
    } else {
      m;
    }
  }
};
