<template>
  <div class="notfound otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="notfound__inner otherpage__inner">
      <h1 class="notfound__title">Not Found</h1>
      <p class="notfound__text">ページが見つかりません</p>
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

<style lang="scss">
.notfound {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    flex-wrap:wrap;
  }
  &__title {
    font-size: 40px;
    margin-bottom: 20px;
    width: 100%;
    display: block;
  }
  &__text {
    width: 100%;
    display: block;
  }
}
</style>
