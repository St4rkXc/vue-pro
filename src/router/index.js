import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/views/homeView.vue";
import jobView from "@/views/JobsView.vue";
import imgView from "@/views/imgView.vue";

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
            component: jobView,
        },
        {
            path: "/test",
            name: "test",
            component: imgView,
        },
    ],
});

export default router;
