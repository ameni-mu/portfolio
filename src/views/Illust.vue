<template>
  <div class="illust otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="illust__inner otherpage__inner">
      <h1 class="illust__heading heading otherpage__heading">ILLUST</h1>
      <div class="illust__text wave-line">
        <p class="illust__prof">
          フリーランスとしてクライアントワークのお仕事をさせていただいております。<br />
          <span class="em"
            >イラストレーター団体「イラストレーターズ通信」会員です。</span
          >
        </p>
        <p class="btn btn--normal">
          <router-link to="/illust#illustflow" @click="toIllustFlow">
            ご依頼から納品までの流れ
          </router-link>
        </p>
      </div>
      <p class="illust__lead"><span>ILLUST TYPE</span></p>
      <ul class="illust__lists wave-line">
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
          <a
            href="#"
            @click="illTypeScroll($event, '.illust__block-typeOthers')"
          >
            <img src="../assets/img/common/ill_type/4.png" alt="others" />
            <p class="illust__list-ti">others</p>
          </a>
        </li>
      </ul>
      <div class="illust__block illust__block-typeA wave-line">
        <h2 class="illust__secondary-heading"><span>typeA</span></h2>
        <p class="illust__text">
          女性向け、ファミリー向けテイスト。<br />
          女性らしさのある雰囲気を持ちつつも全年代に好かれるような、ターゲット層の広いイラストを意識しています。
        </p>
        <div class="illust__swiper-wrap">
          <swiper
            :spaceBetween="0"
            :navigation="true"
            :pagination="{ dynamicBullets: true }"
            class="illust__swiper illust__swiper--1"
          >
            <swiper-slide v-for="n of 4" :key="n">
              <img :src="require('../assets/img/illust/1_' + n + '.png')" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="illust__block illust__block-typeB wave-line">
        <h2 class="illust__secondary-heading"><span>typeB</span></h2>
        <p class="illust__text">
          女性向け、ファッションイラスト。<br />
          女性のファッションやヘアメイクなど、美容に関する媒体で使用されることを想定したイラストです。
        </p>
        <div class="illust__swiper-wrap">
          <swiper
            :spaceBetween="0"
            :navigation="true"
            :pagination="{ dynamicBullets: true }"
            class="illust__swiper illust__swiper--2"
          >
            <swiper-slide v-for="n of 5" :key="n">
              <img :src="require('../assets/img/illust/2_' + n + '.png')" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="illust__block illust__block-typeSI wave-line">
        <h2 class="illust__secondary-heading"><span>stock illust</span></h2>
        <p class="illust__text">
          PixtaやAdobe Stockに登録させていただいているイラストです。<br />
          500点ほど登録させていただいています。<br />
          詳細は各サイトのページをご覧ください。<br />
          <a
            href="https://creator.pixta.jp/@prof1485831"
            target="_blank"
            class="illust__icon-link icon-link"
            >Pixta</a
          >
          <a
            href="https://stock.adobe.com/jp/contributor/208855618/haino"
            target="_blank"
            class="illust__icon-link icon-link"
            >Adobe Stock</a
          ><br />
          <span class="sup">*作家名が「はいの」になっています。</span>
        </p>
        <div class="illust__swiper-wrap">
          <swiper
            :spaceBetween="0"
            :navigation="true"
            :pagination="{ dynamicBullets: true }"
            class="illust__swiper illust__swiper--3"
          >
            <swiper-slide v-for="n of 8" :key="n">
              <img :src="require('../assets/img/illust/3_' + n + '.png')" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="illust__block illust__block-typeOthers wave-line">
        <h2 class="illust__secondary-heading"><span>Others</span></h2>
        <p class="illust__text">
          著書「Girls’ Design Materials」の素材イラストです。<br />
          <a
            href="https://www.sbcr.jp/product/4797376692/"
            target="_blank"
            class="illust__icon-link icon-link"
            >SBクリエイティブ様書籍紹介ページ</a
          ><br />
          <span class="sup">*作家名が「はいの」になっています。</span>
        </p>
        <div class="illust__swiper-wrap">
          <swiper
            :spaceBetween="0"
            :navigation="true"
            :pagination="{ dynamicBullets: true }"
            class="illust__swiper illust__swiper--4"
          >
            <swiper-slide v-for="n of 4" :key="n">
              <img :src="require('../assets/img/illust/4_' + n + '.png')" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="illust__block">
        <h2 class="illust__third-heading" id="illustflow">
          <span>ご依頼から納品までの流れ</span>
        </h2>
        <ul class="illust__flow">
          <li class="illust__flow-li">
            <div class="illust__flow-wrap">
              <p class="illust__flow-ttl">
                <span class="illust__flow-num">1</span>
                お問い合わせ
              </p>
              <span class="sup">
                イラストが欲しいな、というときは<br />まずは<a
                  href="/illcontact/illcontactwrite"
                  >お問い合わせページ</a
                >からお問い合わせください。
              </span>
            </div>
            <img
              :src="require('../assets/img/illust/flow-img1.svg')"
              class="illust__flow-img1"
            />
          </li>
          <li class="illust__flow-li">
            <div class="illust__flow-wrap">
              <p class="illust__flow-ttl">
                <span class="illust__flow-num">2</span>
                ヒアリング
              </p>
              <span class="sup">
                見積もり作成に必要な詳細をメールにてヒアリングさせていただきます。<br />
                イラストに反映して欲しいことがありましたら、できるだけ細かくお伝えいただけますと嬉しいです！
              </span>
            </div>
            <img
              :src="require('../assets/img/illust/flow-img4.svg')"
              class="illust__flow-img2"
            />
          </li>
          <li class="illust__flow-li">
            <div class="illust__flow-wrap">
              <p class="illust__flow-ttl">
                <span class="illust__flow-num">3</span>
                お見積もり
              </p>
              <span class="sup">
                お見積書をお渡しいたします。<br />
                問題なければ正式発注の旨をお伝えください。<br />
              </span>
            </div>
            <img
              :src="require('../assets/img/illust/flow-img6.svg')"
              class="illust__flow-img3"
            />
          </li>
          <li class="illust__flow-li">
            <p class="illust__flow-ttl">
              <span class="illust__flow-num">4</span>
              「お仕事確認書」の送付
            </p>
            <span class="em">
              お仕事確認書はご依頼者様とイラストレーターの双方に齟齬が無いよう、発注内容の詳細を記録する書類です。<br />
            </span>
            <span class="sup">
              イラストの使用期間や使用範囲などが記載されています。<br />
              メールにpdfファイルを添付してお送りしますのでご確認をお願い致します。<br />
            </span>
            <img
              :src="require('../assets/img/illust/flow-img7.svg')"
              class="illust__flow-img4"
            />
            <span class="sup gray">
              お仕事確認書の詳細につきましては、森
              流一郎さんが書かれているこちらの記事をご覧ください。<br />
              <a
                href="https://note.com/moriryuichiro/n/n8aaaeae73a3e"
                target="_blank"
                class="illust__icon-link icon-link"
                >イラストレーター必須のツール
                「お仕事確認書」について知ろう！</a
              >
            </span>
          </li>
          <li class="illust__flow-li">
            <div class="illust__flow-wrap">
              <span class="illust__flow-num">5</span>
              <p class="illust__flow-ttl">詳細ヒアリング</p>
              <span class="sup">
                (2)でお話しできなかったイラストの詳細をヒアリングさせていただきます。<br />
                基本はメールにてやりとりさせていただきますが、<br />必要に合わせてオンラインの打ち合わせなどさせていただければと思います。<br /><br />
              </span>
              <span class="em">
                ラフ作成の前にイラストに反映して欲しいことは全てお伝えください。<br />
                後からの修正で追加対応が必要になりますと、追加料金をいただく可能性がございます。<br />
              </span>
            </div>
            <img
              :src="require('../assets/img/illust/flow-img3.svg')"
              class="illust__flow-img5"
            />
          </li>
          <li class="illust__flow-li">
            <div class="illust__flow-wrap">
              <span class="illust__flow-num">6</span>
              <p class="illust__flow-ttl">ラフ提出</p>
              <span class="sup">
                ラフをご確認いただき、修正して欲しい箇所をご連絡ください。
              </span>
            </div>
          </li>
          <li class="illust__flow-li">
            <div class="illust__flow-wrap">
              <span class="illust__flow-num">7</span>
              <p class="illust__flow-ttl">ラフ修正<br /></p>
              <span class="sup">
                締め切りや内容によりますが、ご相談しながらスケジュールに合わせて提出します。<br />
                <br />
              </span>
              <span class="em">
                基本的には清書を始めてからの修正はお受けできません。<br />
                内容によってはスケジュール的に不可能だったり、<br />追加料金をいただく可能性がございますのでラフの時点で念入りにご確認をお願いいたします。
              </span>
            </div>
          </li>
          <li class="illust__flow-li">
            <div class="illust__flow-wrap">
              <span class="illust__flow-num">8</span>
              <p class="illust__flow-ttl">清書</p>
              <span class="sup">
                ラフのOKをいただけたら清書に入ります。<br />
                スケジュールに合わせて納品データを作成します。
              </span>
            </div>
          </li>
          <li class="illust__flow-li">
            <div class="illust__flow-wrap">
              <span class="illust__flow-num">9</span>
              <p class="illust__flow-ttl">納品</p>
              <span class="sup">
                ご指定いただいた形式のデータファイルをお渡しして納品いたします。
              </span>
              <img
                :src="require('../assets/img/illust/flow-img8.svg')"
                class="illust__flow-img9"
              />
            </div>
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
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination]);

