<template>
  <div class="fw otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="fw__inner otherpage__inner">
      <h1 class="fw__heading heading otherpage__heading">
        Front-end Works
      </h1>
      <ul class="fw__lead otherpage__list">
        <li>
          年代別に掲載しています。
        </li>
        <li>
          大変申し訳ございませんが、2015年以降は制作物のデータを保存しておかなかったため2018、19年に制作に携わったものを少ししか掲載できていません。
        </li>
      </ul>

      <div class="fw__block">
        <h2 class="fw__secondary-heading">2015〜2017</h2>

      </div>
      <div class="fw__block">
        <h2 class="fw__secondary-heading">2014</h2>
      </div>
      <div class="fw__block">
        <h2 class="fw__secondary-heading">2012〜2013</h2>
      </div>
      <div class="fw__block">
        <h2 class="fw__secondary-heading">2010〜2011</h2>
        <ul class="fw__thumb-lists">
          <li class="fw__thumb-list">

          </li>
        </ul>
      </div>
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
.fw {
  .nav {
    margin-top: 30px;
  }
  &__lead {
    margin-bottom: 60px;
  }
  &__block {
    margin-bottom: 80px;
  }
  &__secondary-heading {
    font-size: 22px;
    padding-left: 20px;
    position: relative;
    margin-bottom: 20px;
    &:before {
      width: 5px;
      border-radius: 2px;
      background-color: #f1dcd3;
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      content: "";
    }
  }
}
</style>
