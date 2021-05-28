<template>
  <section class="contact section wave wave--pink">
    <div class="section__inner">
      <h2 class="prof__heading heading">CONTACT</h2>
      <p class="contact__title">
        イラスト制作のご依頼、ご相談はこちらのメールフォームからお問い合わせください。
      </p>
      <p class="contact__btn btn btn--red bottom-line--pink">
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
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact {
  background-color: #f9f2ef;
  &__title {
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 15px;
  }
  &__btn {
    margin-bottom: 30px;
    padding-bottom: 30px;
  }
}
</style>
