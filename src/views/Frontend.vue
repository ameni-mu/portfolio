<template>
  <div class="front otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
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
          <a href="#" @click="toFrontWorks">
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
            <p class="front__skill-ttl">できること</p>
            <p class="front__skill-detail">マークアップ / JS <br /></p>
          </li>
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
              BEM,RSCSS,SMACSS(プロジェクトに合わせてカスタマイズ)<br />
              <span class="em">*ページ数に合わせて使ったり使わなかったり</span>
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
        <h2 class="front__secondary-heading">勉強中、今後勉強予定</h2>
        <p class="front__text">Vue Nuxt / Laravel / Jest</p>
      </div>
    </div>

    <div class="authentication-block" v-if="isAuthentication"></div>
    <div class="authentication-block__inner" v-if="isAuthentication">
      <p class="authentication-block__lead">ID/PASSを入力ください</p>
      <div class="authentication-block__block">
        <label for="id" class="label">ID</label>
        <div class="input-wrap">
          <input type="text" name="id" id="id" v-model="fwid" />
        </div>
      </div>
      <div class="authentication-block__block">
        <label for="pass" class="label">PASS</label>
        <div class="input-wrap">
          <input type="password" name="pass" id="pass" v-model="fwpass" />
        </div>
      </div>
      <p class="authentication-block__note">
        ＊大変申し訳ございませんが、簡易的なものなのでリロードすると認証が切れてしまいます。
      </p>
      <div class="btn btn--red">
        <a href="#" @click="returnPage" class="return">戻る</a>
        <a href="#" @click="authenticate">OK</a>
      </div>
    </div>

    <Footer :styleType="2"></Footer>
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
import AmeniNav from "@/components/AmeniNav";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  mixins: [setMetaDesc],
  data() {
    return {
      isAuthentication: false,
      fwid: "",
      fwpass: "",
    };
  },
  components: {
    AmeniNav,
    Footer,
  },
  methods: {
    toFrontWorks(e) {
      e.preventDefault();
      this.isAuthentication = true;
    },
    authenticate(e) {
      e.preventDefault();
      const sendUrl = "https://atelier-ameni.com/access.php";
      let params = new URLSearchParams();
      params.append("id", this.fwid);
      params.append("pass", this.fwpass);
      const _this = this;

      axios
        .post(sendUrl, params)
        .then((response) => {
          if (response) {
            if (response.data == "error") {
              alert(
                "認証に失敗しました。\n必要であればお問い合わせページからお問い合わせください。"
              );
              _this.$store.state.isAuthenticated = false;
              _this.isAuthentication = false;
            } else {
              _this.$store.state.isAuthenticated = true;
              _this.$router.push({ path: "/frontworks/" });
            }
          } else {
            alert(
              "認証に失敗しました。\n必要であればお問い合わせページからお問い合わせください。"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          alert(
            "認証に失敗しました。\n必要であればお問い合わせページからお問い合わせください。"
          );
        });
    },
    returnPage(e) {
      e.preventDefault();
      this.isAuthentication = false;
    },
  },
};
</script>

<style scoped lang="scss">
.front {
  position: relative;
  .nav {
    margin-top: 30px;
  }
  &__lead {
    margin-bottom: 40px;
    line-height: 28px;
    font-size: 16px;
    font-family: "Noto Sans JP", "Yu Gothic Medium", "游ゴシック Medium",
      YuGothic, "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro",
      "メイリオ", Meiryo, sans-serif;
    @include max-screen($sp) {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
  &__block {
    margin-bottom: 80px;
    font-family: "Noto Sans JP", "Yu Gothic Medium", "游ゴシック Medium",
      YuGothic, "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro",
      "メイリオ", Meiryo, sans-serif;
    @include max-screen($sp) {
      margin-bottom: 40px;
      font-size: 14px;
    }
  }
  &__link {
    width: 100%;
    display: block;
    height: 40px;
    margin-bottom: 70px;
    font-family: "Noto Sans JP", "Yu Gothic Medium", "游ゴシック Medium",
      YuGothic, "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro",
      "メイリオ", Meiryo, sans-serif;
    @include max-screen($sp) {
      margin-bottom: 30px;
    }
    li {
      float: left;
      padding-left: 30px;
      @include max-screen($sp) {
        padding-left: 15px;
      }
      &:first-child {
        padding-left: 0;
      }
    }
    span {
      font-size: 16px;
      display: inline-block;
      padding-left: 5px;
      letter-spacing: 1px;
      @include max-screen($sp) {
        font-size: 14px;
      }
    }
    a {
      color: #666666;
      font-size: 20px;
      @include max-screen($sp) {
        font-size: 14px;
      }
    }
  }
  &__secondary-heading {
    font-size: 22px;
    padding-left: 20px;
    position: relative;
    margin-bottom: 20px;
    @include max-screen($sp) {
      font-size: 18px;
      padding-left: 15px;
      margin-bottom: 20px;
    }
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
    @include max-screen($sp) {
      font-size: 14px;
      line-height: 22px;
    }
    > li {
      padding-left: 15px;
      position: relative;
      margin-bottom: 3px;
      @include max-screen($sp) {
        margin-bottom: 0;
        padding-left: 8px;
      }
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
        @include max-screen($sp) {
          top: 10px;
        }
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
      @include max-screen($tablet) {
        width: 100%;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  &__skill-ttl {
    width: 200px;
    padding: 20px;
    box-sizing: border-box;
    @include max-screen($sp) {
      padding: 7px 10px;
      line-height: 22px;
    }
  }
  &__skill-detail {
    width: 600px;
    border-left: 2px solid #f2f0ef;
    padding: 20px 30px 20px 20px;
    box-sizing: border-box;
    @include max-screen($sp) {
      padding: 7px 15px;
      line-height: 22px;
    }
    .em {
      font-size: 14px;
      line-height: 20px;
      display: inline-block;
      @include max-screen($sp) {
        font-size: 12px;
      }
    }
  }
  .authentication-block {
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    &__inner {
      left: 50%;
      margin-left: -200px;
      top: 100px;
      border: 5px solid #f2f0ef;
      box-sizing: border-box;
      background-color: #fff;
      width: 400px;
      padding: 30px;
      text-align: center;
      position: fixed;
      z-index: 9999;
      @include max-screen($sp) {
        width: 94%;
        left: 3%;
        margin-left: auto;
      }
      input[type="text"],
      input[type="password"] {
        display: inline-block;
        margin-left: 15px;
        border: 1px solid #999;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        width: 150px;
        padding: 0 10px;
        outline: none;
        @include max-screen($sp) {
          margin-left: 10px;
        }
      }
      label {
        width: 30%;
        text-align: right;
        height: 30px;
        line-height: 30px;
      }
      .btn {
        text-align: center;
        padding-top: 15px;
        > .return {
          background-color: #999999;
          padding: 14px 25px 14px 25px;
          margin-right: 15px;
          border-color: #999999;
          @include max-screen($sp) {
            padding: 9px 20px 9px 20px;
          }
          &:after {
            display: none;
          }
          &:hover {
            color: #ffffff;
          }
        }
      }
      .input-wrap {
        width: 70%;
        text-align: left;
      }
    }
    &__lead {
      margin-bottom: 20px;
    }
    &__block {
      margin-top: 15px;
      display: flex;
      @include max-screen($sp) {
        margin-top: 5px;
      }
    }
    &__note {
      color: #e08c69;
      font-size: 14px;
      line-height: 20px;
      padding-top: 20px;
    }
  }
}
</style>
