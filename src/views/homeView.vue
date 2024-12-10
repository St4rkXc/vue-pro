<script setup>
import Hero from "@/components/hero.vue";
import HomeCard from "@/components/homecard.vue";
import JobListings from "@/components/jobListings.vue";
</script>

<template>
    <Hero />
    <HomeCard />
    <JobListings :limit="3" :showButton="true" />
</template>
