<template>
  <div class="otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="otherpage__inner">
      <h1 class="heading otherpage__heading">Privacy Policy</h1>
      <p class="otherpage__text text">
        「アトリエあめに」は、本ウェブサイトのお問い合わせや業務に伴いお預かりした個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
      </p>
      <h2 class="otherpage__ttl">個人情報につきまして</h2>
      <p class="otherpage__text text">
        「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
      </p>
      <h2 class="otherpage__ttl">個人情報の収集方法</h2>
      <p class="otherpage__text text">
        案件のご相談やご依頼時にお問い合わせフォームからご記入いただいた情報や、案件の進行に伴い、必要に合わせて個人情報をお預かりする場合があります。
      </p>
      <h2 class="otherpage__ttl">個人情報の利用目的</h2>
      <p class="otherpage__text text">
        案件の進行上必要なため。案件進行以外を目的としたことには利用いたしません。
      </p>
      <h2 class="otherpage__ttl">個人情報の第三者提供</h2>
      <p class="otherpage__text text">
        業務委託の際など、第三者への情報開示が必要になった場合はご依頼者様ご本人のご了承を得たうえで情報を共有させていただきます。<br />
        ご依頼者様ご本人の同意が無い場合は第三者へ情報を開示することはございません。<br />
        ただし、以下の場合を除かせていただきます。<br />
        <br />
        ・ご依頼者様ご本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合<br />
        ・アトリエあめにの業務の適正な実施に著しい支障を及ぼすおそれがある場合<br />
        ・その他法令に違反することとなる場合
      </p>
      <h2 class="otherpage__ttl">プライバシーポリシーの変更</h2>
      <p class="otherpage__text text">
        本ポリシーの内容は，事前に通知することなく更新することができるものとします。<br />
        変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
      </p>
    </div>
    <Footer :styleType="2"></Footer>
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
.profile {
  font-family: "Noto Sans JP", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
    "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro", "メイリオ",
    Meiryo, sans-serif;
  .nav {
    margin-top: 30px;
  }
  &__title {
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 15px;
  }
  &__btn {
    margin-bottom: 30px;
    padding-bottom: 30px;
  }
  &__heading {
    margin-bottom: 70px;
    @include max-screen($sp) {
      margin-bottom: 40px;
    }
  }
  &__img-wrap {
    padding-left: 120px;
    padding-top: 10px;
    background-image: url("../assets/img/profile/prof.png");
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 80px auto;
    min-height: 100px;
    @include max-screen($sp) {
      padding: 100px 0 0 0;
      background-position: center top;
      position: relative;
    }
    &:before {
      @include max-screen($sp) {
        content: "";
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -50px;
        background-image: url("../assets/img/profile/prof.png");
        background-repeat: no-repeat;
        background-position: left top;
        background-size: 80px auto;
      }
    }
  }
  &__block {
    @include max-screen($sp) {
      padding-bottom: 40px;
      //border-bottom: 1px solid #f2f0ef;
      background-image: url("../assets/img/common/bg_wave_line.svg");
      background-repeat: repeat-x;
      background-position: left bottom;
      background-size: 150px auto;
      margin-bottom: 30px;
    }
  }
  &__name {
    font-size: 22px;
    position: relative;
    height: 30px;
    padding-left: 20px;
    padding-top: 10px;
    margin-bottom: 5px;
    @include max-screen($sp) {
      font-size: 18px;
      padding-left: 15px;
      padding-top: 6px;
      margin-bottom: 0;
    }
    &:before {
      content: "";
      width: 8px;
      background-color: #f2f0ef;
      border-radius: 1px;
      position: absolute;
      left: 0;
      top: 0;
      height: 65px;
      @include max-screen($sp) {
        width: 6px;
        height: 55px;
      }
    }
  }
  &__name-title {
    font-size: 14px;
    margin-bottom: 40px;
    padding-left: 20px;
    @include max-screen($sp) {
      padding-left: 15px;
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
  &__text {
    line-height: 28px;
    font-size: 16px;
    @include max-screen($sp) {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 20px;
    }
  }
  &__secondary-heading {
    margin-top: 160px;
    font-size: 26px;
    //background-image: url("../assets/img/common/fukidashi.png");
    text-align: center;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 250px auto;
    padding-bottom: 20px;
    margin-bottom: 40px;
    position: relative;
    @include max-screen($sp) {
      margin-top: 50px;
      font-size: 20px;
      padding-bottom: 14px;
      margin-bottom: 30px;
    }
    &:after {
      content: "";
      width: 125px;
      height: 6px;
      background-color: #f7ece7;
      position: absolute;
      left: 50%;
      bottom: 0;
      margin-left: -62px;
      @include max-screen($sp) {
        width: 100px;
        margin-left: -50px;
      }
    }
  }
  &__career {
    width: 100%;
    position: relative;
    margin-bottom: 160px;
    @include max-screen($sp) {
      margin-bottom: 0;
    }
    &:before {
      content: "";
      height: 100%;
      width: 4px;
      background-color: #e8ebdc;
      position: absolute;
      top: 5px;
      left: 76px;
      border-radius: 2px;
      @include max-screen($sp) {
        display: none;
      }
    }
    &:after {
      content: "";
      background-image: url("../assets/img/common/arrow_career.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 30px auto;
      width: 40px;
      height: 30px;
      position: absolute;
      bottom: -11px;
      left: 58px;
      @include max-screen($sp) {
        display: none;
      }
    }
  }
  &__career-li {
    font-size: 16px;
    display: flex;
    width: 100%;
    flex-direction: row;
    padding-bottom: 45px;
    @include max-screen($sp) {
      display: block;
      padding-bottom: 25px;
      font-size: 14px;
    }
  }
  &__year {
    letter-spacing: 2px;
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 20px;
    font-weight: bold;
    width: 125px;
    margin: 0;
    color: #83954b;
    @include max-screen($sp) {
      width: 100%;
      margin-bottom: 6px;
      font-weight: bold;
      font-size: 14px;
    }
    > span {
      display: inline-block;
      padding-right: 30px;
      position: relative;
      @include max-screen($sp) {
        background-color: #e8ebdc;
        border-radius: 4px;
        padding: 5px 20px;
      }
      &:after {
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        background-color: #e8ebdc;
        border-radius: 10px;
        left: 70px;
        top: 5px;
        @include max-screen($sp) {
          display: none;
        }
      }
    }
  }
  &__ca-detail {
    width: 675px;
    margin: 0;
    line-height: 28px;
    @include max-screen($sp) {
      width: 100%;
    }
  }
  &__sup {
    font-size: 14px;
    padding: 10px 0;
    line-height: 24px;
    text-align: center;
    margin-top: -20px;
    margin-bottom: 40px;
  }
  &__sche {
    width: 100%;
    position: relative;
    margin-bottom: 50px;
    &:before {
      content: "";
      height: 100%;
      width: 4px;
      background-color: #f8f0d6;
      position: absolute;
      top: 5px;
      left: 76px;
      border-radius: 2px;
      @include max-screen($sp) {
        display: none;
      }
    }
    &:after {
      content: "";
      background-image: url("../assets/img/common/arrow_sche.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 30px auto;
      width: 40px;
      height: 30px;
      position: absolute;
      bottom: -11px;
      left: 58px;
      @include max-screen($sp) {
        display: none;
      }
    }
  }
  &__sche-li {
    font-size: 16px;
    display: flex;
    width: 100%;
    flex-direction: row;
    padding-bottom: 45px;
    line-height: 28px;
    @include max-screen($sp) {
      display: block;
      font-size: 14px;
      padding-bottom: 25px;
    }
    .em {
      color: #b5983c;
      font-size: 20px;
      @include max-screen($sp) {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  &__time {
    letter-spacing: 2px;
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 20px;
    font-weight: 200;
    width: 125px;
    margin: 0;
    color: #b5983c;
    > span {
      display: inline-block;
      padding-right: 30px;
      position: relative;
      @include max-screen($sp) {
        background-color: #fcf7df;
        color: #d6b931;
        border-radius: 4px;
        padding: 0px 20px;
        font-weight: bold;
        font-size: 14px;
        height: auto;
        margin-bottom: 6px;
      }
      &:after {
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        background-color: #f8f0d6;
        border-radius: 10px;
        left: 70px;
        top: 5px;
        @include max-screen($sp) {
          display: none;
        }
      }
    }
    &--work {
      > span {
        &:after {
          width: 24px;
          height: 24px;
          background-color: #f4e9c5;
          left: 65px;
          border-radius: 12px;
        }
      }
    }
  }
  &__height-margin--1 {
    padding-bottom: 120px;
    @include max-screen($sp) {
      padding-bottom: 0;
    }
  }
  &__height-margin--2 {
    padding-bottom: 40px;
    @include max-screen($sp) {
      padding-bottom: 0;
    }
  }
}
</style>
