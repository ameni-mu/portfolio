<template>
  <div class="index">
    <AmeniNav :isOtherPage="false"></AmeniNav>

    <section
      :class="{
        main: true,
        section: true,
        'is-minH': isMinH,
        'is-no-canvas': !isCvs,
      }"
    >
      <div class="main__container">
        <h1 class="main__logo">
          <img
            src="../assets/img/common/logo.svg"
            alt="アトリエあめに atelier ameni"
          />
        </h1>
        <p class="main__lead">
          フロントエンドエンジニア・イラストレーター
          あめにのポートフォリオサイトです。
        </p>
        <ul class="main__nav">
          <li class="main__nav-li">
            <router-link to="/" active-class="current" exact>Index</router-link>
          </li>
          <li class="main__nav-li">
            <router-link to="/profile">Profile</router-link>
          </li>
          <li class="main__nav-li">
            <router-link to="/frontend">Frontend</router-link>
          </li>
          <li class="main__nav-li">
            <router-link to="/illust">Illust</router-link>
          </li>
          <li class="main__nav-li">
            <router-link to="/contact">contact</router-link>
          </li>
        </ul>
        <img src="../assets/img/index/work.svg" class="main__work-img" />
        <img src="../assets/img/index/deco1.svg" class="main__deco-img--1" />
        <img src="../assets/img/index/deco2.svg" class="main__deco-img--2" />
        <p class="main__scroll">scroll</p>
      </div>
      <div class="cvs-wrap">
        <transition :css="false" @before-enter="beforeEnter" @enter="enter">
          <canvas class="cvs" v-show="isShowCvs"></canvas>
        </transition>
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
// import $ from "jquery";

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
      isMinH: false,
      isCvs: true,
      stage: {},
      ctx: {},
      particles: [],
      particleNum: 8,
      dotImgSrc: DotImgSrc,
      dotImg: {},
      isShowCvs: false,
    };
  },
  mounted() {
    //各sctionの高さを設定
    //800より小さければそれ以上コンテンツを可変しない
    this.winH = window.innerHeight;
    if (this.winH < 800) {
      this.isMinH = true;
      this.winH = "900px";
    }
    //canvasの設定
    this.stage = document.querySelector("canvas");
    if (!this.stage || !this.stage.getContext) {
      this.isCvs = false;
    } else {
      this.ctx = this.stage.getContext("2d");
      this.initStage();
    }
    //resize event
    window.addEventListener("resize", this.onResize);
  },
  methods: {
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
      };
    },
    renderCircle() {
      window.requestAnimationFrame(this.renderCircle.bind(this));
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
    beforeEnter(el) {
      gsap.set(el, {
        duration: 0,
        translateY: 30,
      });
    },
    enter(el, done) {
      const logo = document.getElementsByClassName("main__logo");
      const lead = document.getElementsByClassName("main__lead");
      const nav = document.getElementsByClassName("main__nav-li");
      const workImg = document.getElementsByClassName("main__work-img");
      const obj1 = document.getElementsByClassName("main__deco-img--1");
      const obj2 = document.getElementsByClassName("main__deco-img--2");
      const scroll = document.getElementsByClassName("main__scroll");
      gsap.to(el, {
        duration: 0.2,
        translateY: -30,
        opacity: 0.8,
        ease: "CircIn",
      });
      gsap.to(el, {
        delay: 0.3,
        duration: 0.5,
        translateY: 0,
        opacity: 1,
        ease: "easeInOut",
        onComplete: done,
      });
      gsap.to(logo, {
        delay: 0.4,
        duration: 0.5,
        opacity: 1,
        ease: "CircIn",
      });
      gsap.to(lead, {
        delay: 0.5,
        duration: 0.5,
        opacity: 1,
        ease: "CircIn",
      });
      gsap.to(nav, {
        delay: 0.6,
        duration: 0.2,
        opacity: 1,
        translateY: 0,
        ease: "Back.easeOuteaseOut.config(1.71.7)",
        stagger: {
          from: "start",
          amount: 0.4,
        },
      });
      gsap.to(workImg, {
        delay: 0.8,
        duration: 0.2,
        opacity: 0.8,
        translateY: -10,
        ease: "CircIn",
      });
      gsap.to(workImg, {
        delay: 1.1,
        duration: 0.3,
        opacity: 1,
        translateY: 0,
        ease: "CircIn",
      });
      gsap.to(obj1, {
        delay: 1.2,
        duration: 0.6,
        opacity: 1,
        ease: "CircIn",
      });
      gsap.to(obj2, {
        delay: 1.4,
        duration: 0.6,
        opacity: 1,
        ease: "CircIn",
      });
      gsap.to(scroll, {
        delay: 1.6,
        duration: 0.3,
        opacity: 1,
        ease: "CircIn",
      });
    },
    //-------------------
    // window resize
    //-------------------
    onResize() {
      setTimeout(() => {
        this.isResize = true;
      }, 300);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.is-minH {
  height: 800px;
}
.index {
  position: relative;
}
.main {
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f2ef;
  z-index: 100;
  min-height: 800px;
  &__container {
    height: 530px;
    position: relative;
    z-index: 100;
    margin-top: -20px;
  }
  &__logo {
    width: 160px;
    height: auto;
    margin: 0 auto 20px auto;
    opacity: 0;
  }
  &__lead {
    position: relative;
    padding-bottom: 5px;
    display: inline-block;
    position: relative;
    margin-bottom: 35px;
    font-size: 12px;
    opacity: 0;
    &:before {
      content: "";
      width: 100%;
      height: 10px;
      background-color: #f5f8ed;
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
  &__nav {
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 3px;
    width: auto;
    display: flex;
    justify-content: center;
    > li {
      padding: 0 9px;
      opacity: 0;
      transform: translateY(10px);
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
  &__work-img {
    width: 180px;
    height: auto;
    position: absolute;
    left: 50%;
    bottom: 50px;
    margin-left: -90px;
    opacity: 0;
  }
  &__deco-img--1 {
    position: absolute;
    left: 50%;
    bottom: 95px;
    width: 290px;
    margin-left: -150px;
    opacity: 0;
    animation-name: fuwafuwa1;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 1.5s;
  }
  &__deco-img--2 {
    position: absolute;
    left: 50%;
    width: 500px;
    margin-left: -240px;
    bottom: 110px;
    opacity: 0;
    animation-name: fuwafuwa2;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 1.5s;
  }
  &__scroll {
    font-family: "Raleway", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
      "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
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
    }
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
  opacity: 0;
  margin-top: -20px;
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
</style>
