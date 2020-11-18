<template>
  <div>
    <v-text-field
      :value="gameUserId"
      label="Nhập game user id..."
      @change="getGameUserId"
    ></v-text-field>
    <v-btn depressed color="error" @click="getUserInfo"> Search </v-btn>
    <div class="user-info">
      <p><span class="title">User name: </span>{{ username }}</p>
      <p><span class="title">Loại tài khoản: </span></p>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "../api/request";
export default {
  data: () => ({
    gameUserId: "",
    username: "",
  }),
  methods: {
    getGameUserId(e) {
      this.getGameUserId = e;
    },
    getUserInfo() {
      getUserInfo(this, this.getGameUserId);
    },
  },
};
</script>

<style src="./style.scss" lang='scss' scoped>
// .user-info{
//     margin-top: 1rem;
// }
</style>