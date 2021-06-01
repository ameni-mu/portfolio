<template>
  <div class="fw otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="fw__inner otherpage__inner">
      <h1 class="fw__heading heading otherpage__heading">Front-end Works</h1>
      <ul class="fw__lead otherpage__list">
        <li>年代別に掲載しています。</li>
        <li>
          大変申し訳ございませんが、2015年以降は制作物のデータを保存しておかなかったため2018、19年に制作に携わったものを少ししか掲載できていません。
        </li>
      </ul>

      <div class="fw__block">
        <h2 class="fw__secondary-heading">2015〜2017</h2>
      </div>
      <div class="fw__block">
        <h2 class="fw__secondary-heading">2014</h2>
      </div>
      <div class="fw__block">
        <h2 class="fw__secondary-heading">2012〜2013</h2>
      </div>
      <div class="fw__block">
        <h2 class="fw__secondary-heading">2010〜2011</h2>
        <ul class="fw__thumb-lists">
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/1/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">高速バスチケット販売サイト</p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/2/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">バスチケット販売サイト</p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/3/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">医学イベントティザーページ</p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/4/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">
              キャンペーンサイト<br />
              (フィーチャーフォン対応)
            </p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/5/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">医学イベントサイト</p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/6/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">SNSモバイルゲーム</p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/7/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">化粧品ブランドサイト</p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/8/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">化粧品ブランドサイト</p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/9/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">化粧品ブランド メールマガジン</p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/10/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">医学イベントサイト</p>
          </li>
          <li class="fw__thumb-list">
            <div class="fw__thumb-wrap">
              <img src="../assets/img/frontworks/11/1.jpg" />
            </div>
            <p class="fw__tumb-ttl">個人運営素材配布サイト</p>
          </li>
        </ul>
      </div>
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

<style lang="scss">
.fw {
  .nav {
    margin-top: 30px;
  }
  &__lead {
    margin-bottom: 60px;
  }
  &__block {
    margin-bottom: 120px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__secondary-heading {
    font-size: 22px;
    padding-left: 20px;
    position: relative;
    margin-bottom: 40px;
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
  &__thumb-wrap {
    width: 180px;
    height: 170px;
    overflow: hidden;
    position: relative;
    margin-bottom: 15px;
    img {
      width: 100%;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  &__tumb-ttl {
    font-size: 12px;
  }
  &__thumb-lists {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  &__thumb-list {
    margin-bottom: 30px;
    padding: 10px;
    box-sizing: border-box;
    &:nth-child(4) {
      margin-right: 0;
    }
    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
}
</style>
