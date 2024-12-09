<script setup>
import { onMounted, ref } from "vue";
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
    if (newTask.value === "") {
        alert("Please enter a task");
    } else {
        tasks.value.push(newTask.value);
    }
};

const deteleTask = (index) => {
    tasks.value.splice(index, 1);
};

onMounted(async () => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/todos");
		const data = await response.json();
		tasks.value = data.map((task) => task.title);	
	} catch (error) {
		console.log(error);
	}
});
</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">User Is Active</p>
    <p v-else-if="status === 'pending'">User Pending</p>
    <p v-else-if="status">User is Inactive</p>

    <form @submit.prevent="addTask">
        <label for="newTask">Add Task</label>
        <input type="text" name="newTask" id="newTask" v-model="newTask" />
        <button type="submit">Add Task</button>
    </form>

    <h3>Task</h3>
    <ul>
        <li v-for="(task, index) in tasks" :key="task">
            <span>
                {{ task }}
            </span>
            <button @click="deteleTask">X</button>
        </li>
    </ul>
    <!-- <button v-on:click="togglestatus">Change Status</button> -->
    <button @click="toggleStatus">Change Status</button>
</template>
