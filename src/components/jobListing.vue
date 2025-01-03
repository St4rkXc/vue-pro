<script setup>
import { defineProps, ref, computed } from "vue";
import { RouterLink } from "vue-router";

/**
 * Define the props for the component.
 * @property {Object} job - The job object containing job details.
 * @property {string} job.type - The type of the job.
 * @property {string} job.title - The title of the job.
 * @property {string} job.description - The description of the job.
 * @property {string} job.salary - The salary for the job.
 * @property {string} job.location - The location of the job.
 * @property {number} job.id - The unique identifier for the job.
 */
const props = defineProps({
    job: {
        type: Object,
        required: true,
    },
});

/**
 * A ref to track whether the full description is shown.
 * @type {boolean}
 */
const showFullDescription = ref(false);

/**
 * Toggles the visibility of the full job description.
 */
const toggleFullDesc = () => {
    showFullDescription.value = !showFullDescription.value;
};

/**
 * Computes the truncated job description based on the visibility state.
 * @returns {string} The truncated or full job description.
 */
const truncatedDescription = computed(() => {
    let desc = props.job.description;
    if (!showFullDescription.value) {
        desc = desc.substring(0, 90) + "...";
    }
    return desc;
});
</script>
<template>
    <div class="relative bg-white shadow-md rounded-xl">
        <div class="p-4">
            <div class="mb-6">
                <div class="my-2 text-gray-600">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>
            <div class="mb-5"> 
                <div>
                    {{ truncatedDescription }}
                </div>
                <button @click="toggleFullDesc" class="mb-5 text-green-500 hover:text-green-600">
                    {{ showFullDescription ? "Show Less" : "Show More" }}
                </button>
            </div>
            <h3 class="mb-2 text-green-500">{{ job.salary }} / Year</h3>
            <div class="mb-5 border border-gray-100"></div>
            <div class="flex flex-col justify-between mb-4 lg:flex-row">
                <div class="mb-3 text-orange-700">
                    <i class="text-orange-400 pi pi-map-marker"></i>
                    {{ job.location }}
                </div>
                <RouterLink :to="'/jobs/' + job.id" class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"> Read More </RouterLink>
            </div>
        </div>
    </div>
</template>
