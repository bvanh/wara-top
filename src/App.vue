<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h2 class="shrink mt-1 hidden-sm-and-down">WARA</h2>
      </div>
      <v-spacer></v-spacer>
      <!-- <v-btn
        href="https://dl.clappigames.com/wara/WARA.VN-release_1016_1.apk"
        text
      >
        <span class="mr-2">DOWNLOAD</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <Index />
    </v-main>
  </v-app>
</template>

<script>
import Index from "./components/Index";

export default {
  name: "App",
  components: {
    Index,
  },

  data: () => ({
    //
  }),
};
</script>
<style src='./style.scss' lang='scss'>
</style>