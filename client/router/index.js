import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index";
// import store from "@/store";
const Page = () => import("@/views/home/page.vue");
const Setting = () => import("@/views/home/setting.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: {
      name: "login"
    },
    children: [
      {
        path: "/pageList",
        component: Page,
        name: "pageList",
        meta: {
          title: "页面列表管理",
          requireAuth: true
        }
      },
      {
        path: "/setting",
        component: Setting,
        name: "setting"
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登陆"
    },
    component: () => import("../views/login/index.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/preview/:pid",
    name: "preview",
    component: () => import("@/views/preview/index.vue"),
    meta: {
      title: "预览",
      requireAuth: false
    }
  },
  {
    path: "/edit/:pid",
    name: "edit",
    meta: {
      title: "装修页",
      requireAuth: true
    },
    component: () => import("../views/edit/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 路由守卫， 在跳转之前执行
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("testToken");
  let requireAuth = to.meta.requireAuth; // VueRouter 里配置页面是否需要登陆进入
  // let root = to.meta.root; // VueRouter 里配置页面是否需要登陆且管理员权限进入
  if (!token) {
    // vuex 清除 userInfo 和登陆状态
    // store.commit("SET_USERINFO", { userInfo: {}, status: false });
    requireAuth ? next({ path: "/" }) : next();
  } else {
    if (to.name == "login") {
      next({ name: "pageList" });
    } else {
      next();
    }
  }
});
router.afterEach(to => {
  document.title = to.meta.title;
});
export default router;
