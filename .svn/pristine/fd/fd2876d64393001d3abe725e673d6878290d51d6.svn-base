<template>
  <main class="main mainHome">
    <card-comp></card-comp>
    <modal-sign-in :showModal.sync="isSignIn"></modal-sign-in>
    <!-- <card-foot></card-foot> -->
    <!-- 下面的组件 -->
    <div class="mask" id="dMask" style="display: none;"></div>
    <div id="d1" class="d1" style="display: none;">
      <div class="d2">APP更新中</div>
      <p id="pgv">进度：0%</p>
      <progress id="pg" max="100" value="0"></progress>
    </div>
  </main>
</template>

<script>
import CardComp from "@/components/MainGame.vue";
import CardFoot from "@/components/MoreGame.vue";
import "../style/addtohomescreen.css";

import ModalSignIn from "@/components/Modal/SignIn.vue";
export default {
  name: "mainHome",
  components: {
    ModalSignIn,
    CardComp,
    CardFoot
  },
  created() {
    this.UPDATE_URL = process.env.VUE_APP_UPDATE_URL
    if (window.plus) {
      this.checkUpdate();
    } else {
      document.addEventListener("plusready", this.checkUpdate, false);
    }
  },
  mounted(){
    
  },
  data() {
    return {
      isSignIn: false,
      isLogin: false,
      UPDATE_URL:""
    };
  },
  methods: {
    checkUpdate() {
      var vm = this;
      // 检查当前版本，与从后台获取的版本作比较，以此判断是否更新
      plus.runtime.getProperty(plus.runtime.appid, function(inf) {
        // 当前版本
        var wgtVersion = inf.version;
        var xhr = new plus.net.XMLHttpRequest();
        xhr.onreadystatechange = function() {
          switch (xhr.readyState) {
            case 0:
              //alert( "xhr请求已初始化" );
              break;
            case 1:
              //alert( "xhr请求已打开" );
              break;
            case 2:
              //alert( "xhr请求已发送" );
              break;
            case 3:
              //alert( "xhr请求已响应");
              break;
            case 4:
              if (xhr.status == 200) {
                //alert( "xhr请求成功："+xhr.responseText );
                //alert("服务器端版本：" + JSON.parse(xhr.responseText).version);
                var data = JSON.parse(xhr.responseText);
                // 如果有新版本，则提示需要更新
                if (data.version > wgtVersion) {
                  //alert("本地版本：" + wgtVersion);
                  document.getElementById("dMask").style.display = "block";
                  plus.nativeUI.alert(
                    "发现新版本，点击确定开始更新！\r\n更新说明：" + data.comment,
                    function() {
                      document.getElementById("d1").style.display = "block";
                      vm.downloadWgt(data.url, data.version); // 下载wgt方法
                    }
                  );
                  
                } else {
                  return;
                }
              } else {
                alert("xhr请求失败：" + xhr.readyState);
              }
              break;
            default:
              break;
          }
        };
       
        xhr.open(
          "GET",
          vm.UPDATE_URL + "?t=" + new Date().getTime()
        );
        xhr.send();
      });
    },
    closeMask() {
      document.getElementById("d1").style.display = "none";
      document.getElementById("dMask").style.display = "none";
    },

    // 下载wgt方法
    downloadWgt(url, version) {
      var vm = this;
      // 更新文件 wgt 文件地址
      var wgtUrl = url + "?v=" + version;
      //plus.nativeUI.showWaiting("正在更新...");
      var downTask = plus.downloader.createDownload(
        wgtUrl,
        { filename: "_doc/update/" },
        function(d, status) {
          if (status == 200) {
            //console.log("下载更新包成功：" + d.filename);
            vm.installWgt(d.filename); // 安装wgt方法
          } else {
            //console.log("下载更新包失败！");
            plus.nativeUI.alert("下载更新包失败！", function() {
              vm.closeMask();
            });
          }
          //plus.nativeUI.closeWaiting();
        }
      );

      downTask.start(); // 开启下载的任务

      var prg = 0;
      //var showLoading = plus.nativeUI.showWaiting("正在下载");  //创建一个showWaiting对象
      downTask.addEventListener("statechanged", function(task, status) {
        //给下载任务设置一个监听 并根据状态  做操作
        switch (task.state) {
          case 1:
            //showLoading.setTitle("正在连接到服务器");
            break;
          case 2:
            //showLoading.setTitle("已连接到服务器");
            break;
          case 3:
            prg = parseInt(
              (parseFloat(task.downloadedSize) / parseFloat(task.totalSize)) * 100
            );
            //if(prg % 10 == 0) {  // 让百分比 10% 增长，如果这里不这么处理  出现 堆栈内存溢出的问题，有知道原因的大神指导一下哈
            //	showLoading.setTitle("更新文件已下载" + prg + "%");
            //}
            var pg = document.getElementById("pg");
            var pgv = document.getElementById("pgv");
            var timer = setInterval(function() {
              if (prg !== 100) {
                pg.value = prg;
                pgv.innerHTML = "进度：" + prg + "%";
              } else {
                pgv.innerHTML = "APP更新包下载完成";
                clearInterval(timer);
              }
            }, 100);
            break;
          case 4:
            //plus.nativeUI.closeWaiting();
            break;
        }
      });
    },

    // 安装wgt方法
    installWgt(path) {
      var vm = this;
      //plus.nativeUI.showWaiting("安装更新包文件...");
      plus.runtime.install(
        path,
        { force: true },
        function() {
          //plus.nativeUI.closeWaiting();
          //console.log("安装更新包文件成功！");
          plus.nativeUI.alert("APP资源更新完成！", function() {
            vm.removeUpdateFile();
          });
        },
        function(e) {
          //plus.nativeUI.closeWaiting();
          //console.log("安装更新包文件失败[" + e.code + "]：" + e.message);
          plus.nativeUI.alert(
            "安装更新包文件失败[" + e.code + "]：" + e.message,
            function() {
              plus.runtime.restart();
            }
          );
        }
      );
    },

    removeUpdateFile() {
      plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
        // remove the directory and all it's contents
        fs.root.removeRecursively(
          function(removeentry) {
            plus.runtime.restart();
            console.log("Remove update pack Succeeded");
          },
          function(e) {
            plus.nativeUI.alert(e.message, function() {
              plus.runtime.restart();
            });
          }
        );
      });
    },

    clearcaches() {
      plus.cache.calculate(function(size) {
        //console.log("您目前的系统缓存为" + parseFloat(size / (1024 * 1024)).toFixed(2) + "M？")
        var sizeCache = size;
        plus.nativeUI.confirm(
          "您目前的系统缓存为" +
            parseFloat(sizeCache / (1024 * 1024)).toFixed(2) +
            "M？",
          function(e) {
            if (e.index == 1) {
            } else {
              plus.cache.clear(function() {
                alert("缓存清除完毕");
                plus.runtime.restart();
              });
            }
          },
          "清除缓存",
          ["确认", "取消"]
        );
      });
    }
  }
};
</script>

<style scoped>
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: #080808;
  opacity:0.7;
  z-index: 9998;
}
.d1 {
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 99999;
  width: 80%;
  height: 110px;
  color: #3f4b50;
  background: #ffffff;
  padding: 55px;
  border-radius: 15px;
}
.d2 {
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  font-size: 0.3rem;
  color: #3f4b50;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 99999;
}
progress {
  height: 8px;
  border-radius: 0.25rem;
  width: 100%;
}
progress::-webkit-progress-bar {
  background-color: #f2f2f2;
  border-radius: 0.25rem;
}
progress::-webkit-progress-value {
  height: 8px;
  border-radius: 0.25rem;
  background: linear-gradient(to right, #632891, #00ffcb);
}
</style>