<template>
  <section class="prof section">
    <div class="section__inner">
      <h2 class="prof__heading heading">PROFILE</h2>
      <p class="prof__name">すがや</p>
      <p class="prof__name-title">フロントエンドエンジニア</p>
      <p class="prof__name">あめに</p>
      <p class="prof__name-title">フロントエンドエンジニア・イラストレーター</p>
      <div class="prof__text text">
        <p class="prof__lead">
          名前が違いますが同一人物です。<br />
          フロント構築は本名の方が良いかと思い「すがや」としています。<br />
          フリーでの活動はイラスト制作が先だったので、名前を変更することが難しく別々の名前になっています。<br />
          お呼びいただく場合はお好きな方でお呼びください。<br />
          <br />
          新潟県出身 神奈川県在住。
        </p>
        <ul class="prof__lists bottom-line">
          <li>2009年〜webデザイナー、コーダーとして会社勤務</li>
          <li>2012年〜フロントエンドエンジニアとして会社勤務</li>
          <li>2019年〜妊娠出産を機に育児との両立を目指してフリーランスへ</li>
        </ul>
      </div>
      <p class="section__morelink morelink">
        <router-link to="/profile">MORE</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.prof {
  position: relative;
  box-sizing: border-box;
  min-height: 700px;
  display: block;
  padding-top: 150px;
  padding-bottom: 150px;
  font-family: "Noto Sans JP", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
    "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro", "メイリオ",
    Meiryo, sans-serif;
  z-index: 10;
  @include max-screen($sp) {
    padding-top: 50px;
    padding-bottom: 40px;
    height: auto;
    min-height: auto;
  }
  &__heading {
    margin-bottom: 60px;
    @include max-screen($sp) {
      margin-bottom: 40px;
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
      height: 23px;
      padding-top: 6px;
    }
    &:before {
      content: "";
      width: 8px;
      background-color: #e9e7e5;
      border-radius: 1px;
      position: absolute;
      left: 0;
      top: 8px;
      height: 55px;
      @include max-screen($sp) {
        top: 0;
      }
    }
  }
  &__name-title {
    font-size: 14px;
    margin-bottom: 40px;
    padding-left: 20px;
    @include max-screen($sp) {
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
  &__text {
    > p {
      line-height: 26px;
      font-size: 16px;
      @include max-screen($sp) {
        font-size: 14px;
      }
    }
  }
  &__lead {
    margin-bottom: 45px;
  }
  &__lists {
    > li {
      margin-bottom: 13px;
      position: relative;
      padding-left: 18px;
      line-height: 24px;
      @include max-screen($sp) {
        line-height: 20px;
      }
      &:before {
        content: "・";
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
