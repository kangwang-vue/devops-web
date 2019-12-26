import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/user/Login.vue")
  },
  {
    path: "/",
    name: "layout",
    component: () => import("../views/layout/Layout.vue"),
    children: [
      {
        path: "/workspace",
        name: "workspace",
        component: () => import("../views/workspace/Workspace.vue")
      },
      {
        path: "/product",
        name: "product",
        component: () => import("../views/product/Product.vue")
      },
    ]
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
