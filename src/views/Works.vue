<template>
  <div class="works otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="works__inner otherpage__inner">
      <h1 class="works__heading heading otherpage__heading">Works</h1>
      <p class="works__lead">
        制作実績を掲載しています。<br>
        お手数ですがID/PASSを入力しご覧ください。<br>
        <span class="sup">※制作実績の認証ID/PASSはお問い合わせください。</span>
      </p>
      <div class="works__btn-wrap btn">
        <a href="#" @click="toFrontWorks">
          <i class="fas fa-lock"></i><span>front end ></span>
        </a>
        <a href="#" @click="toWebDesign">
          <i class="fas fa-lock"></i><span>web design ></span>
        </a>
      </div>
    </div>

    <WorksModal
      v-if="isModal"
      @onClose="onClose"
      :isMovie="isMovie"
      :imgLength="imgLength"
      :ModaldescText="ModaldescText"
      :dataID="dataID"
      :title="title"
    >
    </WorksModal>

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
  components: {
    AmeniNav,
    Footer,
  },
  data() {
    return {
      isAuthentication: false,
      fwid: "",
      fwpass: "",
      isLinkPageType: 0,
    };
  },
  methods: {
    toFrontWorks(e) {
      e.preventDefault();
      this.isAuthentication = true;
      this.isLinkPageType = 0;
    },
    toWebDesign(e) {
      e.preventDefault();
      this.isAuthentication = true;
      this.isLinkPageType = 1;
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
              if(_this.isLinkPageType === 0) {
                _this.$router.push({ path: "/frontworks/" });
              }else if(_this.isLinkPageType === 1) {
                _this.$router.push({ path: "/webdesign/" });
              }
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

<style lang="scss">
.works {
  &__inner {
    min-height: 600px;
    @include max-screen($sp) {
      min-height: auto;
    }
  }
  .nav {
    margin-top: 30px;
  }
  &__lead {
    margin-bottom: 60px;
    line-height: 30px;
    @include max-screen($sp) {
      margin-bottom: 30px;
    }
    >.sup {
      font-size: 14px;
      line-height: 20px;
    }
  }
  .btn {
    a {
      color: #fff;
      font-size: 20px;
      padding: 14px 33px 14px 25px;
      border-radius: 10px;
      background-color: #e07469;
      margin-right: 10px;
      @include max-screen($sp) {
        margin-bottom: 10px;
        padding: 9px 30px 9px 20px;
      }
    }
    span {
      font-size: 16px;
      display: inline-block;
      padding-left: 5px;
      letter-spacing: 1px;
      line-height: 20px;
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
