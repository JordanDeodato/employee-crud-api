import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
const routes = [
  {
    path: '/',
    name: 'Create Employee',
    component: () => import('../components/create-employee/CreateEmployeeComponent.vue')
  },
  {
    path: '/edit/:id',
    name: 'Update Employee',
    component: () => import('../components/edit-employee/EditEmployeeComponent.vue')
  },
  {
    path: '/list-employees',
    name: 'List All Employee',
    component: () => import('../components/list-employee/ListEmployeeComponent.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeResolve((to, next)=> {
  if(to.name) {
    NProgress.start();
  }
  next;
});

router.afterEach(()=> {
  NProgress.done();
});

export default router
