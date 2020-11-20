<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="10"
      :page="page"
      item-key="game_user_id"
      class="elevation-1"
      hide-default-footer
      :show-expand="menuSelected == 0"
      :single-expand="true"
      @item-expanded="loadDetails"
      :expanded="[]"
    >
      <template v-slot:[`item.total_cash`]="{ item }">
        {{ Number(item.total_cash).toLocaleString() }} VNĐ
      </template>
      <template v-slot:expanded-item="{ headers }" v-show="menuSelected === 0">
        <td :colspan="headers.length" style="padding: 1rem">
          <v-simple-table fixed-header height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Value</th>
                  <th>Times</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="dessert in detailCharges"
                  :key="dessert.ref_product_name"
                >
                  <td>{{ dessert.ref_product_name }}</td>
                  <td>{{ dessert.cash.toLocaleString() }} VNĐ</td>
                  <td>{{ dessert.times }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </td>
      </template>
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
import { getTopList, getChargesByUser } from "@/api/request";
import { headersLevel, headersNap, headersNapByUser } from "./constant";
import { api } from "@/api/api";
const { TOPLEVEL, TOPCASH } = api;
export default {
  props: {
    menuSelected: Number,
  },
  data() {
    return {
      isExpand: true,
      headers: [],
      headerNapByUser: headersNapByUser,
      detailCharges: [],
      data: [],
      page: 1,
    };
  },
  methods: {
    switchPage(e) {
      this.page = e;
    },
    loadDetails({ item }) {
      //console.log(item);
      getChargesByUser(this, item.game_user_id);
    },
  },
  watch: {
    menuSelected: {
      deep: true,
      handler() {
        switch (this.menuSelected) {
          case 0:
            getTopList(this, TOPCASH, headersNap);
            return;
          case 1:
            getTopList(this, TOPLEVEL, headersLevel);
            return;
          default:
            break;
        }
      },
    },
  },
  created() {
    switch (this.menuSelected) {
      case 0:
        getTopList(this, TOPCASH, headersNap);
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
  margin-top: 1rem !important;
}
</style>