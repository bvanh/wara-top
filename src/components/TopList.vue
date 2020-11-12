<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="10"
      :page="page"
      class="elevation-1"
      hide-default-footer
    >
    </v-data-table>
    <v-pagination
      class="pagination"
      v-model="page"
      :length="data.length / 10"
      circle
      @input="switchPage"
    ></v-pagination>
  </div>
</template>

<script>
import { getTopList } from "@/api/request";
import { headersLevel, headersNap } from "./constant";
import { api } from "@/api/api";
const { TOPLEVEL, TOPCASH } = api;
export default {
  props: {
    menuSelected: Number,
  },
  data() {
    return {
      headers: [],
      data: [],
      page: 1,
    };
  },
  methods: {
    switchPage(e) {
      this.page = e;
    },
  },
  watch: {
    menuSelected: {
      deep: true,
      handler() {
        switch (this.menuSelected) {
          case 1:
            getTopList(this, TOPLEVEL, headersLevel);
            break;
          case 0:
            getTopList(this, TOPCASH, headersNap);
            break;
          default:
            this.data = [];
            break;
        }
      },
    },
  },
  created() {
    switch (this.menuSelected) {
      case 1:
        getTopList(this, TOPLEVEL, headersLevel);
        break;
      default:
        this.data = [];
        break;
    }
  },
};
</script>

<style lang='scss'>
.v-pagination {
  justify-content: flex-end !important;
  margin-top: 1rem;
}
</style>