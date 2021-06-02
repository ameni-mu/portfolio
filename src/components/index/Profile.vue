<template>
  <section class="prof section">
    <div class="section__inner">
      <h2 class="prof__heading heading">PROFILE</h2>
      <p class="prof__name">あめに</p>
      <p class="prof__name-title">フロントエンドエンジニア、イラストレーター</p>
      <div class="prof__text text">
        <p class="prof__lead">新潟県出身 神奈川県在住。</p>
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
  @include max-screen($sp) {
    padding-top: 100px;
    padding-bottom: 80px;
    height: auto;
    min-height: auto;
  }
  &__heading {
    margin-bottom: 60px;
  }
  &__name {
    font-size: 22px;
    position: relative;
    height: 30px;
    padding-left: 20px;
    padding-top: 10px;
    margin-bottom: 5px;
    &:before {
      content: "";
      width: 8px;
      background-color: #f2f0ef;
      border-radius: 1px;
      position: absolute;
      left: 0;
      top: 0;
      height: 65px;
    }
  }
  &__name-title {
    font-size: 14px;
    margin-bottom: 40px;
    padding-left: 20px;
  }
  &__text {
    > p {
      line-height: 26px;
      font-size: 16px;
    }
  }
  &__lead {
    margin-bottom: 15px;
  }
  &__lists {
    > li {
      margin-bottom: 13px;
      position: relative;
      padding-left: 18px;
      line-height: 24px;
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
