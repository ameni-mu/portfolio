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
    props: true,
  },
  {
    path: "/frontworks",
    name: "FrontWorks",
    component: () =>
      import(/* webpackChunkName: "frontworks" */ "../views/FrontWorks.vue"),
    meta: {
      title: "フロントエンド | atelier ameni アトリエあめに",
      desc: "フロントエンドエンジニアあめにのこれまで携わってきた制作物",
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
    props: true,
    children: [
      {
        path: "frontconfirm",
        component: () =>
          import(
            /* webpackChunkName: "frontcontactConfirm" */ "../views/FrontContactConfirm.vue"
          ),
      },
      {
        path: "frontcontactwrite",
        component: () =>
          import(
            /* webpackChunkName: "frontcontactwrite" */ "../views/FrontContactWrite.vue"
          ),
      },
      {
        path: "contactdone",
        component: () =>
          import(
            /* webpackChunkName: "contactdone" */ "../views/ContactDone.vue"
          ),
      },
    ],
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
            /* webpackChunkName: "illcontactWrite" */ "../views/IllustContactWrite.vue"
          ),
      },
      {
        path: "contactdone",
        component: () =>
          import(
            /* webpackChunkName: "contactdone" */ "../views/ContactDone.vue"
          ),
      },
    ],
  },
  {
    path: "/othercontact",
    name: "OtherContact",
    component: () =>
      import(
        /* webpackChunkName: "othercontact" */ "../views/OtherContact.vue"
      ),
    meta: {
      title: "お問い合わせ | atelier ameni アトリエあめに",
      desc: "お問い合わせはこちらのページからお願いします。",
    },
    props: true,
    children: [
      {
        path: "otherconfirm",
        component: () =>
          import(
            /* webpackChunkName: "otherconfirm" */ "../views/OtherContactConfirm.vue"
          ),
      },
      {
        path: "othercontactwrite",
        component: () =>
          import(
            /* webpackChunkName: "othercontactwrite" */ "../views/OtherContactWrite.vue"
          ),
      },
      {
        path: "contactdone",
        component: () =>
          import(
            /* webpackChunkName: "contactdone" */ "../views/ContactDone.vue"
          ),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
    meta: {
      title: "お探しのページは見つかりませんでした",
      desc: "",
    },
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
