import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Settings from "../views/Layout.vue";
import POS from "../views/POS.vue";
import Product from "../views/Product.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings
  },
  {
    path: "/pos",
    name: "pos",
    component: POS
  },
  {
    path: "/product",
    name: "product",
    component: Product
  },
  {
    path: "/user",
    name: "user",
    component: User
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
