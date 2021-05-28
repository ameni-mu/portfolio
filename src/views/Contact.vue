<template>
  <div class="contact otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="otherpage__inner">
      <h1 class="contact__heading heading otherpage__heading">CONTACT</h1>

      <p class="contact__title">
        イラスト制作のご依頼、ご相談はこちらのメールフォームからお問い合わせください。
      </p>
      <p class="contact__btn btn btn--red">
        <router-link to="/illcontact/illcontactwrite"
          >イラスト専用 / メールフォームへ</router-link
        >
      </p>
      <p class="contact__title">
        フロント構築のご依頼、ご相談はこちらのメールフォームからお問い合わせください。
      </p>
      <p class="contact__btn btn btn--red">
        <router-link to="/frontcontact"
          >フロント構築 / 専用メールフォームへ</router-link
        >
      </p>
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
  .nav {
    margin-top: 30px;
  }
  &__title {
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 15px;
  }
  &__btn {
    margin-bottom: 30px;
    padding-bottom: 30px;
  }
  &__heading {
    margin-bottom: 70px;
  }
}
</style>
