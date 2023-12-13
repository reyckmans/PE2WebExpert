<script>
import {useGebruikerStore} from "@/store/gebruiker";
import {mapState} from "pinia";

export default {
  name: "navBar.vue",
  computed: {
    ...mapState(useGebruikerStore, ['name']),
  },
}
</script>

<template>
  <div class="navbar">
    <img src="../assets/logoRobbePE.png" class="logo">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About us</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/winkelmand">Winkelmand</router-link></li>
      {{name}}

    </ul>
  </div>
</template>

<style scoped lang="scss">
@import 'src/style/_base.scss';

.navbar {
  width: 85%;
  margin: auto;
  padding: 35px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    li {
      list-style: none;
      display: inline-block;
      margin: 0 20px;
      position: relative;

      &:after {
        content: '';
        height: 3px;
        width: 0%;
        background: $blueSite;
        position: absolute;
        left: 0;
        bottom: -10px;
        transition: 0.5s;
      }

      &:hover {
        &:after {
          width: 100%;
        }
      }
    }

    a {
      text-decoration: none;
      color: #ffffff;
      text-transform: uppercase;
    }

    .detailpagetext {
      color: $zwart;
    }
  }
}

.logo {
  width: 100px;
  cursor: pointer;
}

</style>