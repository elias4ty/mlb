import { createRouter, createWebHistory } from 'vue-router';

const Teams = () => import('@views/teams/index.vue');
const Introduce = () => import('@views/introduce/index.vue');
const Game = () => import('@views/game/index.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Game
    },
    {
      path: '/introduce/:level',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/teams/:type',
      name: 'teams',
      component: Teams
    }
  ]
})

export default router;
