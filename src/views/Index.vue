<template>
  <div class="index">
    <AmeniNav :isOtherPage="false"></AmeniNav>
    <div class="index__bg-wrap">
      <div class="index__bg1 index__bg"></div>
      <div class="index__bg2 index__bg"></div>
      <div class="index__bg3 index__bg"></div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="ol" v-if="isLoading">
        <div class="loader ball-spin-fade-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </transition>
    <section
      :class="{
        main: true,
        section: true,
        'is-minH': isMinH,
        'is-no-canvas': !isCvs,
        active: mainAnimated,
      }"
      class="wave wave--bottom"
    >
      <div class="work" v-if="isWorkShow">
        <div class="work__ol">
          <div class="work__close" @click="toggleWork">close</div>
          <p class="work__ttl">◆ お仕事状況</p>
          <ul class="work__list">
            <li><span>6月</span>対応可能です</li>
            <li><span>7月</span>お問い合わせください</li>
          </ul>
          <p class="sup">※日々状況が変わりますのでまずはお問い合わせください</p>
        </div>
      </div>
      <div class="main__container" :class="{ isNoCanvas: !isCvs }">
        <h1 class="main__logo">
          <img
            src="../assets/img/common/logo.svg"
            alt="アトリエあめに atelier ameni"
          />
        </h1>
        <p class="main__lead">
          <span>フロント構築、イラスト制作 おまかせください <br /></span>
        </p>
        <div class="work__btn">
          <a href="#" @click="toggleWork">現在のお仕事状況</a>
        </div>
        <ul class="main__nav">
          <li class="main__nav-li">
            <router-link to="/profile">Profile</router-link>
          </li>
          <li class="main__nav-li">
            <router-link to="/works">Works</router-link>
          </li>
          <li class="main__nav-li">
            <router-link to="/frontend">Frontend</router-link>
          </li>
          <li class="main__nav-li">
            <router-link to="/illust">Illust</router-link>
          </li>
          <li class="main__nav-li">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
        <div class="main__deco-wrap">
          <img src="../assets/img/index/work.svg" class="main__work-img" />
          <img src="../assets/img/index/deco1.svg" class="main__deco-img--1" />
          <img src="../assets/img/index/deco2.svg" class="main__deco-img--2" />
          <p class="main__scroll">scroll</p>
        </div>
      </div>
      <div class="cvs-wrap" :class="{ isNoCanvas: !isCvs }">
        <canvas class="cvs" v-show="isShowCvs"></canvas>
      </div>
    </section>
    <Profile></Profile>
    <Frontend></Frontend>
    <Illust></Illust>
    <Contact></Contact>

    <Footer :styleType="1"></Footer>
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
import Point from "@/components/Point";
import AmeniNav from "@/components/AmeniNav";
import Profile from "@/components/index/Profile";
import Frontend from "@/components/index/Frontend";
import Illust from "@/components/index/Illust";
import Contact from "@/components/index/Contact";
import Footer from "@/components/Footer";
import UpdateAnim from "@/components/UpdateAnim";
import DotImgSrc from "@/assets/img/index/dot.svg";
import { gsap } from "gsap";

