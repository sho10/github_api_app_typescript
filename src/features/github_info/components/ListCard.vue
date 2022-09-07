<template>
  <div class="mt-5 mb-5">
    <p>Type word to search for repositories</p>
    <b-form-input
      v-model="content"
      placeholder="Enter to Search"
      v-on:input="getGitHubRepo"
    ></b-form-input>
    <p class="mt-5 mb-5">
      Search Results: {{ this.gitHubRepo ? this.gitHubRepo.length : 0 }}
    </p>
    <div class="ml-1 mr-1">
      <b-table
        striped
        responsive="md"
        hover
        class="mt-5 mb-5"
        :current-page="currentPage"
        :per-page="perPage"
        :items="gitHubRepo"
        :fields="fields"
      >
        <template v-slot:cell(html_url)="{ item }">
          <b-link :href="item.html_url">
            {{ item.html_url }}
          </b-link>
        </template>
      </b-table>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      class="d-flex justify-content-center mt-4"
    >
    </b-pagination>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Debounce } from "../../../utils/throttle";
import { fetchGitHubRequest } from "../api";
export default Vue.extend({
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      gitHubRepo: [] as Array<{ full_name: string; html_url: string }>,
      content: "",
      fields: [
        { key: "full_name", label: "Repo. Name" },
        { key: "html_url", label: "URL" },
      ],
    };
  },
  computed: {
    rows(): number {
      if (!this.gitHubRepo) {
        return 0;
      } else {
        return this.gitHubRepo.length;
      }
    },
  },
  methods: {
    async getGitHubRepo() {
      Debounce(10000);
      this.gitHubRepo = await fetchGitHubRequest(String(this.content));
    },
  },
});
</script>
