<template>
  <section class="illust section">
    <div class="section__inner">
      <h2 class="illust__heading heading">ILLUST</h2>
      <div class="illust__text text">
        これまではフロントエンドエンジニアとして勤務する傍ら、フリーイラスト素材の運営や、ストックイラストの投稿を行ってきました。<br />
        2019年より、フリーランスとしてクライアントワークのお仕事をさせていただいております。
      </div>
      <p class="illust__lead"><span>ILLUST TYPE</span></p>
      <ul class="illust__lists bottom-line">
        <li class="illust__list">
          <img src="../../assets/img/common/ill_type/1.png" alt="typeA" />
          <p class="illust__list-ti">typeA</p>
        </li>
        <li class="illust__list">
          <img src="../../assets/img/common/ill_type/2.png" alt="typeB" />
          <p class="illust__list-ti">typeB</p>
        </li>
        <li class="illust__list">
          <img
            src="../../assets/img/common/ill_type/3.png"
            alt="stock illust"
          />
          <p class="illust__list-ti">stock illust</p>
        </li>
        <li class="illust__list">
          <img src="../../assets/img/common/ill_type/4.png" alt="others" />
          <p class="illust__list-ti">others</p>
        </li>
      </ul>

      <p class="section__morelink morelink">
        <router-link to="/illust">MORE</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Illust",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.illust {
  &.section {
    display: block;
    min-height: auto;
    justify-content: inherit;
    padding-top: 150px;
    padding-bottom: 140px;
    @include max-screen($sp) {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }
  .section__inner {
    height: auto;
  }
  &__text {
    line-height: 28px;
    margin-bottom: 60px;
  }
  &__lead {
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    letter-spacing: 3px;
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
    > span {
      display: inline-block;
      padding-bottom: 5px;
      border-bottom: 7px solid #fef3ec;
    }
  }
  &__lists {
    display: flex;
    width: 100%;
    overflow: hidden;
    padding-top: 25px;
    @include max-screen($sp) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &__list {
    width: 200px;
    padding: 0 9px;
    box-sizing: border-box;
    @include max-screen($sp) {
      margin-bottom: 20px;
    }
    > img {
      width: 100%;
      margin-bottom: 5px;
    }
  }
  &__list-ti {
    font-size: 18px;
    text-align: center;
    padding: 5px 0;
    color: #af9d9d;
    letter-spacing: 1px;
    position: relative;
    padding-bottom: 10px;
    &:after {
      content: "";
      height: 4px;
      background-color: #fef3ec;
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 50px;
      margin-left: -25px;
    }
  }
}
</style>
