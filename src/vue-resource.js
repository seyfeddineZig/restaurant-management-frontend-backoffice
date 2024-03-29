import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root = "http://localhost:5000/api/";
Vue.http.headers.common["token"] = window.localStorage.getItem("token");
