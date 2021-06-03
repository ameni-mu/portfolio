import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/reset.css";
import animateCss from "animate.css";
import swiperCss from "swiper/swiper.scss";
import swiperzNav from "swiper/components/navigation/navigation.min.css";
import swiperPagination from "swiper/components/pagination/pagination.min.css";

const app = createApp(App)
  .use(animateCss)
  .use(swiperCss)
  .use(swiperzNav)
  .use(swiperPagination)
  .use(store)
  .use(router);

//indexページのナビゲーション
//スクロールに合わせて追従させる
app.directive("onScrollIndexNav", {
  beforeMount(el, binding) {
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
