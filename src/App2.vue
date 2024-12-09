<script>
export default {
    data() {
        return {
            name: "jhon doe",
            status: "active",
            tasks: ["task one", "task two", "task three"],
            link: "https://www.google.com",
        };
    },
	methods:{
		togglestatus(){
			if (this.status === 'active') {
				this.status = 'pending';
			} else if (this.status === 'pending') {
				this.status = 'inactive';
			} else {
				this.status = 'active';
			}
		}
	}
};
</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">User Is Active</p>
    <p v-else-if="status === 'pending'">User Pending</p>
    <p v-else-if="status">User is Inactive</p>

    <h3>Task</h3>
    <ul>
        <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>

    <!-- <a v-bind:href="link">Click for Google</a> -->
	<a :href="link">Click for Google</a>
	<!-- <button v-on:click="togglestatus">Change Status</button> -->
	<button @click="togglestatus">Change Status</button>
</template>
