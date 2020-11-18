<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { getTopLevel } from "@/api/request";
import { headersLevel } from "./constant";
import { api } from "@/api/api";
const { TOPLEVEL } = api;
export default {
  props: {
    menuSelected: Number,
  },
  data() {
    return {
      headers: [],
      data: [],
    };
  },
  watch: {
    menuSelected: {
      deep: true,
      handler() {
        switch (this.menuSelected) {
          case 1:
            getTopLevel(this, TOPLEVEL, headersLevel);
            break;
          default:
            this.data = [];
            break;
        }
      },
    },
  },
  created() {
    getTopLevel(this, TOPLEVEL, headersLevel);
  },
};
</script>

<style>
</style>