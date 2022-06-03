<template>
  <div class="wd otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="wd__inner otherpage__inner">
      <h1 class="wd__heading heading otherpage__heading">Web Design</h1>
      <ul class="wd__lead otherpage__list wave-line">
        <li>
          現在はwebデザインはクラウドソーシングのコンペ提案をメインに活動しています。
        </li>
      </ul>
      <div class="wd__block wd__block--1">
        <h2 class="wd__secondary-heading">2021〜</h2>
        <ul class="wd__thumb-lists">
          <li class="wd__thumb-list" @click="onModal">
            <div class="wd__thumb-wrap">
              <img src="../assets/img/webdesign/1/1.jpg" />
            </div>
            <p class="wd__tumb-ttl">
              <span class="text">ヘアサロンのTOPデザイン</span>
            </p>
            <div
              class="wd__modaldesc"
              data-type="1"
              data-imglength="1"
              data-id="1"
            ></div>
          </li>
          <li class="wd__thumb-list" @click="onModal">
            <div class="wd__thumb-wrap">
              <img src="../assets/img/webdesign/2/1.jpg" />
            </div>
            <p class="wd__tumb-ttl">
              <span class="text">ヘアサロンのTOPデザイン</span>
            </p>
            <div
              class="wd__modaldesc"
              data-type="1"
              data-imglength="1"
              data-id="2"
            ></div>
          </li>
          <li class="wd__thumb-list" @click="onModal">
            <div class="wd__thumb-wrap">
              <img src="../assets/img/webdesign/3/1.jpg" />
            </div>
            <p class="wd__tumb-ttl">
              <span class="text">動物病院のTOPデザイン</span>
            </p>
            <div
              class="wd__modaldesc"
              data-type="1"
              data-imglength="1"
              data-id="3"
            ></div>
          </li>
          <li class="wd__thumb-list" @click="onModal">
            <div class="wd__thumb-wrap">
              <img src="../assets/img/webdesign/4/1.jpg" />
            </div>
            <p class="wd__tumb-ttl">
              <span class="text">システム企業のTOPデザイン</span>
            </p>
            <div
              class="wd__modaldesc"
              data-type="1"
              data-imglength="1"
              data-id="4"
            ></div>
          </li>
          <li class="wd__thumb-list" @click="onModal">
            <div class="wd__thumb-wrap">
              <img src="../assets/img/webdesign/5/1.jpg" />
            </div>
            <p class="wd__tumb-ttl">
              <span class="text">病院のTOPデザイン</span>
            </p>
            <div
              class="wd__modaldesc"
              data-type="1"
              data-imglength="1"
              data-id="5"
            ></div>
          </li>
        </ul>
      </div>
    </div>

    <WorksModal
      v-if="isModal"
      @onClose="onClose"
      :isMovie="isMovie"
      :imgLength="imgLength"
      :ModaldescText="ModaldescText"
      :dataID="dataID"
      :title="title"
    >
    </WorksModal>

    <Footer :styleType="2"></Footer>
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
import AmeniNav from "@/components/AmeniNav";
import Footer from "@/components/Footer";
import WorksModal from "@/components/WorksModal2";

export default {
  mixins: [setMetaDesc],
  components: {
    AmeniNav,
    Footer,
    WorksModal,
  },
  data() {
    return {
      isModal: false,
      isMovie: false,
      imgLength: 0,
      ModaldescText: "",
      modalHtmlElement: "",
      dataID: 0,
      title: "",
    };
  },
  methods: {
    onModal(e) {
      e.preventDefault();
      const html = document.querySelector(".html");
      html.style.overflow = "hidden";
      this.isModal = true;
      this.modalHtmlElement = e.currentTarget.querySelector(".wd__modaldesc");
      const title = e.currentTarget.querySelector(".wd__tumb-ttl");
      const ttlText = title.querySelector(".text").innerHTML;
      this.title = ttlText;
      this.ModaldescText = this.modalHtmlElement.innerHTML;
      const dataType = Number(this.modalHtmlElement.dataset.type);
      const dataLength = Number(this.modalHtmlElement.dataset.imglength);
      this.dataID = Number(this.modalHtmlElement.dataset.id);
      this.isMovie = dataType == 1 ? false : true;
      if (!this.isMovie) {
        this.imgLength = dataLength;
      }
      //後で余裕があったらハッシュタグで表示切り替え対応しておく
      // const hash = '#' + this.dataID;
      // location.hash = hash;
    },
    onClose() {
      const html = document.querySelector(".html");
      html.style.overflow = "auto";
      this.isModal = false;
      //後で余裕があったらハッシュタグで表示切り替え対応しておく
      //location.hash = '';
    },
  },
};
</script>

<style lang="scss">
.wd {
  .nav {
    margin-top: 30px;
  }
  &__lead {
    margin-bottom: 60px;
    @include max-screen($sp) {
      margin-bottom: 30px;
    }
    > li {
      .em {
        background-color: #f8f0eb;
      }
    }
  }
  &__block {
    margin-bottom: 80px;
    @include max-screen($sp) {
      margin-bottom: 40px;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &--1 {
      padding-bottom: 50px;
    }
  }
  &__secondary-heading {
    font-size: 22px;
    padding-left: 20px;
    position: relative;
    margin-bottom: 40px;
    @include max-screen($sp) {
      font-size: 18px;
      padding-left: 16px;
      margin-bottom: 15px;
    }
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
    min-height: 120px;
    overflow: hidden;
    position: relative;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include max-screen($sp) {
      margin-bottom: 5px;
      width: 100%;
    }
    img {
      width: 100%;
      display: block;
    }
    video {
      width: 100%;
    }
  }
  &__tumb-ttl {
    font-size: 12px;
    overflow-wrap: break-word;
    line-height: 22px;
    @include max-screen($sp) {
      line-height: 18px;
    }
    .ico {
      background-color: #e8ebdc;
      color: #839149;
      font-size: 12px;
      display: inline-block;
      text-align: center;
      height: 20px;
      line-height: 20px;
      box-sizing: border-box;
      border-radius: 3px;
      padding: 0 10px;
      &.img {
        background-color: #fcf7df;
        color: #d6b931;
      }
    }
    .text {
      width: 100%;
      display: block;
      @include max-screen($sp) {
        padding-top: 5px;
      }
    }
  }
  &__thumb-lists {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    @include max-screen($sp) {
      justify-content: center;
    }
  }
  &__thumb-list {
    margin-bottom: 30px;
    padding: 10px;
    box-sizing: border-box;
    max-width: 200px;
    @include max-screen($sp) {
      margin-bottom: 15px;
      width: 50%;
    }
    &:nth-child(4) {
      margin-right: 0;
    }
    &:nth-child(odd) {
      @include max-screen(430px) {
        padding: 5px 10px 5px 0;
      }
    }
    &:nth-child(even) {
      @include max-screen(430px) {
        padding: 5px 0 5px 10px;
      }
    }
    &:hover {
      background-color: #eee;
      cursor: pointer;
      @include max-screen($sp) {
        background-color: inherit;
      }
    }
  }
  &__modaldesc {
    height: 0;
    width: 0;
    overflow: hidden;
    text-indent: -9999px;
  }
}
</style>
