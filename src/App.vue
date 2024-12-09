<script setup>
import { ref } from "vue";
const name = ref("jhon doe");
const status = ref("active");
const tasks = ref(["task one", "task two", "task three"]);


const toggleStatus = () => {
    if (status.value === "active") {
        status.value = "pending";
    } else if (status.value === "pending") {
        status.value = "inactive";
    } else {
        status.value = "active";
    }
};
const addTask = () => {
    if(newTask.value.trim() !== ''){
        tasks.value.push(newTask.value);
        newTask.value = '';
    }
};

</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">User Is Active</p>
    <p v-else-if="status === 'pending'">User Pending</p>
    <p v-else-if="status">User is Inactive</p>

	<form @submit.prevent="addTask">
		<label for="newTask">Add Task</label>
		<input type="text" name="newTask" id="newTask" v-model="newTask">
		<button type="submit">Add Task</button>
	</form>

    <h3>Task</h3>
    <ul>
        <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
    <!-- <button v-on:click="togglestatus">Change Status</button> -->
    <button @click="toggleStatus">Change Status</button>
</template>
