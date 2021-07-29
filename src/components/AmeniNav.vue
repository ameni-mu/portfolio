<template>
  <div>
    <transition name="fade" tag="div" :class="{ noAnim: isOtherPage }">
      <section class="nav" v-show="isNavigationShow">
        <div class="nav__inner">
          <h1 class="nav__logo">
            <img
              src="../assets/img/common/logo.svg"
              alt="アトリエあめに atelier ameni"
            />
          </h1>
          <ul class="nav__lists">
            <li class="nav__list">
              <router-link to="/" active-class="current" exact
                >Index</router-link
              >
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
            <li
              class="nav__list"
              @mouseover="onListMouseOver"
              @mouseleave="onListMouseLeave"
            >
              <router-link to="/contact" active-class="current" exact>
                contact
              </router-link>
              <transition name="listfade">
                <ul class="nav__c-lists" v-if="isContactCListShow">
                  <li class="nav__c-list">
                    <router-link
                      to="/illcontact/illcontactwrite"
                      active-class="current"
                      exact
                      >イラスト</router-link
                    >
                  </li>
                  <li class="nav__c-list">
                    <router-link
                      to="/frontcontact/frontcontactwrite"
                      active-class="current"
                      exact
                      >フロント構築</router-link
                    >
                  </li>
                  <li class="nav__c-list">
                    <router-link
                      to="/othercontact/othercontactwrite"
                      active-class="current"
                      exact
                      >その他</router-link
                    >
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </div>
      </section>
    </transition>
    <p class="nav__icon nav__icon--open" v-show="!isNavOpen" @click="onNavOpen">
      open
    </p>
    <div class="sp-nav" v-show="isNavOpen">
      <h2 class="nav__logo">
        <img
          src="../assets/img/common/logo.svg"
          alt="アトリエあめに atelier ameni"
        />
      </h2>
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
      <p class="sp-nav__close nav__icon nav__icon--close" @click="onNavClose">
        close
      </p>
    </div>
  </div>
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
      isNavOpen: false,
      isContactCListShow: false,
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
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onListMouseOver() {
      this.isContactCListShow = true;
    },
    onListMouseLeave() {
      this.isContactCListShow = false;
    },
    onScroll() {
      if (this.isOtherPage) return;
      if (!this.isNavSetting) {
        const _this = this;
        setTimeout(() => {
          _this.setNav();
        }, 100);
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
        //ナビをabsoluteにする
      } else if (window.scrollY <= y && this.isNavigationShow) {
        this.isNavigationShow = false;
        //el.setAttribute("style", "opacity:0");
      }
      this.isNavSetting = false;
    },
    onNavOpen() {
      this.isNavOpen = true;
    },
    onNavClose() {
      this.isNavOpen = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sp-nav {
  display: none;
  @include max-screen($tablet) {
    display: block;
    padding: 30px;
    border-bottom: 1px solid #e0dcda;
    position: fixed;
    z-index: 9200;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
  &__close {
  }
}
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
  box-sizing: border-box;
  @include max-screen(1300px) {
    margin-left: -550px;
  }
  @include max-screen($tablet) {
    display: none;
  }
  &.noAnim {
    margin-top: 50px;
  }
  &__icon {
    width: 50px;
    height: 50px;
    background-color: #d4cdc9;
    border-radius: 50px;
    background-size: 30px auto;
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    z-index: 9200;
    text-indent: -9999px;
    right: 30px;
    top: 30px;
    cursor: pointer;
    display: none;
    @include max-screen($tablet) {
      display: block;
      width: 40px;
      height: 40px;
      background-size: 25px auto;
    }
    &--open {
      background-image: url("../assets/img/common/ico_open.svg");
    }
    &--close {
      background-image: url("../assets/img/common/ico_close.svg");
    }
  }
  &__inner {
    @include max-screen($tablet) {
      display: none;
      padding: 30px;
      border-bottom: 1px solid #e0dcda;
    }
  }
  &__logo {
    > img {
      width: 155px;
      display: block;
      margin: 0 auto 50px auto;
      @include max-screen($tablet) {
        width: 100px;
      }
    }
  }
  &__lists {
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 20px;
    font-weight: 200;
    width: 155px;
    margin-left: 32px;
    @include max-screen($tablet) {
      width: 100%;
      margin-left: 0;
    }
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
      @include max-screen($tablet) {
        padding: 10px;
        background-image: none;
        text-align: center;
        display: block;
      }
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
        @include max-screen($tablet) {
          display: none;
        }
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
  &__c-lists {
    margin-top: 10px;
  }
  &__c-list {
    padding: 5px 0 8px 30px;
    font-size: 16px;
    a {
      color: #888;
      padding-bottom: 5px;
      margin-bottom: 8px;
      background-image: url("../assets/img/common/list_arrow_gray.svg");
      background-repeat: no-repeat;
      background-position: left 3px;
      background-size: 14px auto;
      padding-left: 16px;
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
  @include max-screen($tablet) {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
}
.fade-enter-active {
  transition: all 0.6s;
  @include max-screen($tablet) {
    transform: translateY(0) !important;
  }
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
  @include max-screen($tablet) {
    transform: translateY(0) !important;
  }
}
.fade-leave {
  opacity: 1;
  transform: translateY(0);
  @include max-screen($tablet) {
    transform: translateY(0) !important;
  }
}
.fade-leave-active {
  transition: all 0.6s;
  @include max-screen($tablet) {
    transform: translateY(0) !important;
  }
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(20vh);
  @include max-screen($tablet) {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
}

.listfade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
  @include max-screen($tablet) {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
}
.listfade-enter-active {
  transition: all 0.6s;
  @include max-screen($tablet) {
    transform: translateY(0) !important;
  }
}
.listfade-enter-to {
  opacity: 1;
  transform: translateY(0);
  @include max-screen($tablet) {
    transform: translateY(0) !important;
  }
}
.listfade-leave {
  opacity: 1;
  transform: translateY(0);
  @include max-screen($tablet) {
    transform: translateY(0) !important;
  }
}
.listfade-leave-active {
  transition: all 0.6s;
  @include max-screen($tablet) {
    transform: translateY(0) !important;
  }
}
.listfade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  @include max-screen($tablet) {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
}
</style>
