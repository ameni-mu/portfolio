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
        <router-link to="/frontcontact/frontcontactwrite/"
          >フロント構築 / 専用メールフォームへ</router-link
        >
      </p>
      <p class="contact__title">
        上記以外のその他のお問い合わせはこちらからお願いします。
      </p>
      <p class="contact__btn btn btn--red">
        <router-link to="/othercontact/othercontactwrite"
          >その他のお問い合わせ</router-link
        >
      </p>
    </div>
    <Footer :styleType="2" :catVisible="2"></Footer>
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
    @include max-screen($sp) {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 10px;
    }
  }
  &__btn {
    margin-bottom: 30px;
    padding-bottom: 30px;
    @include max-screen($sp) {
      margin-bottom: 0;
    }
  }
  &__heading {
    margin-bottom: 70px;
    @include max-screen($sp) {
      margin-bottom: 30px;
    }
  }
}
</style>
