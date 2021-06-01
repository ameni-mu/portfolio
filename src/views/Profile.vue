<template>
  <div class="profile otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="profile__inner otherpage__inner">
      <h1 class="profile__heading heading otherpage__heading">PROFILE</h1>
      <div class="profile__block">
        <p class="profile__name">あめに</p>
        <p class="profile__name-title">
          フロントエンドエンジニア、イラストレーター
        </p>
        <p class="profile__text text">
          新潟県出身 神奈川県在住。<br />
          育児と仕事の両立を求めて働き方を模索しています。<br />
          <br />
          web: atelier-ameni.com<br />
          mail: info@atelier-ameni.com<br />
        </p>
      </div>
      <!-- <ul class="profile__pagelink">
        <li>
          <a href="#koremade">これまで</a>
        </li>
        <li>
          <a href="#koremade">一日のスケジュール</a>
        </li>
      </ul> -->
      <div class="profile__block">
        <h2 class="profile__secondary-heading">簡単な経歴</h2>
        <ul class="profile__career">
          <li class="profile__career-li">
            <p class="profile__year"><span>2007</span></p>
            <p class="profile__ca-detail">
              独学でweb制作を学び、フリーランスでイラスト制作やweb制作を請け負う
            </p>
          </li>
          <li class="profile__career-li">
            <p class="profile__year"><span>2009</span></p>
            <p class="profile__ca-detail">
              デジハリオンラインスクールWebデザイナー講座受講<br />
              webデザイナー、コーダーとして会社勤務<br />
              株式会社クスールでAS3を学ぶ<br />
              フリー素材配布サイト「ガーリー素材」を運営
            </p>
          </li>
          <li class="profile__career-li">
            <p class="profile__year"><span>2012</span></p>
            <p class="profile__ca-detail">
              フロントエンドエンジニアに転職。<br />
              様々な企業を転々とし色々な開発に携わらせていただく。
            </p>
          </li>
          <li class="profile__career-li">
            <p class="profile__year"><span>2015</span></p>
            <p class="profile__ca-detail">
              著書「Girls’ Design Materials」SBクリエイティブ様より刊行
            </p>
          </li>
          <li class="profile__career-li">
            <p class="profile__year"><span>2019</span></p>
            <p class="profile__ca-detail">
              妊娠出産を機に育児との両立を目指してフリーランスへ
            </p>
          </li>
        </ul>
      </div>

      <h2 class="profile__secondary-heading">平日のスケジュール</h2>
      <p class="profile__sup">
        基本的に土日以外の平日に仕事をしています。<br />
        必要があれば土日も対応可能です。
      </p>
      <ul class="profile__sche">
        <li class="profile__sche-li">
          <p class="profile__time"><span>6:00</span></p>
          <p class="profile__sche-detail">
            起床、朝食、家事タイム。子供を保育園へ送り届ける。
          </p>
        </li>
        <li class="profile__sche-li">
          <p class="profile__time profile__time--work"><span>9:00</span></p>
          <p class="profile__sche-detail profile__height-margin--1">
            <span class="em">仕事開始</span>
          </p>
        </li>
        <li class="profile__sche-li">
          <p class="profile__time"><span>16:00</span></p>
          <p class="profile__sche-detail">
            保育園へ子供を迎えに行く。帰宅後は育児、家事タイム。
          </p>
        </li>
        <li class="profile__sche-li">
          <p class="profile__time"><span>18:00</span></p>
          <p class="profile__sche-detail">
            ご飯、お風呂。<br />
            21:00〜寝かしつけ。
          </p>
        </li>
        <li class="profile__sche-li">
          <p class="profile__time profile__time--work"><span>22:00</span></p>
          <p class="profile__sche-detail profile__height-margin--2">
            <span class="em">仕事開始</span>
          </p>
        </li>
        <li class="profile__sche-li">
          <p class="profile__time"><span>0:00</span></p>
          <p class="profile__sche-detail">就寝</p>
        </li>
      </ul>
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
    line-height: 28px;
    font-size: 16px;
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
    &:after {
      content: "";
      width: 125px;
      height: 6px;
      background-color: #f7ece7;
      position: absolute;
      left: 50%;
      bottom: 0;
      margin-left: -62px;
    }
  }
  &__career {
    width: 100%;
    position: relative;
    margin-bottom: 200px;
    &:before {
      content: "";
      height: 100%;
      width: 4px;
      background-color: #e8ebdc;
      position: absolute;
      top: 5px;
      left: 76px;
      border-radius: 2px;
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
    }
  }
  &__career-li {
    font-size: 16px;
    display: flex;
    width: 100%;
    flex-direction: row;
    padding-bottom: 45px;
  }
  &__year {
    letter-spacing: 2px;
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 20px;
    font-weight: 200;
    width: 125px;
    margin: 0;
    color: #83954b;
    > span {
      display: inline-block;
      padding-right: 30px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        background-color: #e8ebdc;
        border-radius: 10px;
        left: 70px;
        top: 5px;
      }
    }
  }
  &__ca-detail {
    width: 675px;
    margin: 0;
    line-height: 28px;
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
    }
  }
  &__sche-li {
    font-size: 16px;
    display: flex;
    width: 100%;
    flex-direction: row;
    padding-bottom: 45px;
    line-height: 28px;
    .em {
      color: #b5983c;
      font-size: 20px;
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
      &:after {
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        background-color: #f8f0d6;
        border-radius: 10px;
        left: 70px;
        top: 5px;
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
  }
  &__height-margin--2 {
    padding-bottom: 40px;
  }
}
</style>
