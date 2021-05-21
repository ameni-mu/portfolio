<template>
  <div class="contact otherpage">
    <Navigation :isOtherPage="true"></Navigation>
    <div class="otherpage__inner">
      <h1 class="contact__heading heading otherpage__heading">
        フロント構築のお問い合わせ
      </h1>
    </div>
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
import Navigation from "@/components/Navigation";

export default {
  mixins: [setMetaDesc],
  components: {
    Navigation,
  },
};
</script>

<style scoped lang="scss">
.contact {
  &:before {
    background-image: url("../assets/img/common/deco_bg_dot1.svg");
  }
  &:after {
    background-image: url("../assets/img/common/deco_bg_dot2.svg");
  }
  .nav {
    margin-top: 30px;
  }
  &__heading {
    margin-bottom: 70px;
    font-size: 30px;
  }
}
</style>
