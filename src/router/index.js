import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
//import store from "../store";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      title: "アトリエあめに atelier ameni",
      desc: "web制作、イラスト制作のアトリエあめにです。web制作はフロントエンド構築をメインにお仕事させていただいています。女性らしさのある柔らかいイラストの作成、vue.jsやcanvasアニメーションなどjsを使用したwebページを作成します。",
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
      title: "プロフィール | アトリエあめに atelier ameni",
      desc: "フロントエンドエンジニア・イラストレーターあめにのプロフィールページです。",
    },
  },
  {
    path: "/privacypolicy",
    name: "privacypolicy",
    component: () =>
      import(/* webpackChunkName: "illust" */ "../views/Privacypolicy.vue"),
    meta: {
      title: "プライバシーポリシー | アトリエあめに atelier ameni",
      desc: "アトリエあめにのプライバシーポリシー（個人情報の取り扱い）につきまして",
    },
  },
  {
    path: "/illust",
    name: "Illust",
    component: () =>
      import(/* webpackChunkName: "illust" */ "../views/Illust.vue"),
    meta: {
      title: "イラスト | アトリエあめに atelier ameni",
      desc: "イラストレーターあめにのイラストポートフォリオページです",
    },
  },
  {
    path: "/frontend",
    name: "Frontend",
    component: () =>
      import(/* webpackChunkName: "frontend" */ "../views/Frontend.vue"),
    meta: {
      title: "フロントエンド | アトリエあめに atelier ameni",
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
      title: "フロントエンド | アトリエあめに atelier ameni",
      desc: "フロントエンドエンジニアあめにのこれまで携わってきた制作物",
    },
  },
  {
    path: "/webdesign",
    name: "WebDesign",
    component: () =>
      import(/* webpackChunkName: "webdesign" */ "../views/WebDesign.vue"),
    meta: {
      title: "web design | アトリエあめに atelier ameni",
      desc: "atelier ameni のwebdesign実績",
    },
  },
  {
    path: "/works",
    name: "Works",
    component: () =>
      import(/* webpackChunkName: "works" */ "../views/Works.vue"),
    meta: {
      title: "works | アトリエあめに atelier ameni",
      desc: "atelier ameni の実績",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    meta: {
      title: "お問い合わせ | アトリエあめに atelier ameni",
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
      title: "お問い合わせ | アトリエあめに atelier ameni",
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
      title: "お問い合わせ | アトリエあめに atelier ameni",
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
      title: "お問い合わせ | アトリエあめに atelier ameni",
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
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition);
        });
      });
    }
    return { left: 0, top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  //const isAuthenticated = store.state.isAuthenticated;
  if (to.name == "FrontWorks" || to.name == "WebDesign") {
    // if (isAuthenticated) {
    //   next();
    // } else {
    //   alert("認証されていません。");
    //   next({ name: "Works" });
    // }
    next();
  } else {
    next();
  }
});

export default router;
