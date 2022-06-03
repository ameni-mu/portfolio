<template>
  <h1 class="contact__heading heading otherpage__heading">
    フロント構築の<br />お問い合わせ
  </h1>
  <div class="contact__panli">
    <p class="contact__panttl">お問い合わせ</p>
    <ul class="contact__panlink">
      <li>
        <router-link
          to="/illcontact/illcontactwrite"
          active-class="current"
          exact
          >イラスト</router-link
        >
      </li>
      <li>
        <router-link
          to="/frontcontact/frontcontactwrite"
          active-class="current"
          exact
          >フロント構築</router-link
        >
      </li>
      <li>
        <router-link
          to="/othercontact/othercontactwrite"
          active-class="current"
          exact
          >その他</router-link
        >
      </li>
    </ul>
  </div>
  <ul class="contact__attention front">
    <li>
      お問い合わせいただき、必要な情報をいただきましたら概算見積書を作成させていただきます。
    </li>
    <li>
      デザイン、仕様書（あれば）を拝見した後に見積書を作成、工数をお伝えさせていただきます。
    </li>
    <li>
      見積書をお渡しした後に追加対応が発生した場合は内容の大きさによりますが追加料金をいただきます。<br />
      また、その際に工数も改めて算出しますのでご了承ください。
    </li>
    <li>
      工数は内容によりますが3、4日のバッファを含めて算出させていただきます。
    </li>
  </ul>
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
          <!-- <Field
            name="budget"
            type="text"
            rules="required"
            v-model="inputData.budget"
          /> -->
          <div class="contact__select-wrap">
            <Field
              name="budget"
              type="radio"
              rules="required"
              id="budget1"
              value="3〜5万円"
              v-model="inputData.budget"
            />
            <label for="budget1"><span>3〜5万円</span></label>
          </div>
          <div class="contact__select-wrap">
            <Field
              name="budget"
              type="radio"
              rules="required"
              id="budget2"
              value="5〜10万円"
              v-model="inputData.budget"
            />
            <label for="budget2"><span>5〜10万円</span></label>
          </div>
          <div class="contact__select-wrap">
            <Field
              name="budget"
              type="radio"
              rules="required"
              id="budget3"
              value="10〜30万円"
              v-model="inputData.budget"
            />
            <label for="budget3"><span>10〜30万円</span></label>
          </div>
          <div class="contact__select-wrap">
            <Field
              name="budget"
              type="radio"
              rules="required"
              id="budget4"
              value="30〜50万円"
              v-model="inputData.budget"
            />
            <label for="budget4"><span>30〜50万円</span></label>
          </div>
          <div class="contact__select-wrap">
            <Field
              name="budget"
              type="radio"
              rules="required"
              id="budget5"
              value="50万円以上"
              v-model="inputData.budget"
            />
            <label for="budget5"><span>50万円以上</span></label>
          </div>
          <div class="contact__select-wrap">
            <Field
              name="budget"
              type="radio"
              rules="required"
              id="budget6"
              value="その他"
              v-model="inputData.budget"
            />
            <label for="budget6"><span>その他</span></label>
          </div>
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
      isSend: false,
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
      if (this.isSend) return;
      this.isSend = true;
      const url = "https://atelier-ameni.com/token.php";

      axios
        .get(url)
        .then((response) => {
          if (response) {
            const storeInputData = this.$store.state.inputData.frontForm;
            storeInputData.companyName = this.inputData.companyName;
            storeInputData.clientName = this.inputData.clientName;
            storeInputData.mailAddress = this.inputData.mailAddress;
            storeInputData.deadDate = this.inputData.deadDate;
            storeInputData.budget = this.inputData.budget;
            storeInputData.term = this.inputData.term;
            storeInputData.detailtext = this.inputData.detailtext;
            this.$store.state.token = response.data;
            this.$router.push({ path: "/frontcontact/frontconfirm/" });
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
