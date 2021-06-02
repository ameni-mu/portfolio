<template>
  <div>
    <div class="ol"></div>
    <div class="fw-detail">
      <div class="fw-detail__inner">
        <p class="fw-detail__ttl">{{ title }}</p>
        <img
          src="../assets/img/common/loading.gif"
          v-if="isLoading"
          class="fw-detail__loading"
        >
        <div class="fw-detail__img-lists">
          <swiper
            :spaceBetween="50"
            :navigation="true"
            :pagination="{ dynamicBullets: true }"
            class="fw__swiper"
            v-if="!isMovie"
          >
            <swiper-slide v-for="n of imgLength" :key="n">
              <img :src="require('../assets/img/frontworks/'+ dataID + '/' + n + '.jpg')" />
            </swiper-slide>
          </swiper>
        </div>
        <video
          :src="require('../assets/img/frontworks/' + dataID + '/1.mp4')"
          v-if="isMovie"
          class="fw-detail__movie"
        >
        </video>
        <div class="fw-detail__desc" v-html="ModaldescText"></div>
      </div>
    </div>
    <a href="#" @click="onCloseModal" class="fw-detail__close">close</a>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/thumbs/thumbs.scss";

SwiperCore.use([Navigation, Pagination]);

export default {
  props: [
    "isMovie",
    "imgLength",
    "ModaldescText",
    "dataID",
    "title",
  ],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isLoading:true,
    }
  },
  mounted() {
    if(this.isMovie) {
      const v = document.querySelector('.fw-detail__movie');
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
.ol {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9100;
  left: 0;
  top: 0;
}
.fw-detail {
  position: fixed;
  z-index: 9101;
  width: 800px;
  height: 100%;
  margin:0;
  top: 0;
  left: 50%;
  margin-left: -400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  box-sizing: border-box;
  &__inner {
    width: 600px;
    margin-bottom: 60px;
    position: relative;
    video {
      position: relative;
      z-index: 9002;
    }
  }
  &__close {
    position: fixed;
    top: 50px;
    right: 50px;
    background-image: url("../assets/img/common/close.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size:30px auto;
    background-color: #999999;
    z-index: 9002;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    z-index: 9999;
    overflow: hidden;
    text-indent: -9999px;
    &:hover {
      &:before {
        display: none;
      }
    }
  }
  &__desc {
    width: 400px;
    margin:40px auto 0 auto;
    background-color: #ffffff;
    font-size: 16px;
    line-height: 30px;
  }
  &__ttl {
    font-size: 20px;
    margin-bottom: 50px;
    text-align: center;
  }
  &__movie {
    width: 600px;
  }
  &__loading {
    position: absolute;
    left: 50%;
    top: 100px;
    z-index:9001;
  }
  &__img-lists {
    position: relative;
    z-index: 9002;
    width: 500px;
    margin: 0 auto;
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
  }
  .swiper-button-prev {
    color: #999999;
    margin-top: -42px;
  }
  .swiper-pagination-bullet {
    background-color: #b79590;
  }
}
</style>
