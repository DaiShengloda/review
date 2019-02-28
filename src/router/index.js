import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Pdf from '@/components/Pdf'
import PdfBasic from '@/components/PdfBasic'
import CalIns from '@/pages/CalIns'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/pdf',
      name: 'Pdf',
      component: Pdf
    },
    {
      path: '/pdfBasic',
      name: 'Pdf',
      component: PdfBasic
    },
    {
      path: '/calendar',
      name: 'CalIns',
      component: CalIns
    },
  ]
})
