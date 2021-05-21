import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/reset.css";
import animateCss from "animate.css";

const app = createApp(App).use(animateCss).use(store).use(router);

//indexページのナビゲーション
//スクロールに合わせて追従させる
app.directive("onScrollIndexNav", {
  beforeMount(el, binding) {
    console.log("scrollEvent");
    let f = function (e) {
      if (binding.value(e, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  },
  unmounted() {},
});

app.mount("#app");
