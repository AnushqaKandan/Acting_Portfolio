import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/HomeView.vue')
  },
  {
    path: '/casual',
    name: 'casual',
    component: () => import ('../components/CasualSection.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



// router/index.js (example)
// import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
// import CasualSection from '../components/CasualSection.vue'; 

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView,
//   },
//   {
//     path: '/casual',
//     name: 'Casual',
//     component: CasualSection,
//   },
 
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
 
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition;
//     } else if (to.hash) {
//       return {
//         el: to.hash,
//         behavior: 'smooth',
//       };
//     } else {
//       return { top: 0 };
//     }
//   },
// });

// export default router;