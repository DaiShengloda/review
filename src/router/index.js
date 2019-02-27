import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pdf from '@/components/Pdf'
import PdfBasic from '@/components/PdfBasic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Pdf',
      component: Pdf
    },
    {
      path: '/pdf',
      name: 'Pdf',
      component: PdfBasic
    },
  ]
})
