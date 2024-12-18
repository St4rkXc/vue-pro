import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/views/homeView.vue";
import jobsView from "@/views/JobsView.vue";
import jobView from "@/views/jobView.vue";
import NotFoundView from "@/views/notFoundView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: homeView,
        },
        {
            path: "/jobs",
            name: "jobs",
            component: jobsView,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: jobView,
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView,
        },
    ],
});

export default router;
