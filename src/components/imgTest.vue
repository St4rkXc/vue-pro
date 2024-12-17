<script setup>
import { defineProps } from 'vue';

defineProps({
    imgProps:{
        type: String,
        required: true
    },
    altText:{
        type: String,
        default: 'image'
    }
})
</script>

<template>
    <img :src="imgProps" alt="" class="w-full h-full object-cover" />
    <p class="text-black font-semibold text-2xl">{{ altText }}</p>
</template>
