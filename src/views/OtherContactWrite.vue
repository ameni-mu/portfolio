<template>
  <h1 class="contact__heading heading otherpage__heading">
    その他の<br />お問い合わせ
  </h1>

  <Form id="form" @submit="onSubmit" name="otherForm" ref="otherForm">
    <p class="contact__note contact__note--left">
      <span class="em">*</span>は必須項目です。<br />
    </p>
    <ul class="contact__form contact__form--jobs">
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">貴社名</p>
        <div class="contact__select-detail">
          <Field
            name="companyName"
            type="text"
            v-model="inputData.companyName"
            :value="companyName"
          />
          <ErrorMessage name="companyName" class="error" />
        </div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">お名前</p>
        <div class="contact__select-detail">
          <Field
            name="name"
            type="text"
            maxlength="30"
            v-model="inputData.clientName"
          />
          <ErrorMessage name="name" class="error" />
        </div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>メールアドレス
        </p>
        <div class="contact__select-detail">
          <Field
            name="mailAddress"
            type="text"
            rules="required|email"
            v-model="inputData.mailAddress"
          />
          <ErrorMessage name="mailAddress" class="error" />
        </div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          メッセージ
        </p>
        <div class="contact__select-detail">
          <Field
            as="textarea"
            cols="30"
            row="30"
            name="message"
            rules="required"
            maxlength="500"
            placeholder="500文字まで入力できます。"
            v-model="inputData.message"
          />
          <ErrorMessage name="message" class="error" />
        </div>
      </li>
    </ul>
    <div class="contact__to-confirm">
      <!-- <router-link to="/illcontact/illconfirm/">確認する</router-link> -->
      <p class="contact__bottom-error" v-if="isError">
        入力エラーがあります。<br />
        各入力エリア下部に記載された注意文をご確認ください。
      </p>
      <a href="#" @click="onValidate">確認する</a>
    </div>
  </Form>
</template>

<script>
import { defineRule, configure, Field, Form, ErrorMessage } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import axios from "axios";

defineRule("required", required);
defineRule("email", email);

configure({
  generateMessage: localize("ja", {
    messages: {
      required: "{field}は必須項目です。",
      email: "正しいメールアドレスでご入力ください。",
    },
    names: {
      companyName: "企業名",
      clientName: "お名前",
      mailAddress: "メールアドレス",
      message: "メッセージ",
    },
  }),
});
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      hash: this.$route.hash,
      isError: false,
      inputData: {
        companyName: "",
        clientName: "",
        mailAddress: "",
        message: "",
      },
      isSend: false,
    };
  },
  mounted() {
    window.addEventListener("beforeunload", this.beforeunload, false);
    this.inputData.companyName = this.companyName;
    this.inputData.clientName = this.clientName;
    this.inputData.mailAddress = this.mailAddress;
    this.inputData.message = this.message;
  },
  unmounted() {
    window.removeEventListener("beforeunload", this.beforeunload, false);
  },
  computed: {
    companyName() {
      return this.$store.state.inputData.otherForm.companyName || "";
    },
    clientName() {
      return this.$store.state.inputData.otherForm.clientName || "";
    },
    mailAddress() {
      return this.$store.state.inputData.otherForm.mailAddress || "";
    },
    message() {
      return this.$store.state.inputData.otherForm.message || "";
    },
  },
  methods: {
    beforeunload(e) {
      console.log("beforeunload");
      var confirmMessage = "内容が消去されますがよろしいですか？";
      e.returnValue = confirmMessage;
      return confirmMessage;
    },
    onValidate(e) {
      e.preventDefault();
      this.$refs.otherForm.validate().then((val) => {
        if (val.valid == false) {
          this.isError = true;
        } else {
          this.isError = false;
          this.setStore();
        }
      });
    },
    setStore() {
      if (this.isSend) return;
      this.isSend = true;
      const url = "https://atelier-ameni.com/token.php";
      axios
        .get(url)
        .then((response) => {
          if (response) {
            const storeInputData = this.$store.state.inputData.otherForm;
            storeInputData.companyName = this.inputData.companyName;
            storeInputData.clientName = this.inputData.clientName;
            storeInputData.mailAddress = this.inputData.mailAddress;
            storeInputData.message = this.inputData.message;
            this.$store.state.token = response.data;
            this.$router.push({ path: "/othercontact/otherconfirm/" });
          } else {
            alert(
              "メールを送信出来ません。\n大変申し訳ございませんがinfo@atelier-ameni.comまで直接メールをお願いします。"
            );
            this.isSend = false;
          }
        })
        .catch((error) => {
          console.log(error);
          alert(
            "メールを送信出来ません。\n大変申し訳ございませんがinfo@atelier-ameni.comまで直接メールをお願いします。"
          );
          this.isSend = false;
        });
    },
  },
};
</script>

<style lang="scss">
.contact {
}
</style>
