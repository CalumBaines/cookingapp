<template>
	<div class="flex flex-col bg-white rounded shadow-lg rounded overflow-hidden">
		<img class="w-full" src="https://source.unsplash.com/user/kevinmccutcheon/500x400" alt="">
		<div class="p-5">
			<div class="flex pb-3">
				<p class="text-xl">{{title}}</p>
				<svg class="ml-auto stroke-current fill-current text-gray-600 text"
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path class="heroicon-ui"
					d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07
					7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"/>
				</svg>
			</div>
			<p class="text-gray-500">{{description}}</p>
			<div class="flex pt-5 items-center justify-center">
				<span class="text-gray-600">32 likes</span>
				<span class="px-3 text-gray-500">&#8226;</span>
				<span class="text-gray-600">8 comments</span>
				<button class="ml-auto bg-transparent text-green-500 font-semibold py-1 px-2 border-2 border-green-500 rounded">
				Save
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    title: {
			type: String
		},
		description: {
			type: String
		},
  },
};
</script>
