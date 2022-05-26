import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const JobResultsView = () =>
  import(/* webpackChunckName: "jobs"*/ '@/views/JobResultsView.vue')
const JobView = () =>
  import(/* webpackChunckName: "jobs"*/ '@/views/JobView.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    components: HomeView,
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    components: JobResultsView,
  },
  {
    path: '/jobs/results/:id',
    name: 'JobListing',
    components: JobView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
