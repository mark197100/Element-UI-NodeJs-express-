import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from './views/ArticleList'
import ArticleCreate from './views/ArticleCreate'
import ArticleEdit from './views/ArticleEdit'
import ArticleUse from './views/ArticleUse'
import UserEdit from './views/UserEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/list'
    },
    {
      path: '/list',
      name: 'list',
      component: ArticleList
    },
    {
      path: '/create',
      name: 'create',
      component: ArticleCreate
    },
    {
      path:'/:id/edit',
      name:'edit',
      component:ArticleEdit
    },
    {
      path:'/user',
      name:'user',
      component:ArticleUse
    },
    {
      path:'/useredit',
      name:'useredit',
      component:UserEdit
    }
  ]
})
