import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index";
const Page = () => import("@/views/home/page.vue");
const Setting = () => import("@/views/home/setting.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: {
      name: "pageList"
    },
    children: [
      {
        path: "/pageList",
        component: Page,
        name: "pageList"
      },
      {
        path: "/setting",
        component: Setting,
        name: "setting"
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/edit",
    name: "edit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/edit/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
