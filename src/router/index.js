import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/user/Login.vue")
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../views/layout/Layout.vue"),
    children: [
      {
        path: "/workspace",
        name: "workspace",
        component: () => import("../views/workspace/Workspace.vue")
      }, {
        path: "/product",
        name: "product",
        component: () => import("../views/product/Product.vue")
      }, {
        path: "/requirement",
        name: "requirement",
        component: () => import("../views/demand/Demand.vue")
      }, {
        path: "/branch",
        name: "branch",
        component: () => import("../views/branch/Branch.vue")
      }, {
        path: "/publish",
        name: "publish",
        component: () => import("../views/publish/Publish.vue")
      }, {
        path: "/versions",
        name: "versions",
        component: () => import("../views/versions/Versions.vue")
      }, {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/forms/Forms.vue")
      }, {
        path: "/test",
        name: "test",
        component: () => import("../views/test/Test.vue")
      },{
        path: "/moduleA",
        name: "moduleA",
        component: () => import("../views/test/ModuleA.vue")
      },{
        path: "/moduleB",
        name: "moduleB",
        component: () => import("../views/test/ModuleB.vue")
      },
      {
        path: "/moduleC",
        name: "moduleC",
        component: () => import("../views/test/ModuleC.vue")
      },
      {
        path: "/moduleD",
        name: "moduleD",
        component: () => import("../views/test/ModuleD.vue")
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