export default {
  mixins: [setMetaDesc],
  components: {
    AmeniNav,
    Footer,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      hash: this.$route.hash,
    };
  },
  mounted() {
    this.$nextTick(function () {
      if (this.hash) {
        const hash = this.hash.replace("#", "");
        const y = document.getElementById(hash).offsetTop - 50;
        document.documentElement.scrollTop = y;
      }
    });
  },
  methods: {
    illTypeScroll(e, className) {
      e.preventDefault();
      //要素取得
      const element = document.querySelector(className);
      //各要素の位置(ページのスクロール位置 + ページ内の要素の位置)
      let blockTypeA_Y = element.offsetTop + window.pageYOffset - 50;
      window.scrollTo({
        top: blockTypeA_Y,
        behavior: "smooth",
      });
    },
    toIllustFlow() {
      const y = document.getElementById("illustflow").offsetTop - 50;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.illust {
  &__inner {
    padding-bottom: 100px;
    @include max-screen($sp) {
      padding-bottom: 50px;
    }
  }
  .nav {
    margin-top: 30px;
  }
  .sup {
  }
  .em {
    position: relative;
    background-color: #fef9ec;
  }
  &__text {
    line-height: 30px;
    font-size: 16px;
    @include max-screen($sp) {
      font-size: 14px;
      line-height: 22px;
    }
    &.center {
      text-align: center;
    }
    .sup {
      font-size: 12px;
    }
  }
  &__prof {
    margin-bottom: 30px;
    @include max-screen($sp) {
      font-size: 14px;
      line-height: 22px;
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
    @include max-screen($sp) {
      font-size: 18px;
      padding-top: 30px;
    }
    > span {
      display: inline-block;
      padding-bottom: 5px;
      border-bottom: 7px solid #f7efe9;
      @include max-screen($sp) {
        border-bottom: 5px solid #f7efe9;
      }
    }
  }
  &__lists {
    display: flex;
    width: 100%;
    overflow: hidden;
    padding-top: 25px;
    margin-bottom: 100px;
    padding-bottom: 80px;
    @include max-screen($tablet) {
      padding-top: 20px;
      margin-bottom: 50px;
    }
    @include max-screen($sp) {
      padding-top: 15px;
      margin-bottom: 30px;
      padding-bottom: 50px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &__list {
    width: 200px;
    padding: 0 9px;
    box-sizing: border-box;
    @include max-screen($sp) {
      width: 50%;
      max-width: 150px;
      margin-bottom: 5px;
    }
    a {
      display: block;
    }
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
    @include max-screen($sp) {
      font-size: 14px;
      padding: 0;
    }
  }
  &__secondary-heading {
    font-size: 22px;
    position: relative;
    margin-bottom: 50px;
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    letter-spacing: 3px;
    font-size: 34px;
    text-align: center;
    @include max-screen($sp) {
      font-size: 28px;
      margin-bottom: 30px;
    }
    > span {
      display: inline-block;
      position: relative;
      padding: 0 18px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 20px;
        background-color: #f4ede9;
        z-index: -1;
        bottom: -13px;
        //background-image: url("../assets/img/common/bg_dot.svg");
        @include max-screen($sp) {
          height: 16px;
          bottom: -5px;
        }
      }
    }
  }
  &__third-heading {
    font-size: 22px;
    position: relative;
    margin-bottom: 50px;
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    letter-spacing: 3px;
    font-size: 34px;
    text-align: center;
    @include max-screen($sp) {
      font-size: 20px;
      margin-bottom: 30px;
    }
    > span {
      display: inline-block;
      position: relative;
      padding: 0 18px;
      @include max-screen($sp) {
        padding: 0 0 10px 0;
        background-color: #f4ede9;
      }
      &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 20px;
        background-color: #f4ede9;
        z-index: -1;
        bottom: -13px;
        //background-image: url("../assets/img/common/bg_dot.svg");
        @include max-screen($sp) {
          display: none;
        }
      }
    }
  }
  &__block {
    padding-bottom: 50px;
    margin-bottom: 120px;
    @include max-screen($tablet) {
      margin-bottom: 50px;
    }
    @include max-screen($sp) {
      margin-bottom: 30px;
    }
    &:last-child {
      background-image: none;
      padding-bottom: 0;
      margin-bottom: 30px;
    }
  }
  &__swiper-wrap {
    margin-top: 30px;
    margin-bottom: 80px;
    overflow: hidden;
    @include max-screen($tablet) {
      margin-bottom: 50px;
    }
    @include max-screen($sp) {
      margin-bottom: 0;
    }
  }
  &__flow {
    width: 100%;
    position: relative;
    margin-top: 40px;
    @include max-screen($sp) {
      margin-top: 10px;
    }
  }
  &__flow-li {
    font-size: 16px;
    line-height: 28px;
    width: 100%;
    padding-bottom: 20px;
    position: relative;
    padding-top: 5px;
    box-sizing: border-box;
    margin-bottom: 50px;
    text-align: center;
    @include max-screen($sp) {
      font-size: 14px;
      line-height: 22px;
      padding-left: 0;
      padding-bottom: 0;
      margin-bottom: 30px;
      text-align: left;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
    &:after {
      content: "";
      width: 70%;
      position: absolute;
      left: 15%;
      bottom: -20px;
      border-bottom: 2px dashed #f4ede9;
      @include max-screen($sp) {
        width: 100%;
        left: 0;
      }
    }
    > span {
      display: block;
      text-align: left;
    }
    .em {
      display: inline;
    }
    .sup {
      display: block;
    }
    > img {
      margin-right: auto;
      margin-left: auto;
      display: block;
    }
    &.flow-img {
      background-repeat: no-repeat;
      background-position: center bottom;
      padding-bottom: 200px;
      @include max-screen($sp) {
        background-size: 100% auto;
      }
    }
  }
  &__flow-img1 {
    width: 400px;
    height: auto;
    @include max-screen($sp) {
      width: 100%;
      max-width: 300px;
    }
  }
  &__flow-img2 {
    width: 300px;
    height: auto;
    @include max-screen($sp) {
      width: 100%;
      max-width: 280px;
    }
  }
  &__flow-img3 {
    width: 250px;
    height: auto;
    @include max-screen($sp) {
      max-width: 200px;
      width: 100%;
    }
  }
  &__flow-img4 {
    width: 400px;
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    @include max-screen($sp) {
      max-width: 300px;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  &__flow-img5 {
    width: 400px;
    height: auto;
    @include max-screen($sp) {
      max-width: 300px;
      width: 100%;
    }
  }
  &__flow-img9 {
    width: 380px;
    height: auto;
    padding-top: 20px;
    margin: 0 auto;
    display: block;
    @include max-screen($sp) {
      max-width: 300px;
      width: 100%;
    }
  }
  &__flow-wrap {
    position: relative;
    text-align: center;
    padding-bottom: 20px;
    @include max-screen($sp) {
      text-align: left;
    }
  }
  &__flow-ttl {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 20px;
    padding-top: 15px;
    text-align: center;
    color: #e6858e;
    padding-bottom: 15px;
    position: relative;
    @include max-screen($sp) {
      font-size: 16px;
      margin-bottom: 10px;
      padding-top: 4px;
      padding-bottom: 8px;
    }
    &:after {
      content: "";
      width: 80px;
      border-bottom: 1px solid #e6858e;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -40px;
      @include max-screen($sp) {
      }
    }
  }
  .gray {
    color: #666;
    font-size: 14px;
    @include max-screen($sp) {
      font-size: 12px;
      line-height: 20px;
    }
    .icon-link {
      padding: 0 0 0 20px;
      @include max-screen($sp) {
        background-position: left 5px;
      }
    }
  }
  &__flow-num {
    letter-spacing: 3px;
    color: #333;
    font-weight: bold;
    text-align: center;
    display: block;
    font-size: 14px;
    margin-right: 5px;
    @include max-screen($sp) {
      line-height: 30px;
    }
  }
  // swiper
  .swiper-slide {
    justify-content: center;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-radius: 12px;
    }
  }
  .swiper-container {
    width: 100%;
    height: 660px;
    position: relative;
    overflow: inherit;
    padding-bottom: 35px;
    @include max-screen($tablet) {
      height: auto;
    }
    @include max-screen($sp) {
      padding-bottom: 25px;
    }
  }
  .swiper_wrapper {
    box-sizing: content-box;
  }
  .swiper-button-prev {
    width: 60px;
    height: 60px;
    background-image: url("../assets/img/common/arrow_swiper_left.svg");
    background-position: center;
    background-size: 60px auto;
    margin-top: -60px;
    background-repeat: no-repeat;
    @include max-screen($tablet) {
      background-size: 40px auto;
      width: 50px;
      height: 50px;
      margin-top: -50px;
    }
    @include max-screen($sp) {
      background-size: 30px auto;
      width: 40px;
      height: 40px;
      margin-top: -40px;
    }
    &:after {
      display: none;
    }
  }
  .swiper-button-disabled {
    opacity: 0 !important;
  }
  .swiper-button-next {
    width: 60px;
    height: 60px;
    background-image: url("../assets/img/common/arrow_swiper_left.svg");
    background-position: center;
    background-size: 60px auto;
    transform: scale(-1, 1);
    margin-top: -60px;
    background-repeat: no-repeat;
    @include max-screen($tablet) {
      background-size: 40px auto;
      width: 50px;
      height: 50px;
      margin-top: -50px;
    }
    @include max-screen($sp) {
      background-size: 30px auto;
      width: 40px;
      height: 40px;
      margin-top: -40px;
    }
    &:after {
      display: none;
    }
  }
  .thumb-swiper {
    box-sizing: border-box;
    height: 80px !important;
    margin-top: 20px;
    .swiper-slide {
      opacity: 0.4;
      box-sizing: border-box;
      img {
        display: block;
        width: 100%;
        height: 60px;
        object-fit: cover;
      }
    }
    .swiper-slide-thumb-active {
      opacity: 1;
      border: 3px solid #f1dcd3;
      border-radius: 6px;
    }
  }
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    background-color: #b79590 !important;
    opacity: 1;
    @include max-screen($sp) {
      width: 10px;
      height: 10px;
    }
  }
  :root {
    --swiper-theme-color: #fff;
  }
  .swiper-pagination-bullet-active,
  .swiper-pagination-bullet-active-main {
    background-color: #fff !important;
    border: solid 2px #b79590;
    box-sizing: border-box;
  }
  .swiper-pagination {
    bottom: 0 !important;
  }
}
</style>