export default {
  name: "Index",
  mixins: [setMetaDesc],
  components: {
    AmeniNav,
    Footer,
    Profile,
    Frontend,
    Illust,
    Contact,
  },
  data() {
    return {
      isResize: false,
      isMinH: false,
      isMinW: false,
      isCvs: true,
      stage: {},
      ctx: {},
      particles: [],
      particleNum: 8,
      dotImgSrc: DotImgSrc,
      dotImg: {},
      isShowCvs: false,
      bg1: {},
      bg2: {},
      bg3: {},
      bgEase1: 0.1,
      bgEase2: 0.1,
      bgEase3: 0.1,
      bgCalc1: 0,
      bgCalc2: 0,
      bgCalc3: 0,
      scrollY: 0,
      animation: function () {},
      isLoading: true,
      mainAnimated: false,
      isWorkShow: false,
    };
  },
  mounted() {
    const _this = this;
    this.winH = window.innerHeight;
    if (this.winH < 800) {
      this.isMinH = true;
      this.winH = "800";
    }
    this.isMinW = window.innerWidth <= 740 ? true : false;
    if (this.isMinW) this.isLoading = false;

    this.$nextTick(function () {
      //パララックスオブジェクト表示
      this.bg1 = document.querySelector(".index__bg1");
      this.bg2 = document.querySelector(".index__bg2");
      this.bg3 = document.querySelector(".index__bg3");
      const bgWrap = document.querySelector(".index__bg-wrap");
      // //パララックス背景の高さを指定
      const h = this.winH * 5;
      this.bg1.style.height = h + "px";
      this.bg2.style.height = h + "px";
      this.bg3.style.height = h + "px";

      setTimeout(() => {
        //canvasの設定
        _this.stage = document.querySelector("canvas");
        if (!_this.stage || !_this.stage.getContext) {
          _this.isCvs = false;
          _this.animEnter();
        } else {
          _this.ctx = _this.stage.getContext("2d");
          _this.initStage();
        }
        //パララックス背景
        // _this.scrollY = window.scrollY;
        // _this.bg1.style.transform =
        //   "translateY(" + -(_this.scrollY / 2) + "px)";
        // _this.bg2.style.transform =
        //   "translateY(" + -(_this.scrollY / 5) + "px)";
        // _this.bg3.style.transform =
        //   "translateY(" + -(_this.scrollY / 10) + "px)";
        gsap.to(bgWrap, {
          delay: 1,
          duration: 2,
          opacity: 1,
          ease: "easePower1.easeOut",
        });

        //resize event
        window.addEventListener("resize", _this.onResize);
        //scroll event
        window.addEventListener("scroll", _this.onScroll);
      }, 300);
    });
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
    window.cancelAnimationFrame(this.animation);
  },
  methods: {
    toggleWork() {
      this.isWorkShow = !this.isWorkShow;
    },
    onScroll() {
      this.scrollY = window.scrollY;
      // this.bg1.style.transform = "translateY(" + -(this.scrollY / 2) + "px)";
      // this.bg2.style.transform = "translateY(" + -(this.scrollY / 5) + "px)";
      // this.bg3.style.transform = "translateY(" + -(this.scrollY / 10) + "px)";
    },
    initStage() {
      const stageH = Math.floor(window.innerHeight * 0.8);
      let _stageH = 0;
      //最小画面サイズのとき、canvasは縦横700pxに固定
      if (this.isMinH) {
        _stageH = 700;
        //それ以外は700px以下は700pxに固定、
        //700以上900以下のときは画面サイズ-180pxにする
      } else if (!this.isMinH) {
        if (700 < stageH && stageH < 900) {
          _stageH = stageH;
        } else if (700 > stageH) {
          _stageH = 800;
        } else {
          _stageH = 900;
        }
      }
      this.stage.style.width = _stageH + "px";
      this.stage.style.height = _stageH + "px";
      this.stage.width = _stageH;
      this.stage.height = _stageH;
      this.initCanvas();
    },
    initCanvas() {
      //動く円のもとになる点を作る
      const stageW = this.stage.width;
      const margin = 24;
      const halfW = stageW / 2;
      const radius = halfW - margin / 2;
      const center = {
        x: halfW,
        y: halfW,
      };
      //背景ドット画像の読み込み
      this.dotImg = new Image();
      this.dotImg.src = this.dotImgSrc;
      const _this = this;
      this.dotImg.onload = function () {
        //main circleの設定
        for (var i = 0; i < _this.particleNum; i++) {
          let degree = Math.floor(360 / _this.particleNum) * i;
          let point = new Point(center, radius, degree, margin);
          _this.particles.push(point);
        }
        _this.isShowCvs = true;
        _this.renderCircle();
        _this.animEnter();
      };
    },
    renderCircle() {
      this.animation = window.requestAnimationFrame(
        this.renderCircle.bind(this)
      );
      if (this.isMinW) return;

      //canvas render
      this.ctx.clearRect(0, 0, this.stage.width, this.stage.height);
      //===========================
      // background dot
      //===========================
      this.ctx.beginPath();
      //背景画像を配置
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.drawImage(
        this.dotImg,
        0,
        0,
        this.stage.width,
        this.stage.height
      );
      //マスクをかける
      this.ctx.globalCompositeOperation = "destination-in";
      this.ctx.beginPath();
      //アニメーションの動きの位置を更新
      for (let i = 0; i < this.particleNum - 1; i++) {
        let point = this.particles[i];
        point = new UpdateAnim(point, point.animType, point.radius, point.dis);
        this.particles[i] = point;
      }
      this.ctx.moveTo(
        (this.particles[0].shadowMoveX + this.particles[7].shadowMoveX) / 2,
        (this.particles[0].shadowMoveY + this.particles[7].shadowMoveY) / 2
      );
      for (let i = 0; i < this.particleNum - 1; i++) {
        let x = this.particles[i].shadowMoveX;
        let y = this.particles[i].shadowMoveY;
        let _x = this.particles[0].shadowMoveX;
        let _y = this.particles[0].shadowMoveY;
        if (this.particles[i + 1]) {
          _x = (x + this.particles[i + 1].shadowMoveX) / 2;
          _y = (y + this.particles[i + 1].shadowMoveY) / 2;
        }
        this.ctx.quadraticCurveTo(x, y, _x, _y);
      }
      this.ctx.quadraticCurveTo(
        this.particles[7].shadowMoveX,
        this.particles[7].shadowMoveY,
        (this.particles[7].shadowMoveX + this.particles[0].shadowMoveX) / 2,
        (this.particles[7].shadowMoveY + this.particles[0].shadowMoveY) / 2
      );
      this.ctx.closePath();
      this.ctx.fill();

      //===========================
      // main circle
      //===========================
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.fillStyle = "rgba(255,255,255,1)";
      this.ctx.beginPath();
      //アニメーションの動きの位置を更新
      for (let i = 0; i < this.particleNum - 1; i++) {
        let point = this.particles[i];
        point = new UpdateAnim(point, point.animType, point.radius, point.dis);
        this.particles[i] = point;
      }
      this.ctx.moveTo(
        (this.particles[0].moveX + this.particles[7].moveX) / 2,
        (this.particles[0].moveY + this.particles[7].moveY) / 2
      );
      for (let i = 0; i < this.particleNum - 1; i++) {
        let x = this.particles[i].moveX;
        let y = this.particles[i].moveY;
        let _x = this.particles[0].moveX;
        let _y = this.particles[0].moveY;
        if (this.particles[i + 1]) {
          _x = (x + this.particles[i + 1].moveX) / 2;
          _y = (y + this.particles[i + 1].moveY) / 2;
        }
        this.ctx.quadraticCurveTo(x, y, _x, _y);
      }
      this.ctx.quadraticCurveTo(
        this.particles[7].moveX,
        this.particles[7].moveY,
        (this.particles[7].moveX + this.particles[0].moveX) / 2,
        (this.particles[7].moveY + this.particles[0].moveY) / 2
      );
      this.ctx.closePath();
      this.ctx.fill();
    },
    animEnter() {
      if (this.isMinW) return;
      setTimeout(() => {
        this.mainAnimated = true;
      }, 300);
      this.isLoading = false;
    },
    //-------------------
    // window resize
    //-------------------
    onResize() {
      if (this.isResize) return;
      this.isResize = true;
      const _this = this;
      setTimeout(() => {
        _this.isMinW = window.innerWidth <= 740 ? true : false;
        _this.isResize = false;
        if (!_this.mainAnimated) {
          _this.animEnter();
          _this.renderCircle();
        }
      }, 300);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
@import "@/assets/scss/contact.scss";
.is-minH {
  height: 800px;
}
.index {
  position: relative;
  overflow: hidden;
  font-family: "Noto Sans JP", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
    "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro", "メイリオ",
    Meiryo, sans-serif;
  .ball-spin-fade-loader {
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    z-index: 9999 !important;
    margin-top: -60px;
    > div {
      background-color: #e98e92 !important;
    }
  }
  .ol {
    background-color: #f5dfde;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9000;
  }
  &__bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-position: left top;
    height: 6000px;
    transition: translateY 1s ease;
  }
  &__bg-wrap {
    opacity: 0;
  }
  &__bg1 {
    background-image: url("../assets/img/index/bg_dot.svg");
    z-index: 3;
  }
  &__bg2 {
    background-image: url("../assets/img/index/bg_dot2.svg");
    z-index: 2;
  }
  &__bg3 {
    background-image: url("../assets/img/index/bg_dot3.svg");
    z-index: 1;
  }
  .work {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    @include max-screen($sp) {
      background-color: rgba($color: #ffffff, $alpha: 0.5);
    }
    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      margin-bottom: 20px;
      a {
        background-color: #8ca836;
        color: #fff;
        display: inline-block;
        box-sizing: border-box;
        padding: 5px 10px 7px 10px;
        border-radius: 4px;
        &:hover {
          &:before {
            display: none;
          }
        }
      }
    }
    &__close {
      background-image: url("../assets/img/common/ico_close.svg");
      background-size: 20px auto;
      background-repeat: no-repeat;
      background-position: center;
      background-color: #999;
      border-radius: 40px;
      position: fixed;
      left: 50%;
      top: 50%;
      z-index: 9999;
      width: 40px;
      height: 40px;
      display: block;
      @include texthidden();
      cursor: pointer;
      transform: translate(180px, -160px);
      @include max-screen($sp) {
        left: auto;
        right: 5vw;
        top: 80px;
        transform: translate(0, 0);
      }
    }
    &__ol {
      background-color: #fff;
      width: 400px;
      height: 300px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-200px, -150px);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 30px;
      font-size: 14px;
      line-height: 26px;
      flex-direction: column;
      text-align: left;
      box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.6);
      border-radius: 20px;
      z-index: 9999;
      @include max-screen($sp) {
        width: 85vw;
        height: auto;
        transform: inherit;
        left: 7vw;
        top: 100px;
        box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.4);
      }
    }
    &__ttl {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    &__list {
      li {
        margin-bottom: 10px;
        @include max-screen($sp) {
          flex-wrap: wrap;
        }
      }
      span {
        display: inline-block;
        padding: 3px;
        margin-right: 10px;
        width: 50px;
        text-align: center;
        font-weight: bold;
        background-color: #f7e6e4;
        box-sizing: border-box;
      }
    }
    .sup {
      color: #7e7d7d;
    }
  }
  .work-detail {
    display: inline-block;
  }
  .main {
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8e9e7;
    z-index: 100;
    min-height: 800px;
    z-index: 10;
    @include max-screen($sp) {
      width: auto;
      box-sizing: border-box;
      display: block;
      padding: 30px;
      height: auto;
      min-height: auto;
    }
    &__container {
      height: 530px;
      position: relative;
      z-index: 100;
      margin-top: -20px;
      opacity: 0;
      transition: opacity 0.6s 0s ease-in-out;
      @include max-screen($sp) {
        margin-top: 0;
        background-color: #ffffff;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 20px;
        border-radius: 90px;
        height: auto;
        overflow: hidden;
        opacity: 1;
        transition: none;
      }
      &.isNoCanvas {
        margin: 0 30px;
        background-color: #ffffff;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 20px;
        border-radius: 90px;
        height: auto;
        overflow: hidden;
        opacity: 1;
        min-height: 560px;
        width: 100%;
        @include max-screen($sp) {
          margin: 0;
          min-height: auto;
        }
        .main__deco-wrap {
          margin-top: 80px;
          width: 100%;
          height: auto;
          position: relative;
        }
        .main__work-img {
          bottom: auto;
          top: 0;
        }
        .main__deco-img--1 {
          top: -20px;
          bottom: auto;
          margin-left: -165px;
          @include max-screen($sp) {
            margin-left: -100px;
            top: -40px;
          }
        }
        .main__deco-img--2 {
          top: -20px;
          bottom: auto;
          margin-left: -247px;
          @include max-screen($sp) {
            margin-left: -166px;
            top: -40px;
          }
        }
        .main__scroll {
          opacity: 1;
          top: 225px;
          @include max-screen($sp) {
            top: 161px;
          }
        }
      }
    }
    &__logo {
      width: 160px;
      height: auto;
      margin: 0 auto 20px auto;
      @include max-screen($sp) {
        width: 130px;
        transition: none;
      }
    }
    &__lead {
      position: relative;
      padding-bottom: 5px;
      display: inline-block;
      position: relative;
      margin-bottom: 15px;
      font-size: 12px;
      font-family: "Noto Sans JP", "Yu Gothic Medium", "游ゴシック Medium",
        YuGothic, "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro",
        "メイリオ", Meiryo, sans-serif;
      @include max-screen($sp) {
        margin-right: 30px;
        margin-left: 30px;
        line-height: 24px;
        margin-bottom: 10px;
        transition: none;
      }
      br {
        display: none;
        @include max-screen($sp) {
          //display: block;
        }
      }
      &:before {
        content: "";
        width: 100%;
        height: 10px;
        background-color: #eff4e3;
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        @include max-screen($sp) {
          display: none;
        }
      }
      span {
        @include max-screen($sp) {
          background-color: #f5f8ed;
        }
      }
    }
    &__nav {
      font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
        "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro",
        "メイリオ", Meiryo, sans-serif;
      font-size: 16px;
      font-weight: 200;
      letter-spacing: 3px;
      width: auto;
      display: flex;
      justify-content: center;
      @include max-screen($sp) {
        margin: 0 40px 50px 40px;
        flex-wrap: wrap;
        font-size: 14px;
      }
      > li {
        padding: 0 9px;
        // opacity: 0;
        // transform: translateY(10px);
        //transition: all 0.6s 1s ease-in-out;
        @include max-screen($sp) {
          margin-bottom: 0;
          opacity: 1;
        }
        a {
          display: inline-block;
          color: #333333;
          padding: 5px 5px 7px 5px;
          overflow: hidden;
          &:before {
            height: 5px;
            background-color: #fbf2ec;
            width: 90%;
            transform: translateX(-100%);
            transition-duration: 0.5s;
            transition-timing-function: ease-in;
          }
          &:after {
            height: 100%;
            width: 90%;
            position: absolute;
            bottom: 5px;
            content: "";
            border-bottom: #f9ece4 1px solid;
            left: 5%;
            transform: translateX(0);
            transition-duration: 0.5s;
            transition-timing-function: ease-in;
          }
          &:hover {
            color: #333333;
            &:before {
              transform: translateX(5%);
              transition: all 0.35s ease-in-out;
            }
            &:after {
              transform: translateX(100%);
              transition: all 0.35s ease-in-out;
              border-bottom: #fff 1px solid;
            }
          }
          &.current {
            opacity: 0.5;
            cursor: default;
            &:before {
              display: none;
            }
            &:after {
              display: none;
            }
          }
        }
      }
    }
    &__deco-wrap {
      //transition: opacity 0.6s 1.4s ease-in-out;
      @include max-screen($sp) {
        position: relative;
        padding-bottom: 70px;
      }
    }
    &__work-img {
      width: 180px;
      height: auto;
      position: absolute;
      left: 50%;
      bottom: 50px;
      margin-left: -90px;
      @include max-screen($sp) {
        position: static;
        margin-left: auto;
        width: 120px;
        opacity: 1;
      }
    }
    &__deco-img--1 {
      position: absolute;
      left: 50%;
      bottom: 95px;
      width: 290px;
      margin-left: -150px;
      animation-name: fuwafuwa1;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-duration: 1.5s;
      @include max-screen($sp) {
        bottom: 110px;
        width: 210px;
        margin-left: -105px;
        opacity: 1;
      }
    }
    &__deco-img--2 {
      position: absolute;
      left: 50%;
      width: 500px;
      margin-left: -240px;
      bottom: 110px;
      animation-name: fuwafuwa2;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-duration: 1.5s;
      @include max-screen($sp) {
        bottom: 120px;
        width: 350px;
        margin-left: -175px;
        opacity: 1;
      }
    }
    &__scroll {
      font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
        "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro",
        "メイリオ", Meiryo, sans-serif;
      font-weight: 200;
      position: absolute;
      bottom: -30px;
      left: 50%;
      margin-left: -50px;
      text-align: center;
      color: #7a6150;
      font-size: 14px;
      letter-spacing: 2px;
      width: 100px;
      height: 50px;
      box-sizing: border-box;
      padding-top: 32px;
      text-indent: 2px;
      opacity: 0;
      @include max-screen($sp) {
        bottom: 20px;
        opacity: 1;
        width: 50px;
        margin-left: -25px;
        height: 30px;
        padding-top: 20px;
      }
      &:before {
        content: "";
        position: absolute;
        height: 25px;
        width: 30px;
        left: 50%;
        margin-left: -15px;
        top: 0;
        background-image: url("../assets/img/index/arrow.svg");
        background-repeat: no-repeat;
        background-size: 30px 30px;
        @include max-screen($sp) {
          background-size: 20px auto;
          margin-left: -10px;
        }
      }
    }
    &.active {
      .main__container {
        opacity: 1;
      }
      // .cvs {
      //   animation: cvs 0.6s 0s ease-in-out forwards;
      // }
      // .main__logo {
      //   opacity: 1;
      // }
      // .main__lead {
      //   opacity: 1;
      // }
      // .main__nav {
      //   >li {
      //     opacity: 1;
      //     transform: translateY(0px);
      //   }
      // }
      // .main__deco-wrap {
      //   opacity: 1;
      // }
    }
  }
  .cvs-wrap {
    width: 100%;
    height: 100vh;
    min-height: 700px;
    min-width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10;
    @include max-screen($sp) {
      display: none;
    }
    &.isNoCanvas {
      display: none;
    }
  }
  .cvs {
    width: 100%;
    height: 100vh;
    min-height: 700px;
    min-width: 700px;
    max-width: 900px;
    max-height: 900px;
    position: absolute;
    display: block;
    z-index: 0;
    transform: translateY(-20px);
    @include max-screen($sp) {
      display: none;
    }
  }
}
@keyframes cvs {
  0% {
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes fuwafuwa1 {
  0% {
    transform: translateY(8px);
  }
  100% {
    transform: translateY(-8px);
  }
}
@keyframes fuwafuwa2 {
  0% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(8px);
  }
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.6s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-leave-to {
  opacity: 0;
}
.fade-move {
  transition: transform 1s;
}
</style>
