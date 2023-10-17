import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import ArticleView from '@/views/ArticleView.vue'
import SearchView from '@/views/SearchView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    // component: HomePageView,
  },
  {
    path: '/ContactUs',
    name: 'contactUs',
    component: ContactUsView
  },
  {
    path: '/article/:x',
    name: 'article',
    component: ArticleView,
    props: true
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: SearchView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
