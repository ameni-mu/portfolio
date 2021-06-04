<template>
  <form action="mail_send.php" method="post">
    <h2 class="contact__secondary-heading">
      <span>お問い合わせ内容の確認</span>
    </h2>
    <ul class="contact__form contact__form--jobs">
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          企業名
        </p>
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
          <span class="em">*</span>ご希望納品日
        </p>
        <div class="contact__select-detail">{{ deadDate }}</div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl"><span class="em">*</span>ご予算</p>
        <div class="contact__select-detail">{{ budget }}</div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          詳細
        </p>
        <div class="contact__select-detail">{{ detailtext }}</div>
      </li>
    </ul>
    <div class="contact__form-btn">
      <a @click="returnPage" class="return"> 戻る </a>
      <a href="#" @click="sendMail" class="send">送信する</a>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  computed: {
    companyName() {
      return this.$store.state.inputData.frontForm.companyName;
    },
    clientName() {
      return this.$store.state.inputData.frontForm.clientName;
    },
    mailAddress() {
      return this.$store.state.inputData.frontForm.mailAddress;
    },
    deadDate() {
      return this.$store.state.inputData.frontForm.deadDate;
    },
    budget() {
      return this.$store.state.inputData.frontForm.budget;
    },
    detailtext() {
      return this.$store.state.inputData.frontForm.detailtext;
    },
  },
  mounted() {
    window.addEventListener("beforeunload", this.beforeunload, false);

    //確認ページでストアに内容が保存されていなかったら記入ページに遷移
    if (this.$store.state.inputData.frontForm.companyName == "") {
      this.$router.push({ path: "/frontcontact/frontcontactwrite/" });
      window.removeEventListener("beforeunload", this.beforeunload, false);
    }
  },
  unmounted() {
    window.removeEventListener("beforeunload", this.beforeunload, false);
  },
  methods: {
    beforeunload(e) {
      var confirmMessage = "内容が消去されますがよろしいですか？";
      e.returnValue = confirmMessage;
      return confirmMessage;
    },
    sendMail(e) {
      e.preventDefault();
      const sendUrl = "https://atelier-ameni.com/front_mail_send.php";

      let params = new URLSearchParams();
      params.append("companyName", this.companyName);
      params.append("clientName", this.clientName);
      params.append("mailAddress", this.mailAddress);
      params.append("deadDate", this.deadDate);
      params.append("budget", this.budget);
      params.append("detailtext", this.detailtext);
      const _this = this;

      axios
        .post(sendUrl, params)
        .then((response) => {
          if (response) {
            window.removeEventListener(
              "beforeunload",
              _this.beforeunload,
              false
            );
            this.$store.state.inputData.frontForm.companyName = "";
            this.$store.state.inputData.frontForm.clientName = "";
            this.$store.state.inputData.frontForm.mailAddress = "";
            this.$store.state.inputData.frontForm.deadDate = "";
            this.$store.state.inputData.frontForm.budget = "";
            this.$store.state.inputData.frontForm.detailtext = "";
            this.$router.push({ path: "/frontcontact/contactdone/" });
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
          window.removeEventListener("beforeunload", this.beforeunload, false);
        });
    },
    returnPage() {
      window.removeEventListener("beforeunload", this.beforeunload, false);
      this.$router.push({ path: "/frontcontact/frontcontactwrite/" });
    },
  },
};
</script>

<style lang="scss">
.contact {
}
</style>
