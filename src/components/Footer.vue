<template name="fade">
  <section class="footer" :class="'footer--style' + styleType">
    <p class="footer__copy">&copy; atelier-ameni</p>
    <a href="#" class="to-pagetop footer__to-pagetop" @click="toPageTop"
      >ページトップへ</a
    >
  </section>
</template>

<script>
export default {
  props: ["styleType"],
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
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 60px;
  text-align: center;
  background: #fff;
  z-index: 10;
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
    height: 100px;
    width: 100%;
    line-height: 100px;
    color: #999999;
    @include max-screen($sp) {
      height: 60px;
      line-height: 60px;
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
    margin-left: 550px;
    bottom: 130px;
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
