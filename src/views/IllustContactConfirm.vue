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
        <p class="contact__form-li-ttl"><span class="em">*</span>使用媒体</p>
        <div class="contact__select-detail">{{ media }}</div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>競合他社との<br />取引
        </p>
        <div class="contact__select-detail">{{ illustUseYesNo }}</div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl"><span class="em">*</span>ご予算</p>
        <div class="contact__select-detail">{{ budget }}</div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl"><span class="em">*</span>使用期間</p>
        <div class="contact__select-detail">{{ term }}</div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          メッセージ
        </p>
        <div class="contact__select-detail">{{ message }}</div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          イラストご依頼時の注意点
        </p>
        <div class="contact__select-detail">{{ attentionCheck }}</div>
      </li>
    </ul>
    <div class="contact__form-btn">
      <a href="#" @click="returnPage" class="return"> 戻る </a>
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
    if (this.$store.state.inputData.illustForm.companyName == "") {
      this.$router.push({
        path: "/illcontact/illcontactwrite/",
        hash: "#form",
      });
      window.removeEventListener("beforeunload", this.beforeunload, false);
    }
  },
  computed: {
    companyName() {
      return this.$store.state.inputData.illustForm.companyName;
    },
    clientName() {
      return this.$store.state.inputData.illustForm.clientName;
    },
    mailAddress() {
      return this.$store.state.inputData.illustForm.mailAddress;
    },
    deadDate() {
      return this.$store.state.inputData.illustForm.deadDate;
    },
    media() {
      return this.$store.state.inputData.illustForm.media;
    },
    illustUseYesNo() {
      return this.$store.state.inputData.illustForm.illustUseYesNo == "ok"
        ? "禁じない"
        : "禁じる";
    },
    budget() {
      return this.$store.state.inputData.illustForm.budget;
    },
    term() {
      return this.$store.state.inputData.illustForm.term;
    },
    message() {
      return this.$store.state.inputData.illustForm.message;
    },
    attentionCheck() {
      return this.$store.state.inputData.illustForm.attentionCheck == true
        ? "確認しました"
        : "";
    },
  },
  methods: {
    beforeunload(e) {
      var confirmMessage = "内容が消去されますがよろしいですか？";
      e.returnValue = confirmMessage;
      return confirmMessage;
    },
    sendMail(e) {
      e.preventDefault();
      const sendUrl = "https://atelier-ameni.com/illust_mail_send.php";

      let params = new URLSearchParams();
      params.append("companyName", this.companyName);
      params.append("clientName", this.clientName);
      params.append("mailAddress", this.mailAddress);
      params.append("deadDate", this.deadDate);
      params.append("media", this.media);
      params.append("illustUseYesNo", this.illustUseYesNo);
      params.append("budget", this.budget);
      params.append("term", this.term);
      params.append("message", this.message);
      params.append("attentionCheck", this.attentionCheck);
      const _this = this;

      axios
        .post(sendUrl, params)
        .then((response) => {
          if (response) {
            this.$store.state.inputData.illustForm.companyName = "";
            this.$store.state.inputData.illustForm.clientName = "";
            this.$store.state.inputData.illustForm.mailAddress = "";
            this.$store.state.inputData.illustForm.deadDate = "";
            this.$store.state.inputData.illustForm.media = "";
            this.$store.state.inputData.illustForm.illustUseYesNo = "";
            this.$store.state.inputData.illustForm.budget = "";
            this.$store.state.inputData.illustForm.term = "";
            this.$store.state.inputData.illustForm.message = "";
            this.$store.state.inputData.illustForm.attentionCheck = false;
            window.removeEventListener(
              "beforeunload",
              _this.beforeunload,
              false
            );
            this.$router.push({ path: "/illcontact/contactdone/" });
          } else {
            alert(
              "送信できませんでした。\n大変申し訳ございませんがinfo@atelier-ameni.comまで直接メールをお願いします。"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          window.removeEventListener("beforeunload", this.beforeunload, false);
          alert(
            "送信できませんでした。\n大変申し訳ございませんがinfo@atelier-ameni.comまで直接メールをお願いします。"
          );
        });
    },
    returnPage(e) {
      e.preventDefault();
      //window.removeEventListener('beforeunload', this.beforeunload, false);
      this.$router.push({
        path: "/illcontact/illcontactwrite/",
        hash: "#form",
      });
    },
  },
};
</script>

<style lang="scss">
.contact {
}
</style>
