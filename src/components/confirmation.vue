<script>
import Completed from "../assets/completed.png";
export default {
  name: "confirmation.vue",
};
</script>

<template>
  <div class="confirmation">
    <div class="inner-conf">
      <img width="70" alt="completed" src="../assets/completed.png" />
      <p>Purchase Completed!</p>
    </div>
    <router-link to="/">
      <button class="confirm-button">Back To Home</button></router-link
    >
  </div>
</template>

<style scoped lang="scss">
@import "src/style/_base.scss";

.confirmation {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.confirm-button {
  widows: 350px;
  height: 50px;
  font-size: large;
  background-color: #19b563;
  color: $background-color;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
}

.inner-conf {
  display: flex;
  font-size: 18;
  align-items: center;
  gap: 20px;
}
</style>
