<script setup>
import jobData from "@/jobs.json";
import { ref, defineProps } from "vue";
import JobListing from "./jobListing.vue";
const jobs = ref(jobData);

defineProps({
    limit: Number,
    showButton : {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <section class="px-4 py-5 bg-blue">
        <div class="m-auto container-xl lg:container">
            <h2 class="mb-6 text-3xl font-bold text-center text-green-500"> browse available jobs </h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="max-w-lg px-6 m-auto my-10">
        <a href="/jobs" class="block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700">View All Jobs</a>
    </section>
</template>
