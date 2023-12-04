<script>
import navbarindex from "./navBar.vue"
export default {
  name: "benner.vue",
  components:{
    navbarindex
  }
}
</script>

<template>
  <body>
    <div class="banner">
      <navbarindex/>

      <div class="content">
        <h1>YOUR SNEAKER, YOUR STORY</h1>
        <p>Koop je sneakers hier</p>
        <div>
          <a href="login.html"><button class="btn-benner" type="button"><span></span>Login</button></a>
          <button class="btn-benner" type="button"><span></span>Shop</button>
        </div>
      </div>

    </div>
  </body>
</template>

<style scoped>

body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(../assets/Background.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.banner {
  width: 100%;
  height: 100vh;
}




.content {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: #ffffff;
}
.content h1 {
  font-size: 70px;
  margin-top: 80px;
}
.content p {
  margin: 20px auto;
  font-weight: 150;
  line-height: 25px;
}

.btn-benner {
  width: 200px;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid #009688;
  background: transparent;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.btn-benner span {
  background: #009688;
  height: 100%;
  width: 0;
  border-radius: 25px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: 0.5s;
}
.btn-benner:hover span {
  width: 100%;
}
.btn-benner:hover {
  border: none;
}

</style>