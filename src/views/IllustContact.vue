<template>
  <div class="contact otherpage">
    <AmeniNav :isOtherPage="true"></AmeniNav>
    <div class="otherpage__inner">
      <router-view />
    </div>
    <Footer :styleType="2"></Footer>
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
import AmeniNav from "@/components/AmeniNav";
import Footer from "@/components/Footer";
export default {
  mixins: [setMetaDesc],
  components: {
    AmeniNav,
    Footer,
  },
  methods: {
    toPageTop(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.contact {
  .nav {
    margin-top: 30px;
  }
  &__heading {
    margin-bottom: 50px;
    font-size: 30px;
  }
  &__lead-btn {
    margin: 0 auto 60px auto;
    text-align: center;
  }
  &__secondary-heading {
    font-size: 26px;
    text-align: center;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 250px auto;
    padding-bottom: 20px;
    margin-bottom: 40px;
    position: relative;
    span {
      position: relative;
      display: inline-block;
      &:before {
        content: "";
        width: 100%;
        height: 6px;
        background-color: #f7ece7;
        position: absolute;
        bottom: -20px;
        left: 0;
      }
    }
  }
  &__attention {
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 50px;
    li {
      padding-left: 17px;
      position: relative;
      margin-bottom: 10px;
      border-bottom: 2px solid #f9f2ef;
      padding-bottom: 7px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        background-color: #f0b7b1;
        width: 4px;
        height: 4px;
        border-radius: 4px;
      }
      &:last-child {
        border: none;
      }
    }
    span {
      background-color: #f9f2ef;
    }
  }
}
</style>
