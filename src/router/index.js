import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      title: "atelier ameni アトリエあめに",
      desc: "フロントエンドエンジニア、イラストレーターあめにのポートフォリオサイトです。女性らしさのある柔らかいイラストの作成、vue.jsやcanvasアニメーションなどjsを使用したwebページを作成します。",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    meta: {
      title: "プロフィール | atelier ameni アトリエあめに",
      desc: "フロントエンドエンジニア・イラストレーターあめにのプロフィールページです。一日のスケジュールなどをご紹介します。",
    },
  },
  {
    path: "/illust",
    name: "Illust",
    component: () =>
      import(/* webpackChunkName: "illust" */ "../views/Illust.vue"),
    meta: {
      title: "イラスト | atelier ameni アトリエあめに",
      desc: "イラストレーターあめにのイラストポートフォリオページです",
    },
  },
  {
    path: "/frontend",
    name: "Frontend",
    component: () =>
      import(/* webpackChunkName: "frontend" */ "../views/Frontend.vue"),
    meta: {
      title: "フロントエンド | atelier ameni アトリエあめに",
      desc: "フロントエンドエンジニアあめにのスキルや構築で使用するツールなど。",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    meta: {
      title: "お問い合わせ | atelier ameni アトリエあめに",
      desc: "フロント構築や、イラスト作成のご依頼やお問い合わせはこちらのページからお願いします。",
    },
  },
  {
    path: "/frontcontact",
    name: "FrontContact",
    component: () =>
      import(
        /* webpackChunkName: "frontcontact" */ "../views/FrontContact.vue"
      ),
    meta: {
      title: "お問い合わせ | atelier ameni アトリエあめに",
      desc: "フロント構築のご依頼やお問い合わせはこちらのページからお願いします。",
    },
  },
  {
    path: "/illcontact",
    name: "IllustContact",
    component: () =>
      import(
        /* webpackChunkName: "illustcontact" */ "../views/IllustContact.vue"
      ),
    meta: {
      title: "お問い合わせ | atelier ameni アトリエあめに",
      desc: "イラスト作成のご依頼やお問い合わせはこちらのページからお願いします。",
    },
    props: true,
    children: [
      {
        path: "illconfirm",
        component: () =>
          import(
            /* webpackChunkName: "illcontactConfirm" */ "../views/IllustContactConfirm.vue"
          ),
      },
      {
        path: "illcontactwrite",
        component: () =>
          import(
            /* webpackChunkName: "illcontactConfirm" */ "../views/IllustContactWrite.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
