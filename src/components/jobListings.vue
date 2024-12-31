<script setup>
import jobData from "@/jobs.json";
import { ref, defineProps } from "vue";
import JobListing from "./jobListing.vue";
import { RouterLink } from "vue-router";

/**
 * A ref to hold the job data.
 * @type {Ref<Array>}
 */
const jobs = ref(jobData);

/**
 * Define the props for the component.
 * @property {number} limit - The maximum number of jobs to display.
 * @property {boolean} showButton - Whether to show the "View All Jobs" button.
 */
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
                <!-- Render JobListing component for each job in the jobs array, limited by the 'limit' prop -->
                <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="max-w-lg px-6 m-auto my-10">
        <!-- RouterLink to navigate to the jobs page -->
        <RouterLink to="/jobs" class="block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700">View All Jobs</RouterLink>
    </section>
</template>