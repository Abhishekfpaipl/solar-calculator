import { createRouter, createWebHistory } from "vue-router"; 

const routes = [ 
  {
    path: "/",
    name: "SolarCalculator",
    component: () => import("@/views/SolarCalculator.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
