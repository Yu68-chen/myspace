import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import UserList from '../views/UserList';
import UserProfile from '../views/UserProfile';
import NotFoundView from '../views/NotFoundView'
import LoginView from '../views/LoginView'
import RegistView from '../views/RegistView'
const routes = [
  {
    path: '/myspace/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myspace/UserList/',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/myspace/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/myspace/regist/',
    name: 'regist',
    component: RegistView
  },
  {
    path: '/myspace/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/myspace/UserProfile/:userId/',
    name: 'userprofile',
    component: UserProfile
  },
  {
    path: '/myspace/:catchAll(.*)',
    redirect: "/myspace/404/"
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
