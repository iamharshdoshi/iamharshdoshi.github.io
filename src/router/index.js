import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue') },
  { path: '/awards', name: 'Awards', component: () => import(/* webpackChunkName: "Awards" */ '../views/Awards.vue') },
  { path: '/educations', name: 'Educations', component: () => import(/* webpackChunkName: "Educations" */ '../views/Educations.vue') },
  { path: '/interestes', name: 'Interestes', component: () => import(/* webpackChunkName: "Interestes" */ '../views/Interestes.vue') },
  { path: '/languages', name: 'Languages', component: () => import(/* webpackChunkName: "Languages" */ '../views/Languages.vue') },
  { path: '/metas', name: 'Metas', component: () => import(/* webpackChunkName: "Metas" */ '../views/Metas.vue') },
  { path: '/projects', name: 'Projects', component: () => import(/* webpackChunkName: "Projects" */ '../views/Projects.vue') },
  { path: '/publications', name: 'Publications', component: () => import(/* webpackChunkName: "Publications" */ '../views/Publications.vue') },
  { path: '/references', name: 'References', component: () => import(/* webpackChunkName: "References" */ '../views/References.vue') },
  { path: '/skills', name: 'Skills', component: () => import(/* webpackChunkName: "Skills" */ '../views/Skills.vue') },
  { path: '/volunteer', name: 'Volunteer', component: () => import(/* webpackChunkName: "Volunteer" */ '../views/Volunteer.vue') },
  { path: '/work', name: 'Work', component: () => import(/* webpackChunkName: "Work" */ '../views/Work.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
