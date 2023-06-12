import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";

const routes = [
  {
    path: "/log-in",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/sign-up",
    name: "sign",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignView.vue"),
  },
  {
    path: "/",
    name: "main",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/MainView.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "main" */ "../views/mainvues/DashView.vue"
          ),
      },
      {
        path: "content",
        name: "content",
        component: () =>
          import(
            /* webpackChunkName: "content" */ "../views/mainvues/ContentView.vue"
          ),
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
      {
        path: "content/post",
        name: "content-post",
        component: () =>
          import(
            /* webpackChunkName: "postcontent" */ "../views/mainvues/showContentView.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // Check the store value here
  const store = useStore();
  const blocked = store.state.isAuthenticated; // Assuming you have a "blocked" state in your store

  if (to.path === "/log-in") {
    // If the user is already on the login page, allow navigation
    next();
  }
  if (to.path === "/sign-up") {
    // If the user is already on the login page, allow navigation
    next();
  } else if (!blocked) {
    // If the route is blocked, you can redirect to a specific route or show an error page
    next("/log-in"); // Redirect to a blocked route
    // Or
    // next('/error'); // Redirect to an error page
  } else {
    // If the route is not blocked, continue with navigation
    next();
  }
});

export default router;
