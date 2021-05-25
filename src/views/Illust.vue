<template>
  <div class="illust otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
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
          <a
            href="#"
            @click="illTypeScroll($event, '.illust__block-typeOthers')"
          >
            <img src="../assets/img/common/ill_type/4.png" alt="others" />
            <p class="illust__list-ti">others</p>
          </a>
        </li>
      </ul>
      <div class="illust__block illust__block-typeA">
        <h2 class="illust__secondary-heading"><span>typeA</span></h2>
        <p class="illust__text">
          女性向け、ファミリー向けテイスト。<br />
          女性らしさのある雰囲気を持ちつつも全年代に好かれるような、ターゲット層の広いイラストを意識しています。
        </p>
        <div class="illust__swiper-wrap">
          <swiper
            :spaceBetween="0"
            :navigation="true"
            :pagination="{'dynamicBullets': true}"
            class="illust__swiper illust__swiper--1"
          >
            <swiper-slide v-for="n of 4" :key="n">
              <img :src="require('../assets/img/illust/1_' + n + '.png')" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="illust__block illust__block-typeB">
        <h2 class="illust__secondary-heading"><span>typeB</span></h2>
        <p class="illust__text">
          女性向け、ファッションイラスト。<br />
          女性のファッションやヘアメイクなど、美容に関する媒体で使用されることを想定したイラストです。
        </p>
        <div class="illust__swiper-wrap">
          <swiper
            :spaceBetween="0"
            :navigation="true"
            :pagination="{'dynamicBullets': true}"
            class="illust__swiper illust__swiper--2"
          >
            <swiper-slide v-for="n of 5" :key="n">
              <img :src="require('../assets/img/illust/2_' + n + '.png')" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="illust__block illust__block-typeSI">
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
            :pagination="{'dynamicBullets': true}"
            class="illust__swiper illust__swiper--3"
          >
            <swiper-slide v-for="n of 8" :key="n">
              <img :src="require('../assets/img/illust/3_' + n + '.png')" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="illust__block illust__block-typeOthers">
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
            :pagination="{'dynamicBullets': true}"
            class="illust__swiper illust__swiper--4"
          >
            <swiper-slide v-for="n of 4" :key="n">
              <img :src="require('../assets/img/illust/4_' + n + '.png')" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="illust__block">
        <h2 class="illust__secondary-heading"><span>納品までの流れ</span></h2>
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
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/thumbs/thumbs.scss";

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
      thumbsSwiper1: null ,
      thumbsSwiper2: null ,
      thumbsSwiper3: null ,
      thumbsSwiper4: null ,
    };
  },
  created() {
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
  },
};
</script>

<style lang="scss">
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
      border-bottom: 7px solid #f7efe9;
    }
  }
  &__lists {
    display: flex;
    width: 100%;
    overflow: hidden;
    padding-top: 25px;
    margin-bottom: 100px;
    padding-bottom: 80px;
    //border-bottom: 1px solid #f2f0ef;
    background-image: url("../assets/img/common/bg_wave_line.svg");
    background-repeat: repeat-x;
    background-position: left bottom;
    background-size: 250px auto;
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
    >span {
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
      }
    }
  }
  &__block {
    background-image: url("../assets/img/common/bg_wave_line.svg");
    background-repeat: repeat-x;
    background-position: left bottom;
    background-size: 250px auto;
    padding-bottom: 50px;
    margin-bottom: 120px;
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
  }
}
// swiper
.illust {
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
  }
}
.swiper_wrapper {
  box-sizing: content-box;
}
.swiper-button-prev {
  width: 60px;
  height: 60px;
  background-image:url('../assets/img/common/arrow_swiper_left.svg');
  background-position: center;
  background-size: 60px auto;
  margin-top: -60px;
  &:after {
    display: none;
  }
}
.swiper-button-disabled {
  opacity: 0!important;
}
.swiper-button-next {
  width: 60px;
  height: 60px;
  background-image:url('../assets/img/common/arrow_swiper_left.svg');
  background-position: center;
  background-size: 60px auto;
  transform: scale(-1, 1);
  margin-top: -60px;
  &:after {
    display: none;
  }
}
.thumb-swiper{
  box-sizing: border-box;
  height: 80px!important;
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
.swiper-pagination-bullet{
  width: 16px;
  height: 16px;
  background-color: #b79590!important;
  opacity: 1;
}
:root {
  --swiper-theme-color:#fff;
}
.swiper-pagination-bullet-active,
.swiper-pagination-bullet-active-main {
  background-color: #fff!important;
  border: solid 2px #b79590;
  box-sizing: border-box;
}
.swiper-pagination {
  bottom: 0!important;
}
</style>
