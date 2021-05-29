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
      <router-link to="/illcontact/illcontactwrite/#form" class="return">
        戻る
      </router-link>
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
    sendMail(e) {
      e.preventDefault();
      const sendUrl = "https://atelier-ameni.com/illust_mail_send2.php";

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

      axios
        .post(sendUrl, params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert('送信できませんでした。\n大変申し訳ございませんがinfo@atelier-ameni.comまで直接メールをお願いします。')
        });
    },
  },
};
</script>

<style lang="scss">
.contact {
}
</style>
