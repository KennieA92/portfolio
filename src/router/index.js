import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetails from '../views/ProjectDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  }, {
    path: '/projectdetails/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
