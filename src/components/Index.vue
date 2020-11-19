<template>
  <v-container class="app-content">
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to WARA-INDEX</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        <Menu :menuSelected="menuSelected" :switchMenu="switchMenu" />
      </v-col>
      <v-col md="20">
        <TopList :menuSelected="menuSelected" v-show="menuSelected < 2" />
        <Search v-if="menuSelected === 2" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Menu from "./Menu";
import TopList from "./TopList";
import Search from "./Search";
export default {
  name: "Index",
  data: () => ({
    menuSelected: 0,
    isExpand: false,
  }),
  methods: {
    switchMenu(e) {
      this.menuSelected = e;
    },
  },
  components: {
    Menu,
    TopList,
    Search,
  },
};
</script>
<style src='./style.scss' lang='scss' scoped>
</style>
