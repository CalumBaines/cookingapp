<template>
	<div id="app" class="bg-gray-100">
		<Header/>
		<router-view/>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import "./assets/css/tailwind.css";

export default {
	components: {
		Header
	},
};
</script>

<style>
@import url("./assets/css/tailwind.css");
</style>
