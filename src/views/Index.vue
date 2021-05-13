<template>
  <div class="index">
    <div class="index__container">
      <section class="main">
        <ul class="main__nav">
          <li><router-link to="/">Index</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/illust">Illust</router-link></li>
          <li><router-link to="/frontend">Frontend</router-link></li>
          <li><router-link to="/contact">contact</router-link></li>
        </ul>
      </section>
      <section class="prof"></section>
      <section class="illust"></section>
      <section class="frontend"></section>
      <section class="contact"></section>
    </div>
  </div>
</template>

<script>
import setMetaDesc from "@/mixin/setMetaDesc";
export default {
  mixins: [setMetaDesc],
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
