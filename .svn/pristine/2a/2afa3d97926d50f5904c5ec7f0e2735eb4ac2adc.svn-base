import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LayoutMain from "./components/Layout/Main.vue";
import Login from "./views/Login.vue";
import challengeOne from "./views/Challenge/challengeOne.vue";

Vue.use(Router);
Router.prototype.goBack = function() {
  this.isBack = true;
  window.history.go(-1);
};
const router = new Router({
  mode: "hash",
  routes: [
    {
      // 首頁
      path: "/",
      component: LayoutMain,
      meta: { index: 4 },
      children: [
        {
          path: "",

          name: "Home",
          component: Home
        }
      ]
    },
    {
      // 賽事
      path: "/gamesport",
      name: "gamesport",
      component: () => import("@/views/GameSport.vue")
    },
    {
      // 賽事
      path: "/games",

      component: () => import("@/views/games.vue")
    },
    {
      // 登入頁
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/ForgetPassword",
      name: "ForgetPassword",
      component: () => import("@/views/ForgetPassword.vue")
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("./views/Register.vue")
    },
    // 个人中心
    {
      path: "/myself",
      name: "Myself",
      component: () => import("./views/personalCenter/Myself.vue"),
      meta: { index: 3 }
    },
    //个人中心-修改密码
    {
      path: "/changePass",
      name: "ChangePass",
      component: () => import("./views/personalCenter/ChangePassword.vue")
    },
    //个人中心-系统消息
    {
      path: "/myMessage",
      name: "MyMessage",
      component: () => import("./views/personalCenter/MyMessage.vue")
    },
    //个人中心-金流日誌
    {
      path: "/cashFlowLog",
      name: "CashFlowLog",
      component: () => import("./views/personalCenter/CashFlowLog.vue")
    },
    //个人中心-个人信息
    {
      path: "/selfMsg",
      name: "SelfMsg",
      component: () => import("./views/personalCenter/SelfMsg.vue")
    },
    //个人中心-竞猜历史
    {
      path: "/history",
      name: "History",
      component: () => import("./views/personalCenter/History.vue")
    },
    //个人中心-兑换记录
    {
      path: "/exchange",
      name: "Exchange",
      component: () => import("./views/personalCenter/Exchange.vue")
    },
    //个人中心-比赛结果
    {
      path: "/gameResult",
      name: "GameResult",
      component: () => import("./views/personalCenter/GameResult.vue")
    },
    // 新闻资讯
    {
      path: "/information",
      name: "Information",
      component: () => import("./views/Information.vue")
    },
    {
      path: "/information/:id",
      name: "Information",
      component: () => import("./views/Detail.vue")
    },
    {
      path: "/guize",
      name: "Guize",
      component: () => import("./views/personalCenter/Guize.vue")
    },
    // 問卷調查
    {
      path: "/questionnaire",
      name: "Questionnaire",
      component: () => import("./views/personalCenter/Questionnaire.vue")
    },
    // 勳章展示
    {
      path: "/medal",
      name: "MedalDisplay",
      component: () => import("./views/personalCenter/MedalDisplay.vue")
    },
    {
      //排位赛主页
      path: "/rank",
      name: "rank",
      component: () => import("./views/Rank.vue"),
      meta: { index: 2 }
    },
    {
      //排行賽榜
      path: "/ranklist",
      name: "ranklist",
      component: () => import("./views/RankList.vue")
    },
    {
      //排行賽榜详情
      path: "/ranklistdetails",
      name: "ranklistdetails",
      component: () => import("./views/RankListdetails.vue"),
      meta: { index: 1 }
    },
    {
      //排行榜赛事
      path: "/rankmatch",
      name: "rankmatch",
      component: () => import("./views/RankMatch.vue")
    },
    {
      //排行赛门票购买
      path: "/rankticket/:id",
      name: "rankticket",
      component: () => import("./views/Rankticket.vue")
    },
    {
      //排行赛选择
      path: "/rankchoose",
      name: "ranktchoose",
      component: () => import("./views/Rankchoose.vue")
    },
    {
      //普通赛事
      path: "/match",
      name: "match",
      component: () => import("./views/Match.vue")
    },
    {
      //更多玩法
      path: "/matchmore",
      name: "match",
      component: () => import("./views/Matchmore.vue")
    },

    {
      //投注排行榜 + 勝次排行榜 + 贏幣排行榜
      path: "/rankboard",
      name: "rankboard",
      component: () => import("./views/Rankboard.vue")
    },
    {
      //投注排行榜 + 勝次排行榜 + 贏幣排行榜的排行頁面
      path: "/rankboardlist",
      name: "rankboardlist",
      component: () => import("./views/RankboardList.vue")
    },

    {
      //邀请好友
      path: "/invitationcode",
      name: "InvitationCode",
      component: () => import("./views/InvitationCode.vue")
    },
    //商城
    {
      path: "/shop",
      name: "shoplists",
      component: () => import("./views/Shop.vue"),
      // meta: {
      //   keepAlive: true
      // }
    },
    {
      path: "/yijian",
      name: "Yijian",
      component: () => import("./views/personalCenter/Yijian.vue")
    },
    {
      path: "/Lottery",
      name: "Lottery",
      component: () => import("./views/Lottery.vue")
    },
    //挑战赛
    {
      path: "/challengehome",
      name: "challengeHome",
      component: () => import("./views/Challenge/challengeHome.vue")
    },
    //挑战赛事
    {
      path: "/challengematch",
      name: "challengeMatch",
      component: () => import("./views/Challenge/challengeMatch.vue")
    },

    {
      path: "/challengetwo",
      component: () => import("./views/Challenge/challengeTwo.vue")
      // component: challengeOne
    },
    {
      path: "/challengethree",
      component: () => import("./views/Challenge/challengeThree.vue")
      // component: challengeOne
    },
    {
      path: "/challengefour",
      component: () => import("./views/Challenge/challengeFour.vue")
      // component: challengeOne
    },
    {
      path: "/challengefive",
      component: () => import("./views/Challenge/challengeFive.vue")
      // component: challengeOne
    },
    {
      path: "/challengeticket",
      component: () => import("./views/Challenge/challengeTicket.vue")
    },
    {
      path: "/challengeMouth/:id",
      component: () => import("./views/Challenge/challengeMouth.vue")
    },
    {
      path: "/challengeRecord",
      component: () => import("./views/Challenge/challengeRecord.vue")
    },
    {
      path: "/challengegold",
      component: () => import("./views/Challenge/challengeGold.vue")
    },
    // 任务
    {
      path: "/task",
      name: "task",
      component: () => import("./views/Task.vue")
    },
    //比赛结果
    {
      path: "/game/:id",
      name: "game",
      component: () => import("./views/personalCenter/game.vue")
    },
    {
      path: "/swiper",
      name: "swiper",
      component: () => import("./views/swiper.vue")
    },
    {
      path: "/swiper",
      name: "swiper",
      component: () => import("./views/swiper.vue")
    },
    {
      path: "/address",
      name: "address",
      component: () => import("./views/Address.vue")
    },
    {
      path: "/add",
      name: "addaddress",
      component: () => import("./views/AddAddress.vue")
    },
    {
      path: "/addList",
      name: "address",
      component: () => import("./views/AddList.vue")
    },
    {
      path: "/editAddress",
      name: "Eaddress",
      component: () => import("./views/EditAddress.vue")
    },
    {
      path: "/edit",
      name: "Eaddress",
      component: () => import("./views/Edit.vue")
    },
    {
      path: "/shopList",
      name: "shopList",
      component: () => import("./views/ShopList.vue")
    },
    {
      path: "/vip",
      name: "vip",
      component: () => import("./views/vip.vue")
    },
    {
      path: "/recharge",
      name: "recharge",
      component: () => import("./views/Recharge.vue")
    },
    // 創建我的俱樂部
    {
      path: "/CreateClub",
      name: "CreateClub",
      component: () => import("./views/club/CreateClub.vue")
    },
    // 創建俱樂部條件
    {
      path: "/CreateClubRule",
      name: "CreateClubRule",
      component: () => import("./views/club/CreateClubRule.vue")
    },
    // 創建俱樂部設定
    {
      path: "/CreateClubSet",
      name: "CreateClubSet",
      component: () => import("./views/club/CreateClubSet.vue")
    },
    // 廣告投放
    {
      path: "/ClubAdPutIn",
      name: "ClubAdPutIn",
      component: () => import("./views/club/ClubAdPutIn.vue")
    },
    // 俱樂部團隊紅利
    {
      path: "/CreateTeamBonus",
      name: "CreateTeamBonus",
      component: () => import("./views/club/CreateTeamBonus.vue")
    },
    // 紅利提現
    {
      path: "/ClubDividendWithdrawal",
      name: "ClubDividendWithdrawal",
      component: () => import("./views/club/ClubDividendWithdrawal.vue")
    },
    {
      path: "/clubData",
      name: "clubData",
      component: () => import("./views/club/ClubData.vue")
    },
    {
      path: "/myClub",
      name: "myClub",
      component: () => import("./views/club/MyClub.vue")
    },
    {
      path: "/myAuthority",
      name: "myAuthority",
      component: () => import("./views/club/MyAuthority.vue")
    },
    {
      path: "/memberManagement",
      name: "memberManagement",
      component: () => import("./views/club/MemberManagement.vue")
    },
    {
      path: "/searchClub",
      name: "searchClub",
      component: () => import("./views/club/SearchClub.vue")
    },

    // 發起俱樂部挑戰賽活動
    {
      path: "/ClubActivitiesRelease",
      name: "ClubActivitiesRelease",
      component: () => import("./views/club/ClubActivitiesRelease.vue")
    },

    // 俱樂部挑戰賽活動
    {
      path: "/ClubActivityMatch",
      name: "ClubActivityMatch",
      component: () => import("./views/club/ClubActivityMatch.vue")
    },

    // 俱樂部挑戰賽果列表
    {
      path: "/ClubActivityMatchResult",
      name: "ClubActivityMatchResult",
      component: () => import("./views/club/ClubActivityMatchResult.vue")
    },

    // 俱樂部挑戰賽果
    {
      path: "/ActivityMatchResultDetail",
      name: "ActivityMatchResultDetail",
      component: () => import("./components/Club/ActivityMatchResultDetail.vue")
    },

    // 發起俱樂部投注活動
    {
      path: "/InitiateActivities",
      name: "InitiateActivities",
      component: () => import("./views/club/InitiateActivities.vue")
    },

    // 俱樂部投注
    {
      path: "/ClubActiveBet",
      name: "ClubActiveBet",
      component: () => import("./views/club/ClubActiveBet.vue")
    },

    // 發起者俱樂部投注活動賽果
    {
      path: "/InitiatorBetResult",
      name: "InitiatorBetResult",
      component: () => import("./views/club/InitiatorBetResult.vue")
    },

    // 俱樂部投注活動賽果
    {
      path: "/BetResult",
      name: "BetResult",
      component: () => import("./views/club/BetResult.vue")
    },

    // 成員動態
    {
      path: "/MemberDynamic",
      name: "MemberDynamic",
      component: () => import("./views/club/MemberDynamic.vue")
    },

    // 俱樂部活動頁
    {
      path: "/ClubActivities",
      name: "ClubActivities",
      component: () => import("./views/club/ClubActivities.vue")
    },

    // 俱樂部公告
    {
      path: "/Notice",
      name: "Notice",
      component: () => import("./views/club/Notice.vue")
    },

    // 隐私权限页
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("./views/Privacy.vue")
    },
  ]
});

// router.beforeEach((to, from, next) => {
//   if (
//     to.path === "/" ||
//     to.path === "/home" ||
//     to.path === "/ForgetPassword" ||
//     to.path == "/register"
//   ) {
//     next();
//   } else {
//     let token = localStorage.getItem("token");
//     token ? next() : next("/");
//   } 
// });
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Router.prototype.goBack = function() {
  this.isBack = true;
  window.history.go(-1);
};
export default router;
