<template>
  <h1 class="contact__heading heading otherpage__heading">
    フロント構築のお問い合わせ
  </h1>

  <Form id="form" @submit="onSubmit" name="frontform" ref="frontform">
    <p class="contact__note contact__note--left">
      <span class="em">*</span>は必須項目です。<br />
    </p>
    <ul class="contact__form contact__form--jobs">
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          貴社名
        </p>
        <div class="contact__select-detail">
          <Field
            name="companyName"
            type="text"
            rules="required"
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
          <span class="em">*</span>ご希望納品日
        </p>
        <div class="contact__select-detail">
          <Field
            name="deadDate"
            type="text"
            rules="required"
            v-model="inputData.deadDate"
          />
          <ErrorMessage name="deadDate" class="error" />
        </div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl"><span class="em">*</span>ご予算</p>
        <div class="contact__select-detail">
          <Field
            name="budget"
            type="text"
            rules="required"
            v-model="inputData.budget"
          />
          <ErrorMessage name="budget" class="error" />
        </div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          詳細
        </p>
        <div class="contact__select-detail">
          <Field
            as="textarea"
            cols="30"
            row="30"
            name="detailtext"
            rules="required"
            maxlength="500"
            placeholder="500文字まで入力できます。"
            v-model="inputData.detailtext"
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
      mailAddress: "メールアドレス",
      clientName: "お名前",
      deadDate: "ご希望納品日",
      budget: "ご予算",
      detailtext: "詳細",
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
        deadDate: "",
        budget: "",
        detailtext: "",
      },
    };
  },
  mounted() {
    window.addEventListener("beforeunload", this.beforeunload, false);
    this.inputData.companyName = this.companyName;
    this.inputData.clientName = this.clientName;
    this.inputData.mailAddress = this.mailAddress;
    this.inputData.deadDate = this.deadDate;
    this.inputData.budget = this.budget;
    this.inputData.detailtext = this.detailtext;
  },
  unmounted() {
    window.removeEventListener("beforeunload", this.beforeunload, false);
  },
  computed: {
    companyName() {
      return this.$store.state.inputData.frontForm.companyName || "";
    },
    clientName() {
      return this.$store.state.inputData.frontForm.clientName || "";
    },
    mailAddress() {
      return this.$store.state.inputData.frontForm.mailAddress || "";
    },
    deadDate() {
      return this.$store.state.inputData.frontForm.deadDate || "";
    },
    budget() {
      return this.$store.state.inputData.frontForm.budget || "";
    },
    term() {
      return this.$store.state.inputData.frontForm.term || "";
    },
    detailtext() {
      return this.$store.state.inputData.frontForm.detailtext || "";
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
      this.$refs.frontform.validate().then((val) => {
        if (val.valid == false) {
          this.isError = true;
        } else {
          this.isError = false;
          this.setStore();
        }
      });
    },
    setStore() {
      const storeInputData = this.$store.state.inputData.frontForm;
      storeInputData.companyName = this.inputData.companyName;
      storeInputData.clientName = this.inputData.clientName;
      storeInputData.mailAddress = this.inputData.mailAddress;
      storeInputData.deadDate = this.inputData.deadDate;
      storeInputData.budget = this.inputData.budget;
      storeInputData.term = this.inputData.term;
      storeInputData.detailtext = this.inputData.detailtext;
      window.removeEventListener("beforeunload", this.beforeunload, false);
      this.$router.push({ path: "/frontcontact/frontconfirm/" });
    },
  },
};
</script>

<style lang="scss">
.contact {
}
</style>
