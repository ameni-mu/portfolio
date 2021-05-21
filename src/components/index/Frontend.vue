<template>
  <section class="frontend section wave wave--pink">
    <div class="section__inner">
      <h2 class="frontend__heading heading">Front-end</h2>
      <div class="frontend__text text bottom-line--pink">
        <p class="frontend__lead">
          jsを使用したフロントエンドエンジニア歴は7年ほどになります。
        </p>
        <div class="frontend__block frontend__block--skill">
          環境：<br />
          Main => MacBook / macOS Big Sur 11.3.1<br />
          Sub => Windows7
        </div>
        <div class="frontend__block frontend__block--skill">
          スキル：<br />
          HTML5/javascript(es5,6)/Vue/Vuex/<br />
          SASS/BEM/RSCSS/MovableType/Wordpress/
        </div>
      </div>
      <p class="section__morelink morelink">
        <router-link to="/frontend">MORE</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Frontend",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wave {
  &--white {
    &:after {
      background-image: url("../../assets/img/common/bg_wave_white.svg");
    }
  }
  &--pink {
    &:after {
      background-image: url("../../assets/img/common/bg_wave_pink.svg");
    }
  }
}
.frontend {
  background-color: #f9f2ef;
  &.section {
    display: block;
    min-height: auto;
    justify-content: inherit;
    padding-top: 150px;
    padding-bottom: 140px;
  }
  .section__inner {
    height: auto;
  }
  &__text {
    line-height: 32px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  &__lead {
    margin-bottom: 50px;
  }
  &__block {
    padding-left: 30px;
    position: relative;
    margin-bottom: 20px;
    &:before {
      content: "";
      height: 100%;
      width: 8px;
      border-radius: 2px;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #eae7e5;
    }
    &--skill {
      letter-spacing: 1px;
    }
  }
}
</style>
