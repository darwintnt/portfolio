import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/modules/home/pages/HomePage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/charge-account-generator',
    name: 'ChargeAccountPage',
    component: () =>
      import(
        /* webpackChunkName: 'ChargeAccountPage' */ '@/modules/chargeAccount/pages/ChargeAccountPage.vue'
      ),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
