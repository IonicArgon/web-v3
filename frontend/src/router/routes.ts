import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/ProjectsView.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: () => import('../views/PageNotFound.vue'),
    }
];

export default routes;