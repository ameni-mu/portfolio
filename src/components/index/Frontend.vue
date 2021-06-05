<template>
  <section class="frontend section wave wave--top wave--bottom">
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
.frontend {
  background-color: #f8e9e7;
  &.section {
    display: block;
    min-height: auto;
    justify-content: inherit;
    padding-top: 150px;
    padding-bottom: 140px;
    @include max-screen($sp) {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
  .section__inner {
    height: auto;
  }
  &__text {
    line-height: 32px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    word-break: break-word;
  }
  &__lead {
    margin-bottom: 50px;
    @include max-screen($sp) {
      line-height: 22px;
      font-size: 14px;
      margin-bottom: 30px;
    }
  }
  &__block {
    padding-left: 30px;
    position: relative;
    margin-bottom: 20px;
    @include max-screen($sp) {
      padding-left: 20px;
    }
    &:before {
      content: "";
      height: 100%;
      width: 8px;
      border-radius: 2px;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #e3dcd9;
      @include max-screen($sp) {
        width: 5px;
      }
    }
    &--skill {
      letter-spacing: 1px;
      @include max-screen($sp) {
        line-height: 20px;
      }
    }
  }
}
</style>
