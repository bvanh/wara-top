<template>
  <div>
    <v-text-field
      :value="gameUserId"
      :rules="rules"
      label="Nhập game user id..."
      :error-messages="errorMessage"
      @input="getGameUserId"
      @mousedown="resetInput"
      @keyup.enter="getUserInfo"
    ></v-text-field>
    <v-btn
      depressed
      color="error"
      @click="getUserInfo"
      style="margin-top: 0.3rem"
    >
      Search
    </v-btn>
    <div class="user-info">
      <p><span class="title">User name: </span>{{ username }}</p>
      <p>
        <span class="title">Loại tài khoản: </span>{{ checkTypeUser(username) }}
      </p>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "../api/request";
export default {
  data: () => ({
    rules: [(value) => !!value || "Required."],
    errorMessage: null,
    gameUserId: "",
    username: "",
  }),
  methods: {
    getGameUserId(e) {
      this.gameUserId = e;
    },
    getUserInfo() {
      getUserInfo(this, this.gameUserId);
    },
    checkTypeUser(val) {
      const type = val.slice(0, 3);
      if (type !== "") {
        switch (type) {
          case "*gg":
            return "Tài khoản Google.";
          case "*fb":
            return "Tài khoản Facebook.";
          case "*ap":
            return "Tài khoản Apple.";
          case "*gu":
            return "Tài khoản Khách.";
          default:
            return "Tài khoản Clappigame.";
        }
      }
    },
    resetInput() {
      this.errorMessage = null;
    },
  },
};
</script>

<style src="./style.scss" lang='scss' scoped>
// .user-info{
//     margin-top: 1rem;
// }
</style>