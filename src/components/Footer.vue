<template name="fade">
  <section class="footer" :class="'footer--style' + styleType">
    <!-- <div class="ld__wrap" @click="toPageTop" v-if="catVisible != '2'">
      <span class="ld__c1"></span>
      <span class="ld__c2">
        <span class="ld__c8"></span>
      </span>
      <span class="ld__c3"></span>
      <span class="ld__c4"></span>
      <span class="ld__c5"></span>
      <span class="ld__c6"></span>
      <span class="ld__c7"></span>
    </div> -->
    <div class="footer__links">
      <router-link to="/" tag="li" class="footer__li" exact
        >トップページ</router-link
      >
      <router-link to="/profile" tag="li" class="footer__li" exact
        >プロフィール</router-link
      >
      <router-link to="/frontend" tag="li" class="footer__li" exact
        >フロントエンド</router-link
      >
      <router-link to="/illust" tag="li" class="footer__li" exact
        >イラスト</router-link
      >
      <router-link to="/contact" tag="li" class="footer__li" exact
        >お問い合わせ</router-link
      >
      <router-link to="/privacypolicy" tag="li" class="footer__li" exact
        >プライバシーポリシー</router-link
      >
    </div>
    <p class="footer__copy">&copy; atelier-ameni</p>
    <a href="#" class="to-pagetop footer__to-pagetop" @click="toPageTop"
      >ページトップへ</a
    >
  </section>
</template>

<script>
export default {
  props: ["styleType", "catVisible"],
  mounted() {},
  methods: {
    toPageTop(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.footer {
  bottom: 0;
  width: 100%;
  min-height: 60px;
  text-align: center;
  background: #fff;
  z-index: 10;
  position: relative;
  z-index: 1000;
  box-sizing: border-box;
  padding: 0 40px 20px;
  @include max-screen($sp) {
    font-size: 12px;
    min-height: 40px;
  }
  &--style1 {
    background-color: #ffffff;
    &:after {
      content: "";
      position: absolute;
      background-image: url("../assets/img/common/bg_wave_white.svg");
      width: 100%;
      height: 30px;
      top: -20px;
      left: 0;
      background-size: 250px auto;
    }
  }
  &--style2 {
    background-color: inherit;
    border-top: 1px solid #f2f0ef;
  }
  &__copy {
    z-index: 10;
    width: 100%;
    color: #999999;
    padding-top: 10px;
    display: block;
    @include max-screen($sp) {
    }
  }
  &__links {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    @include max-screen($sp) {
      padding-top: 20px;
    }
  }
  &__li {
    color: #999 !important;
    margin: 0 13px 15px 0;
    position: relative;
    left: 10px;
    padding-left: 8px;
    font-size: 14px;
    display: inline-block;
    @include max-screen($sp) {
      margin: 0 13px 10px 0;
    }
    &:hover {
      opacity: 0.7;
    }
    &:before {
      display: none;
    }
    &:after {
      content: "";
      width: 5px;
      height: 5px;
      background-color: #ddd;
      border-radius: 5px;
      left: 0;
      top: 6px;
      position: absolute;
    }
  }
  &__to-pagetop {
    width: 50px;
    height: 50px;
    background-color: #dfdcda;
    border-radius: 25px;
    text-indent: -9999px;
    overflow: hidden;
    display: block;
    background-image: url("../assets/img/common/pagetop_arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50px auto;
    position: absolute;
    z-index: 9000;
    left: 50%;
    margin-left: 500px;
    bottom: 150px;
    @include max-screen(1240px) {
      display: none;
    }
    @include max-screen($sp) {
      display: none;
    }
    &:before {
      display: none;
    }
  }
}
</style>
