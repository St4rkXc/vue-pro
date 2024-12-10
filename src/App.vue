<script setup>
import Navbar from "./components/navbar.vue";
import Hero from "./components/hero.vue";
import HomeCard from "./components/homecard.vue";
import JobListings from "./components/jobListings.vue";
</script>

<template>
    <Navbar />
    <Hero />
    <HomeCard />
    <JobListings :limit="6" :show-button="false" />
</template>
