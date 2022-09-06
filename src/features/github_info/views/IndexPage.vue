<template>
  <div class="container">
    <h3 class="text-center mt-5 mb-5">GitHub Repositories API Call</h3>
    <GitHubCard />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GitHubCard from "@/features/github_info/components/ListCard.vue";
export default Vue.extend({
  components: { GitHubCard },
});
</script>

<style>
</style>
