<template>
  <h1 class="contact__heading heading otherpage__heading">
    その他のお問い合わせ
  </h1>

  <Form id="form" @submit="onSubmit" name="illustForm" ref="illustForm">
    <p class="contact__note contact__note--left">
      <span class="em">*</span>は必須項目です。<br />
    </p>
    <ul class="contact__form contact__form--jobs">
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          企業名
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
        <p class="contact__form-li-ttl"><span class="em">*</span>使用媒体</p>
        <div class="contact__select-detail">
          <span class="contact__example">
            雑誌名、webページ名、動画など、使用する媒体が複数の場合は全てご記入お願いします。
          </span>
          <Field
            name="media"
            type="text"
            rules="required"
            v-model="inputData.media"
          />
          <ErrorMessage name="media" class="error" />
        </div>
      </li>
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>競合他社との<br />取引
        </p>
        <div class="contact__select-detail">
          <span class="contact__example">
            貴社でイラストを使用している期間、競合他社と私あめにの取引を禁じるかどうか
          </span>
          <Field
            name="illustUseYesNo"
            type="radio"
            rules="required"
            id="illustUseOK"
            value="ok"
            v-model="inputData.illustUseYesNo"
          />
          <label for="illustUseOK"><span>禁じない</span></label>
          <Field
            name="illustUseYesNo"
            type="radio"
            rules="required"
            id="illustUseNo"
            value="no"
            v-model="inputData.illustUseYesNo"
          />
          <label for="illustUseNo"><span>禁じる</span></label>
          <br />
          <ErrorMessage name="illustUseYesNo" class="error" />
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
        <p class="contact__form-li-ttl"><span class="em">*</span>使用期間</p>
        <div class="contact__select-detail">
          <span class="contact__example">
            イラスト使用期間をご記入ください。
          </span>
          <Field
            name="term"
            type="text"
            rules="required"
            v-model="inputData.term"
          />
          <ErrorMessage name="term" class="error" />
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
      <li class="contact__form-li">
        <p class="contact__form-li-ttl">
          <span class="em">*</span>
          イラストご依頼時の注意点
        </p>
        <div class="contact__select-detail">
          <span class="contact__example">
            <a href="#" class="icon-link" @click="toPageTop"
              >ページトップの注意点をご確認ください。</a
            >
          </span>
          <input name="attentionCheck" type="checkbox" id="attentionCheck" />
          <label for="attentionCheck">
            <span>確認しました</span>
          </label>
          <br />
          <span class="error" v-if="isAttentionChecked">
            ご依頼時の注意点を確認してから送信してください。
          </span>
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
      deadDate: "ご希望納品日",
      media: "使用媒体",
      budget: "ご予算",
      term: "使用期間",
      message: "メッセージ",
      illustUseYesNo: "競合他社との取引",
      attentionCheck: "ご依頼時の注意点の確認",
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
        media: "",
        illustUseYesNo: "",
        budget: "",
        term: "",
        message: "",
        //attentionCheck: false,
      },
      isAttentionChecked: false,
    };
  },
  mounted() {
    this.$nextTick(function () {
      if (this.hash) {
        const hash = this.hash.replace("#", "");
        const y = document.getElementById(hash).offsetTop - 50;
        document.documentElement.scrollTop = y;
      }
    });
    this.inputData.companyName = this.companyName;
    this.inputData.clientName = this.clientName;
    this.inputData.mailAddress = this.mailAddress;
    this.inputData.deadDate = this.deadDate;
    this.inputData.media = this.media;
    this.inputData.illustUseYesNo = this.illustUseYesNo;
    this.inputData.budget = this.budget;
    this.inputData.term = this.term;
    this.inputData.message = this.message;
    const attention = document.getElementById("attentionCheck");
    attention.checked = this.$store.state.inputData.illustForm.attentionCheck;
  },
  computed: {
    companyName() {
      return this.$store.state.inputData.illustForm.companyName || "";
    },
    clientName() {
      return this.$store.state.inputData.illustForm.clientName || "";
    },
    mailAddress() {
      return this.$store.state.inputData.illustForm.mailAddress || "";
    },
    deadDate() {
      return this.$store.state.inputData.illustForm.deadDate || "";
    },
    media() {
      return this.$store.state.inputData.illustForm.media || "";
    },
    illustUseYesNo() {
      return this.$store.state.inputData.illustForm.illustUseYesNo || "";
    },
    budget() {
      return this.$store.state.inputData.illustForm.budget || "";
    },
    term() {
      return this.$store.state.inputData.illustForm.term || "";
    },
    message() {
      return this.$store.state.inputData.illustForm.message || "";
    },
    // attentionCheck() {
    //   return this.$store.state.inputData.illustForm.attentionCheck;
    // },
  },
  methods: {
    onValidate(e) {
      e.preventDefault();

      const attention = document.getElementById("attentionCheck");
      this.$store.state.inputData.illustForm.attentionCheck = attention.checked;
      if (attention.checked === true) {
        this.isAttentionChecked = false;
      } else {
        this.isAttentionChecked = true;
      }
      this.$refs.illustForm.validate().then((val) => {
        if (val.valid == false || !attention.checked) {
          this.isError = true;
        } else {
          if (attention.checked) {
            this.isError = false;
            this.setStore();
          }
        }
      });
    },
    setStore() {
      const storeInputData = this.$store.state.inputData.illustForm;
      storeInputData.companyName = this.inputData.companyName;
      storeInputData.clientName = this.inputData.clientName;
      storeInputData.mailAddress = this.inputData.mailAddress;
      storeInputData.deadDate = this.inputData.deadDate;
      storeInputData.media = this.inputData.media;
      storeInputData.illustUseYesNo = this.inputData.illustUseYesNo;
      storeInputData.budget = this.inputData.budget;
      storeInputData.term = this.inputData.term;
      storeInputData.message = this.inputData.message;
      this.$router.push({ path: "/illcontact/illconfirm/" });
    },
  },
};
</script>

<style lang="scss">
.contact {
}
</style>
