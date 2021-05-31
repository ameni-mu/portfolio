<template>
  <div class="contact otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="otherpage__inner">
      <router-view />
    </div>
    <Footer :styleType="2"></Footer>
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
import AmeniNav from "@/components/AmeniNav";
import Footer from "@/components/Footer";

export default {
  mixins: [setMetaDesc],
  components: {
    AmeniNav,
    Footer,
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
