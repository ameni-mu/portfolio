<template>
  <!-- ▽ main section -->
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
        <img src="../assets/logo.svg" alt="アトリエあめに atelier ameni" />
      </h1>
      <p class="main__lead">
        フロントエンドエンジニア・イラストレーター
        あめにのポートフォリオサイトです。
      </p>
      <ul class="main__nav">
        <li><router-link to="/">Index</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/illust">Illust</router-link></li>
        <li><router-link to="/frontend">Frontend</router-link></li>
        <li><router-link to="/contact">contact</router-link></li>
      </ul>
    </div>
    <div class="cvs-wrap">
      <canvas class="cvs"></canvas>
    </div>
  </section>
  <div class="index__container">
    <!-- ▽ prof section -->
    <section class="prof section">prof</section>

    <!-- ▽ illust section -->
    <section class="illust section">illust</section>

    <!-- ▽ frontend section -->
    <section class="frontend section">frontend</section>

    <!-- ▽ contact section -->
    <section class="contact section">contact</section>
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
import Point from "@/components/Point";
import $ from "jquery";

export default {
  name: "Index",
  mixins: [setMetaDesc],
  data() {
    return {
      isMinH: false,
      isCvs: true,
      stage: {},
      ctx: {},
      particles: [],
      point1: { x: 0, y: 0, speed: 0.04, radius: 0 },
      point2: { x: 0, y: 0, speed: 0.03, radius: 0 },
      point3: { x: 0, y: 0, speed: 0.04, radius: 0 },
      point4: { x: 0, y: 0, speed: 0.03, radius: 0 },
    };
  },
  mounted() {
    console.log($);
    //各sctionの高さを設定
    //750より小さければそれ以上コンテンツを可変しない
    this.winH = window.innerHeight;
    if (this.winH < 750) {
      this.isMinH = true;
      this.winH = "750px";
    }
    //canvasの設定
    this.stage = document.querySelector("canvas");
    if (!this.stage || !this.stage.getContext) {
      this.isCvs = false;
    } else {
      this.ctx = this.stage.getContext("2d");
      this.initStage();
    }
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
          _stageH = 750;
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
      const particleNum = 8;
      const stageW = this.stage.width;
      const margin = 24;
      const halfW = stageW / 2;
      const radius = halfW - margin / 2;
      const center = {
        x: halfW + margin / 2,
        y: halfW + margin / 2,
      };
      for (var i = 0; i < particleNum; i++) {
        let degree = Math.floor(360 / particleNum) * i;
        let point = new Point(center, radius, degree, margin);
        this.particles.push(point);
      }
      this.renderCircle();
    },
    renderCircle() {
      //window.requestAnimationFrame(this.renderCircle.bind(this));
      this.ctx.clearRect(0, 0, this.stage.width, this.stage.height);
      // dy => 波形

      this.particles[0].dy = Math.floor(
        Math.sin(this.particles[0].radius) * 30
      );
      this.particles[1].dy = Math.floor(
        Math.cos(this.particles[1].radius) * 25
      );
      this.particles[2].dy = Math.floor(
        Math.sin(this.particles[2].radius) * 30
      );
      this.particles[3].dy = Math.floor(
        Math.cos(this.particles[3].radius) * 20
      );
      this.ctx.fillStyle = "rgba(255,255,255,1)";
      this.ctx.beginPath();
      //
      this.ctx.moveTo(
        this.particles[0].x + this.particles[0].dy,
        this.particles[0].y + this.particles[0].dy
      );
      for (let i = 1; i < this.particles.length; i++) {
        this.particles[i].dy = Math.floor(
          Math.sin(this.particles[i].radius) * 25
        );
        this.particles[i].radius += this.particles[i].speed;
        let x = this.particles[i].x + this.particles[i].dy;
        let y = this.particles[i].y + this.particles[i].dy;
        console.log(this.particles[i].dy);
        this.ctx.lineTo(x, y);
      }
      this.ctx.closePath();
      this.ctx.fill();
    },
  },
};

// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Index",
//   components: {
//     HelloWorld,
//   },
// };
</script>

<style lang="scss" scoped>
.section {
  height: 100vh;
  min-height: 750px;
}
.is-minH {
  height: 750px;
}
.index {
  &__container {
    position: relative;
    height: 100vh;
    z-index: 1000;
    box-sizing: border-box;
  }
}
.main {
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f2ef;
  position: absolute;
  z-index: 100;
  min-height: 750px;
  top: 0;
  &__container {
    height: 530px;
    position: relative;
    z-index: 100;
  }
  &__logo {
    width: 160px;
    height: auto;
    margin: 0 auto 20px auto;
  }
  &__lead {
    position: relative;
    padding-bottom: 5px;
    display: inline-block;
    position: relative;
    margin-bottom: 35px;
    font-size: 12px;
    &:before {
      content: "";
      width: 100%;
      height: 10px;
      background-color: #fef9ec;
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
    letter-spacing: 4px;
    width: auto;
    display: flex;
    justify-content: center;
    > li {
      padding: 0 7px;
      a {
        display: inline-block;
        color: #333333;
        padding: 5px;
        overflow: hidden;
        &:before {
          height: 1px;
          background-color: #777777;
          width: 90%;
          transform: translateX(-100%);
          transition-duration: 0.5s;
          transition-timing-function: ease-in;
        }
        &:hover {
          color: #333333;
          &:before {
            transform: translateX(5%);
            transition: all 0.35s ease-in-out;
          }
        }
      }
    }
  }
}
.prof {
  background-color: #d3f4ce;
  margin-top: 100vh;
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
}
</style>
