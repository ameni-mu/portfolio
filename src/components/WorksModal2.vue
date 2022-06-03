<template>
  <div>
    <div class="ol"></div>
    <div class="works-detail__container">
      <div class="works-detail">
        <div class="works-detail__inner">
          <p class="works-detail__ttl" v-html="title"></p>
          <img
            src="../assets/img/common/loading.gif"
            v-if="isLoading"
            class="works-detail__loading"
          />
          <div class="works-detail__img-lists">
            <swiper
              :spaceBetween="0"
              :navigation="true"
              :pagination="{ dynamicBullets: true }"
              class="works__swiper"
              v-if="!isMovie"
            >
              <swiper-slide v-for="n of imgLength" :key="n">
                <img
                  :src="
                    require('../assets/img/webdesign/' +
                      dataID +
                      '/prev' +
                      n +
                      '.jpg')
                  "
                />
              </swiper-slide>
            </swiper>
          </div>
          <video
            :src="require('../assets/img/webdesign/' + dataID + '/1.mp4')"
            v-if="isMovie"
            class="works-detail__movie"
          ></video>
          <div class="works-detail__desc" v-html="ModaldescText"></div>
        </div>
      </div>
      <a href="#" @click="onCloseModal" class="works-detail__close">close</a>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Navigation, Pagination]);

export default {
  props: ["isMovie", "imgLength", "ModaldescText", "dataID", "title"],
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
      const v = document.querySelector(".works-detail__movie");
      v.loop = true;
      v.play();
    }
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
  z-index: 9100;
  left: 0;
  top: 0;
}
.works-detail {
  display: flex;
  justify-content: center;
  &__container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow-y:scroll;
    overflow-x: hidden;
    z-index: 9999;
  }
  &__detail {
    display: table;
    width: 100%;
    height: 100%;
  }
  &__inner {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    padding: 40px 20px 20px 20px;
  }
  &__close {
    position: fixed;
    top: 30px;
    right: 30px;
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
    width: 400px;
    margin: 40px auto 0 auto;
    background-color: #ffffff;
    font-size: 16px;
    line-height: 30px;
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
    @include max-screen($sp) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  &__movie {
    width: 600px;
  }
  &__loading {
    position: absolute;
    left: 50%;
    top: 50%;
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
  }
  .swiper-container {
    padding: 0 50px 40px 50px;
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
