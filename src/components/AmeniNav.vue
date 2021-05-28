<template>
  <transition name="fade" tag="div" :class="{ noAnim: isOtherPage }">
    <section class="nav" v-show="isNavigationShow">
      <h1 class="nav__logo">
        <img
          src="../assets/img/common/logo.svg"
          alt="アトリエあめに atelier ameni"
        />
      </h1>
      <ul class="nav__lists">
        <li class="nav__list">
          <router-link to="/" active-class="current" exact>Index</router-link>
        </li>
        <li class="nav__list">
          <router-link to="/profile" active-class="current" exact
            >Profile</router-link
          >
        </li>
        <li class="nav__list">
          <router-link to="/frontend" active-class="current" exact
            >Frontend</router-link
          >
        </li>
        <li class="nav__list">
          <router-link to="/illust" active-class="current" exact
            >Illust</router-link
          >
        </li>
        <li class="nav__list">
          <router-link to="/contact" active-class="current" exact
            >contact</router-link
          >
        </li>
      </ul>
    </section>
  </transition>
</template>

<script>
export default {
  name: "AmeniNav",
  props: ["isOtherPage"],
  data() {
    return {
      isNavigationShow: false,
      isNavSetting: false,
      winH: 0,
      isResize: false,
      animName: "fade",
    };
  },
  beforeCreate() {
    if (this.isOtherPage) {
      this.animName = "";
    } else {
      this.animName = "fade";
    }
  },
  mounted() {
    if (this.isOtherPage) {
      this.isNavigationShow = true;
    }
    this.onScroll();
    this.onResize();
  },
  methods: {
    onScroll() {
      if (this.isOtherPage) return;
      if (!this.isNavSetting) {
        const _this = this;
        window.addEventListener("scroll", function () {
          setTimeout(() => {
            _this.setNav();
          }, 100);
        });
      }
    },
    onResize() {
      this.isResize = true;
      setTimeout(() => {
        this.winH = window.innerHeight <= 800 ? 800 : window.innerHeight;
        this.isResize = false;
      }, 300);
    },
    setNav() {
      this.isNavSetting = true;
      const y = this.winH / 2;
      //ナビをfixedにする
      if (window.scrollY > y && !this.isNavigationShow) {
        //el.setAttribute("style", "opacity:1");
        this.isNavigationShow = true;
        console.log("isNavigationShow : " + this.isNavigationShow);
        //ナビをabsoluteにする
      } else if (window.scrollY <= y && this.isNavigationShow) {
        this.isNavigationShow = false;
        console.log("isNavigationShow : " + this.isNavigationShow);
        //el.setAttribute("style", "opacity:0");
      }
      this.isNavSetting = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 200px;
  left: 50%;
  margin-top: 100px;
  margin-left: -600px;
  padding: 50px 20px 80px 10px;
  background-color: #ffffff;
  border-radius: 20px;
  z-index: 9000;
  @include max-screen(1300px) {
    margin-left: -550px;
  }
  &__logo {
    > img {
      width: 155px;
      display: block;
      margin: 0 auto 50px auto;
    }
  }
  &__lists {
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 20px;
    font-weight: 200;
    width: 155px;
    margin-left: 32px;
  }
  &__list {
    margin-bottom: 10px;
    > a {
      display: block;
      width: 100%;
      color: #333333;
      padding: 5px 10px 5px 26px;
      min-height: 35px;
      background-image: url("../assets/img/common/list_arrow.svg");
      background-repeat: no-repeat;
      background-position: left 13px;
      background-size: 15px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;
      text-decoration: none;
      &:before {
        content: "";
        width: 90%;
        bottom: -5px;
        position: absolute;
        left: 0;
        background-color: #fef3ec;
        height: 8px;
        z-index: -1;
        opacity: 0;
      }
      &:hover {
        &:before {
          opacity: 1;
        }
      }
      &.current {
        opacity: 0.5;
        cursor: default;
        &:before {
          opacity: 1;
        }
      }
    }
  }
}
.noAnim {
  transition: transform 0s !important;
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20vh);
}
.fade-enter-active {
  transition: all 0.6s;
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-active {
  transition: all 0.6s;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(20vh);
}
</style>
