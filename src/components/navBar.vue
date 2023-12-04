<script>
export default {
  name: "navBar.vue"
}
</script>

<template>
  <div class="navbar">
    <img src="../assets/logoRobbePE.png" class="logo">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#sAboud_us">About us</a></li>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="login.html">Login</a></li>

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