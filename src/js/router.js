import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import AppPosts from '../pages/AppPosts.vue'
import AppTypes from '../pages/AppTypes.vue';

const routes = [
    { path: '/', component: AppPosts, name: "home" },
    { path: '/types', component: AppTypes, name: 'types', },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };