<template>
  <form action="mail_send.php" method="post">
    <h2 class="contact__secondary-heading">
      <span>お問い合わせ内容の確認</span>
    </h2>
    <ul class="contact__form contact__form--jobs">
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">企業名</p>
        <div class="contact__select-detail">{{ companyName }}</div>
      </li>
      <li class="contact__form-li" v-if="clientName">
        <p class="contact__form-li-ttl">お名前</p>
        <div class="contact__select-detail">{{ clientName }}</div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>メールアドレス
        </p>
        <div class="contact__select-detail">{{ mailAddress }}</div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          メッセージ
        </p>
        <div class="contact__select-detail">{{ message }}</div>
      </li>
    </ul>
    <div class="contact__form-btn">
      <a href="#" class="return" @click="returnPage"> 戻る </a>
      <a href="#" @click="sendMail" class="send">送信する</a>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  mounted() {
    window.addEventListener("beforeunload", this.beforeunload, false);
    //確認ページでストアに内容が保存されていなかったら記入ページに遷移
    if (this.$store.state.inputData.otherForm.mailAddress == "") {
      this.$router.push({ path: "/othercontact/othercontactwrite/" });
      window.removeEventListener("beforeunload", this.beforeunload, false);
    }
  },
  computed: {
    companyName() {
      return this.$store.state.inputData.otherForm.companyName;
    },
    clientName() {
      return this.$store.state.inputData.otherForm.clientName;
    },
    mailAddress() {
      return this.$store.state.inputData.otherForm.mailAddress;
    },
    message() {
      return this.$store.state.inputData.otherForm.message;
    },
  },
  unmounted() {
    window.removeEventListener("beforeunload", this.beforeunload, false);
  },
  methods: {
    beforeunload(e) {
      console.log("beforeunload");
      var confirmMessage = "内容が消去されますがよろしいですか？";
      e.returnValue = confirmMessage;
      return confirmMessage;
    },
    sendMail(e) {
      e.preventDefault();
      const sendUrl = "https://atelier-ameni.com/other_mail_send.php";

      let params = new URLSearchParams();
      params.append("companyName", this.companyName);
      params.append("clientName", this.clientName);
      params.append("mailAddress", this.mailAddress);
      params.append("message", this.message);

      axios
        .post(sendUrl, params)
        .then((response) => {
          if (response) {
            window.removeEventListener(
              "beforeunload",
              this.beforeunload,
              false
            );
            this.$router.push({ path: "/othercontact/contactdone/" });
          } else {
            alert(
              "送信できませんでした。\n大変申し訳ございませんがinfo@atelier-ameni.comまで直接メールをお願いします。"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          alert(
            "送信できませんでした。\n大変申し訳ございませんがinfo@atelier-ameni.comまで直接メールをお願いします。"
          );
        });
    },
    returnPage() {
      window.removeEventListener("beforeunload", this.beforeunload, false);
      this.$router.push({ path: "/othercontact/othercontactwrite/" });
    },
  },
};
</script>

<style lang="scss">
.contact {
}
</style>
