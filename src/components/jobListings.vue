<script setup>
import jobData from '@/jobs.json';
import { ref } from 'vue';  
import JobListing from './jobListing.vue';
const jobs = ref(jobData);
</script>

<template>
    <section class="px-4 py-5 bg-blue">
        <div class="m-auto container-xl lg:container">
            <h2 class="mb-6 text-3xl font-bold text-center text-green-500">
                browse available jobs
            </h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                <JobListing v-for="job in jobs" :key="job.id" :job="job"/>
            </div>
        </div>
    </section>
</template>