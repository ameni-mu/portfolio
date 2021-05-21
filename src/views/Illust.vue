<template>
  <div class="illust otherpage">
    <Navigation :isOtherPage="true"></Navigation>
    <div class="illust__inner otherpage__inner">
      <h1 class="illust__heading heading otherpage__heading">ILLUST</h1>
      <p class="illust__text">
        2019年より、フリーランスとしてクライアントワークのお仕事をさせていただいております。
      </p>
      <p class="illust__lead"><span>ILLUST TYPE</span></p>
      <ul class="illust__lists">
        <li class="illust__list">
          <a href="#" @click="illTypeScroll($event, '.illust__block-typeA')">
            <img src="../assets/img/common/ill_type/1.png" alt="typeA" />
            <p class="illust__list-ti">typeA</p>
          </a>
        </li>
        <li class="illust__list">
          <a href="#" @click="illTypeScroll($event, '.illust__block-typeB')">
            <img src="../assets/img/common/ill_type/2.png" alt="typeB" />
            <p class="illust__list-ti">typeB</p>
          </a>
        </li>
        <li class="illust__list">
          <a href="#" @click="illTypeScroll($event, '.illust__block-typeSI')">
            <img src="../assets/img/common/ill_type/3.png" alt="stock illust" />
            <p class="illust__list-ti">stock illust</p>
          </a>
        </li>
        <li class="illust__list">
          <a href="#" @click="illTypeScroll($event, '.illust__block-typeOthers')">
            <img src="../assets/img/common/ill_type/4.png" alt="others" />
            <p class="illust__list-ti">others</p>
          </a>
        </li>
      </ul>
      <div class="illust__block-typeA">
        <h2 class="illust__secondary-heading">typeA</h2>
        <p class="illust__text">
          女性向け、ファミリー向けテイスト。<br>
          女性らしさのある雰囲気を持ちつつも全年代に好かれるような、ターゲット層の広いイラストを意識しています。
        </p>
        <div class="illust__slider-wrap">
          スライダーが入るよ
        </div>
      </div>
      <div class="illust__block-typeB">
        <h2 class="illust__secondary-heading">typeB</h2>
        <p class="illust__text">
          女性向け、ファッションイラスト。<br>
          女性のファッションやヘアメイクなど、美容に関する媒体で使用されることを想定したイラストです。
        </p>
        <div class="illust__slider-wrap">
          スライダーが入るよ
        </div>
      </div>
      <div class="illust__block-typeSI">
        <h2 class="illust__secondary-heading">stock illust</h2>
        <p class="illust__text">
          PixtaやAdobe Stockに登録させていただいているイラストです。<br>
          500点ほど登録させていただいています。<br>
          詳細は各サイトのページをご覧ください。<br>
          <a href="https://creator.pixta.jp/@prof1485831" target="_blank" class="illust__icon-link icon-link">Pixta</a>
          <a href="https://stock.adobe.com/jp/contributor/208855618/haino" target="_blank" class="illust__icon-link icon-link">Adobe Stock</a><br>
          <span class="sup">*作家名が「はいの」になっています。</span>
        </p>
        <div class="illust__slider-wrap">
          スライダーが入るよ
        </div>
      </div>
      <div class="illust__block-Others">
        <h2 class="illust__secondary-heading">Others</h2>
        <p class="illust__text">
          著書「Girls’ Design Materials」の素材イラストです。<br>
          <a href="https://www.sbcr.jp/product/4797376692/" target="_blank" class="illust__icon-link icon-link">SBクリエイティブ様書籍紹介ページ</a><br>
          <span class="sup">*作家名が「はいの」になっています。</span>
        </p>
        <div class="illust__slider-wrap">
          スライダーが入るよ
        </div>
      </div>
    </div>
    <Footer :styleType="2"></Footer>
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  mixins: [setMetaDesc],
  components: {
    Navigation,
    Footer,
  },
  methods: {
    illTypeScroll(e, className) {
      e.preventDefault();
      //要素取得
      const element = document.querySelector(className);
      //各要素の位置(ページのスクロール位置 + ページ内の要素の位置)
      let blockTypeA_Y = element.offsetTop + window.pageYOffset;
      window.scrollTo({
        top: blockTypeA_Y,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.illust {
  .nav {
    margin-top: 30px;
  }
  &__text {
    line-height: 26px;
    font-size: 16px;
    .sup {
      font-size: 12px;
    }
  }
  &__lead {
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    letter-spacing: 3px;
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
    padding-top: 50px;
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
    margin-bottom: 120px;
    padding-bottom: 60px;
    border-bottom: 1px solid #f2f0ef;
  }
  &__list {
    width: 200px;
    padding: 0 9px;
    box-sizing: border-box;
    img {
      width: 100%;
      margin-bottom: 5px;
      display: inline-block;
    }
    a {
      &:before {
        display: none;
      }
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
  &__secondary-heading {
    font-size: 22px;
    padding-left: 20px;
    position: relative;
    margin-bottom: 20px;
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    letter-spacing: 3px;
    font-size: 24px;
    &:before {
      width: 5px;
      border-radius: 2px;
      background-color: #f1dcd3;
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      content: "";
    }
  }
  &__slider-wrap {
    margin-top: 30px;
    margin-bottom: 100px;
  }
}
</style>
