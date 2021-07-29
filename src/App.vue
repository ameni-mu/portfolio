<template>
  <div>
    <!-- <div class="ld" v-show="isLoading" :class="{'is-loaded': loadingAnim}">
      <div class="ld__ol">
        <div class="ld__wrap">
          <span class="ld__c1"></span>
          <span class="ld__c2">
            <span class="ld__c8"></span>
          </span>
          <span class="ld__c3"></span>
          <span class="ld__c4"></span>
          <span class="ld__c5"></span>
          <span class="ld__c6"></span>
          <span class="ld__c7"></span>
        </div>
        <span class="ld__logo"></span>
      </div>
    </div> -->
    <!-- <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    > -->
    <!-- <transition name="cat" mode="out-in"> -->
      <router-view />
    <!-- </transition> -->
    <!-- <div class="ld">
      <div class="ld__ol">
        <div class="ld__wrap">
          <span class="ld__c1"></span>
          <span class="ld__c2">
            <span class="ld__c8"></span>
          </span>
          <span class="ld__c3"></span>
          <span class="ld__c4"></span>
          <span class="ld__c5"></span>
          <span class="ld__c6"></span>
          <span class="ld__c7"></span>
        </div>
        <span class="ld__logo"></span>
      </div>
    </div> -->
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";

export default {
  mixins: [setMetaDesc],
  data() {
    return {
      // isLoading:false,
      // loadingAnim: false,
    };
  },
  mounted() {
  },
  methods: {
    // beforeEnter() {

    // },
    // enter(){
    // },
    // beforeLeave(){
    //   this.isLoading = true;
    // },
    // leave() {
    //   setTimeout(() => {
    //     this.loadingAnim = true;
    //   }, 1200);
    // },
    // afterLeave() {
    //   setTimeout(() => {
    //     this.isLoading = false;
    //     this.loadingAnim = false;
    //   }, 3000);
    // },
  },
};
</script>
<style lang="scss">
html {
  font-family: "Noto Sans JP", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
    "游ゴシック体", "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro", "メイリオ",
    Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #333333;
  height: 100%;
  min-height: 100%;
  position: relative;
  @include max-screen($sp) {
    font-size: 14px;
    line-height: 22px;
  }
}
body {
  height: 100%;
  min-height: 100%;
}
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: relative;
}
.cat-enter-from {
  opacity: 0;
}
.cat-enter-active {
  transition: opacity 0.6s;
}
.cat-enter-to {
  opacity: 1;
}
.cat-leave {
  opacity: 1;
  &+ .ld {
    display: block;
  }
}
.cat-leave-active {
  transition: opacity 0.6s;
  &+ .ld {
    display: block;
  }
}
.cat-leave-to {
  opacity: 0;
  &+ .ld {
    display: block;
  }
}
.cat-move {
  transition: opacity 1s;
  &+ .ld {
    display: block;
  }
}
</style>
