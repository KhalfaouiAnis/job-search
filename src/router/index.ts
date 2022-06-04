import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const TeamsView = () => import('@/views/TeamsView.vue')
const JobResultsView = () =>
  import(/* webpackChunckName: "jobs"*/ '@/views/JobResultsView.vue')
const JobView = () =>
  import(/* webpackChunckName: "jobs"*/ '@/views/JobView.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResultsView,
  },
  {
    path: '/jobs/results/:id',
    name: 'JobListing',
    component: JobView,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'smooth' }
  },
})

export default router
