<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
export default {
  mixins: [setMetaDesc],
};
</script>
<style lang="scss">
html {
  font-family: "Noto Sans JP", "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
    "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
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
</style>
