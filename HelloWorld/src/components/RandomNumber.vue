<template>
	<h1>Welcome to Unit Testing! </h1>
	<button @click="genRanNum()">Generate random Number </button>
	<h2>{{ random_number }}</h2>
</template>

<script>
export default {
	name: 'RandomNumber',
	data() {
		return {
			random_number: 0
		}
	},
	props: {
		min: { type: Number, default: 1 },
		max: { type: Number, default: 10 }
	},
	methods: {
		genRanNum() {
			this.random_number = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) // generate random number from 1 to 10
		}
	}
}
</script >

   