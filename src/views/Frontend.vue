<template>
  <div class="front otherpage">
    <Navigation :isOtherPage="true"></Navigation>
    <div class="front__inner otherpage__inner">
      <h1 class="front__heading heading otherpage__heading">Front-end</h1>
      <p class="front__lead">
        jsを使用したフロントエンドエンジニア歴は7年ほどになります。
      </p>
      <ul class="front__link">
        <li>
          <a href="https://github.com/ameni-mu" target="_blank">
            <i class="fab fa-github"></i><span>github ></span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="fas fa-lock"></i><span>制作実績 ></span>
          </a>
        </li>
      </ul>

      <div class="front__block">
        <h2 class="front__secondary-heading">制作環境</h2>
        <ul class="front__text">
          <li>Main => MacBook / macOS Big Sur 11.3.1</li>
          <li>Sub => Windows7</li>
        </ul>
      </div>

      <div class="front__block">
        <h2 class="front__secondary-heading">スキル</h2>
        <ul class="front__list--table">
          <li>
            <p class="front__skill-ttl">フレームワーク</p>
            <p class="front__skill-detail">Vue,Vuex</p>
          </li>
          <li>
            <p class="front__skill-ttl">バージョン管理</p>
            <p class="front__skill-detail">git,TortoiseSVN</p>
          </li>
          <li>
            <p class="front__skill-ttl">js</p>
            <p class="front__skill-detail">es5,6 / webpack / jquery</p>
          </li>
          <li>
            <p class="front__skill-ttl">css設計</p>
            <p class="front__skill-detail">
              BEM,RSCSS,SMACSS(プロジェクトに合わせてカスタマイズ)
            </p>
          </li>
          <li>
            <p class="front__skill-ttl">レスポンシブの手法</p>
            <ul class="front__skill-detail front__text">
              <li>
                PC、tablet、SP、要件に沿ったそれぞれの画面サイズに合わせたデザインを画面に再現する
              </li>
              <li>
                vw単位を使用し、拡縮してもデザインの比率を保ったまま画面に再現する
              </li>
            </ul>
          </li>
          <li>
            <p class="front__skill-ttl">自宅での検証環境<br />(実機)</p>
            <p class="front__skill-detail">
              Macbook / windows7 / ipad Pro / Android8(ASUS zenphone)
            </p>
          </li>
          <li>
            <p class="front__skill-ttl">CMS</p>
            <p class="front__skill-detail">MovableType / Wordpress</p>
          </li>
          <li>
            <p class="front__skill-ttl">デザインツール</p>
            <p class="front__skill-detail">
              Adobe photoshop / Adobe Illustrator / Sketch<br />
              <span class="em">
                *上記以外のツールで作成されたデザインファイルをお渡し予定の場合はご連絡ください。可能な限り、事前に環境を整えさせていただきます。
              </span>
            </p>
          </li>
          <li>
            <p class="front__skill-ttl">コードエディタ</p>
            <p class="front__skill-detail">Visual Studio</p>
          </li>
        </ul>
      </div>
      <div class="front__block">
        <h2 class="front__secondary-heading">勉強中</h2>
        <p class="front__text">Vue Nuxt</p>
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
};
</script>

<style scoped lang="scss">
.front {
  .nav {
    margin-top: 30px;
  }
  &__lead {
    margin-bottom: 40px;
  }
  &__block {
    margin-bottom: 80px;
  }
  &__link {
    width: 100%;
    display: block;
    height: 40px;
    margin-bottom: 70px;
    li {
      float: left;
      padding-left: 30px;
      &:first-child {
        padding-left: 0;
      }
    }
    span {
      font-size: 16px;
      display: inline-block;
      padding-left: 5px;
      letter-spacing: 1px;
    }
    a {
      color: #666666;
      font-size: 20px;
    }
  }
  &__secondary-heading {
    font-size: 22px;
    padding-left: 20px;
    position: relative;
    margin-bottom: 20px;
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
  &__text {
    font-size: 16px;
    line-height: 28px;
    > li {
      padding-left: 15px;
      position: relative;
      margin-bottom: 3px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 13px;
        background-color: #c3c0be;
        width: 4px;
        height: 4px;
        border-radius: 4px;
        display: block;
      }
    }
  }
  &__list--table {
    line-height: 28px;
    border: 2px solid #f2f0ef;
    > li {
      display: flex;
      width: 800px;
      border-bottom: 2px solid #f2f0ef;
      box-sizing: border-box;
      &:last-child {
        border-bottom: none;
      }
    }
  }
  &__skill-ttl {
    width: 200px;
    padding: 20px;
    box-sizing: border-box;
  }
  &__skill-detail {
    width: 600px;
    border-left: 2px solid #f2f0ef;
    padding: 20px 30px 20px 20px;
    box-sizing: border-box;
    .em {
      font-size: 14px;
      line-height: 20px;
      display: inline-block;
    }
  }
}
</style>
