<template>
  <v-card class="mx-auto" max-width="100%" tile>
    <v-list rounded>
      <v-subheader class='font-weight-bold'>REPORTS</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Top Nạp", icon: "mdi-alpha-c-circle-outline" },
      { text: "Top Level", icon: "mdi-alpha-l-circle-outline" },
      { text: "Real-Time", icon: "mdi-clock" },
    ],
  }),
};
</script>

<style>
</style>