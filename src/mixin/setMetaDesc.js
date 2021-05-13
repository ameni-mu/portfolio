export default {
  methods: {
    createTitleDesc(routeInstance) {
      //title
      if (routeInstance.meta.title) {
        const setTitle = routeInstance.meta.title;
        document.title = setTitle;
      } else {
        document.title = "atlier ameni アトリエあめに";
      }
      //meta description
      if (routeInstance.meta.desc) {
        const setDesc = routeInstance.meta.desc;
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", setDesc);
      } else {
        document
          .querySelector("meta[name='description']")
          .setAttribute(
            "content",
            "フロントエンドエンジニア、イラストレーターあめにのポートフォリオサイトです。女性らしさのある柔らかいイラストの作成、vue.jsやcanvasアニメーションなどjsを使用したwebページを作成します。"
          );
      }
    },
  },
  mounted() {
    const rounteInstance = this.$route;
    this.createTitleDesc(rounteInstance);
  },
};
