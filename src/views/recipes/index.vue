<template>
    <div class="container mx-auto mt-20">
        <div class="flex -mx-2">
            <div class="w-1/4 px-2">
                <div class="bg-white w-full rounded">
                    <div class="md:flex bg-white rounded-lg p-4">
                        <img class="h-16 w-16 rounded-full mx-auto md:mx-0 md:mr-6" src="img/Avatar.png">
                        <div class="text-center md:text-left">
                            <h2 class="text-base font-semibold">Nick Evans</h2>
                            <div class="text-sm text-gray-600">Potato Master</div>
                            <div class="flex pt-2 items-center justify-center text-xs">
                                <span class="text-gray-600">584 followers</span>
                                <span class="px-3 text-gray-500">&#8226;</span>
                                <span class="text-gray-600">20k likes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="w-3/4 px-2 -mx-2 flex flex-wrap">
                <li class="w-1/2 px-2 pb-4" v-for="recipe in recipes" :key="recipe.id">
                    <recipe-card
                        :title="recipe.title"
                        :description="recipe.description"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import RecipesService from '@/services/RecipesService';
import RecipeCard from '@/components/RecipeCard.vue';
import { mapGetters } from "vuex";

    export default {
        name: "Recipes",
        components: {
            RecipeCard
        },
        data() {
            return {
                recipes: null
            }
        },
        computed: {
            ...mapGetters(["user"])
        },

        async mounted() {
            console.log(this.user.id);
            this.recipes = (await RecipesService.index({
                params: {
                    userId: this.user.id
                }
            })).data
        },
    }
</script>

<style lang="scss" scoped>

</style>