<template>
  <div>
    <div class="ol"></div>
    <div class="fw-detail__container">
      <div class="fw-detail">
        <div class="fw-detail__inner" :class="{large:size}">
          <p class="fw-detail__ttl" v-html="title"></p>
          <div class="fw-detail__img-wrap">
            <img
            src="../assets/img/common/loading.gif"
            v-if="isLoading"
            class="fw-detail__loading"
          />
            <div class="fw-detail__img-lists" :class="{large:size}" v-if="!isMovie">
              <swiper
                :spaceBetween="50"
                :navigation="true"
                :pagination="{ dynamicBullets: true }"
                class="fw__swiper"
                v-if="!isMovie"
              >
                <swiper-slide v-for="n of imgLength" :key="n">
                  <img
                    :src="
                      require('../assets/img/frontworks/' +
                        dataID +
                        '/' +
                        n +
                        '.jpg')
                    "
                  />
                </swiper-slide>
              </swiper>
            </div>
            <video
              :src="require('../assets/img/frontworks/' + dataID + '/1.mp4')"
              v-if="isMovie"
              class="fw-detail__movie"
            ></video>
          </div>
          <div class="fw-detail__desc" v-html="ModaldescText"></div>
        </div>
      </div>
      <a href="#" @click="onCloseModal" class="fw-detail__close">close</a>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Navigation, Pagination]);

export default {
  props: ["isMovie", "imgLength", "ModaldescText", "dataID", "title", "size"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    if (this.isMovie) {
      const v = document.querySelector(".fw-detail__movie");
      v.loop = true;
      v.play();
    }
    console.log(this.size);
  },
  methods: {
    onCloseModal(e) {
      e.preventDefault();
      this.isClose = true;
      this.$emit("onClose");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.test {
  width: 100px;
  height: 50px;
  overflow: scroll;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.ol {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9200;
  left: 0;
  top: 0;
}
.fw-detail {
  position: fixed;
  z-index: 9101;
  width: 800px;
  height: 100%;
  top: 0;
  left: 50%;
  margin-left: -400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  box-sizing: border-box;

  padding: 100px 10px 20px 10px;
  width: 100%;
  left: 0;
  margin-left: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 9999;
  display: block;
  // @include max-screen($sp) {
  //   padding: 100px 10px 20px 10px;
  //   width: 100%;
  //   left: 0;
  //   margin-left: 0;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   height: 100%;
  //   z-index: 9999;
  //   display: block;
  // }
  &__container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    z-index: 9999;
  }
  &__img-wrap {
    position: relative;
    display:flex;
    justify-content: center;
  }
  &__inner {
    width: 100%;
    //width: 600px;
    margin: 0 auto 60px auto;
    position: relative;
    padding-bottom: 50px;
    &.large {
      width: 800px;
      @include max-screen($sp) {
        width: 100%;
      }
    }
    .fw-detail__desc {
      padding: 0 100px;
      box-sizing:border-box;
      @include max-screen($sp) {
        padding: 0 20px;
      }
    }
    video {
      position: relative;
      z-index: 9002;
      @include max-screen($sp) {
        width: 100%;
      }
    }
  }
  &__close {
    position: fixed;
    top: 20px;
    right: 20px;
    background-image: url("../assets/img/common/close.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px auto;
    background-color: #999999;
    z-index: 9002;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    z-index: 9999;
    overflow: hidden;
    text-indent: -9999px;
    @include max-screen($sp) {
      width: 40px;
      height: 40px;
      background-size: 25px auto;
    }
    &:hover {
      &:before {
        display: none;
      }
    }
  }
  &__desc {
    width: 100%;
    margin: 40px auto 0 auto;
    background-color: #ffffff;
    font-size: 16px;
    line-height: 30px;
    max-width: 800px;
    @include max-screen($sp) {
      margin: 10px auto 0 auto;
      font-size: 14px;
      line-height: 22px;
      width: 100%;
      box-sizing: border-box;
    }
  }
  &__ttl {
    font-size: 20px;
    margin-bottom: 50px;
    text-align: center;
    line-height: 30px;
    @include max-screen($sp) {
      font-size: 16px;
      margin-bottom: 20px;
      line-height: 26px;
    }
  }
  &__movie {
    width: 600px;
  }
  &__loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-5px);
    z-index: 9001;
  }
  &__img-lists {
    position: relative;
    z-index: 9002;
    width: 500px;
    margin: 0 auto;
    @include max-screen($sp) {
      width: 100%;
    }
    img {
      width: 100%;
    }
    &.large {
      width: 700px;
      @include max-screen($sp) {
        width:100%;
      }
    }
  }
  .swiper-container {
    padding: 0 50px 40px 50px;
    @include max-screen($sp) {
      padding: 0 30px 40px 30px;
    }
  }
  .swiper-button-disabled {
    display: none;
  }
  .swiper-button-next {
    color: #999999;
    margin-top: -42px;
    @include max-screen($sp) {
      background-image: url("../assets/img/common/arrow_swiper_left.svg");
      background-position: center;
      background-size: 40px auto;
      transform: scale(-1, 1);
      right:0;
    }
    &:after {
      @include max-screen($sp) {
        display: none;
      }
    }
  }
  .swiper-button-prev {
    color: #999999;
    margin-top: -42px;
    @include max-screen($sp) {
      background-image: url("../assets/img/common/arrow_swiper_left.svg");
      background-position: center;
      background-size: 40px auto;
      left: 0;
    }
    &:after {
      @include max-screen($sp) {
        display: none;
      }
    }
  }
  .swiper-pagination-bullet {
    background-color: #b79590;
  }
}
</style>
