<template>
  <v-container class="app-content">
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to WARA</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        <Menu />
      </v-col>
      <v-col md="20">
        <TopNap />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Menu from "./Menu";
import TopNap from "./TopNap";
export default {
  name: "Index",
  data: () => ({
    demo: "",
  }),
  components: {
    Menu,
    TopNap,
  },
};
</script>
<style src='./style.scss' lang='scss' scoped>
</style>
