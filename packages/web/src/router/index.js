import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import ContactUs from '@/views/ContactUs.vue';
import ContactUs2 from '@/views/ContactUs2.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/contactus',
        component: ContactUs,
    },
    {
        path: '/contactus2',
        component: ContactUs,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
