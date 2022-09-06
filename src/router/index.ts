import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "github_info" */ '@/features/github_info/views/IndexPage.vue'),
    meta: {
      withHeader: true,
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
