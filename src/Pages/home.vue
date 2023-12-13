<script>

import benner from "@/components/bennerHome.vue";
import about from "@/Pages/about.vue";
import About from "@/Pages/about.vue";

export default {
  name: "home",
  data() {
    return {
      products: []
    }
  },
  components: {
    About,
    benner
  },

}
</script>

<template>
  <benner/>

  <h1 class="titel_Discover h1_text">Discover our variety of Exclusive Products</h1>

  <section id="scards">
    <div class="card">
      <img class="card-img" src="src/assets/Jordan1LowTravis.jpg" alt="Jordan 1 High">
      <div class="container">
        <h2 class="card-header">Jordan 1 Low</h2>
        <a href="detailpage.html">
          <button class="btn-card">Koop Nu</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img class="card-img" src="src/assets/Ybred.jpg" alt="Yeezy 350 V2">
      <div class="container">
        <h2 class="card-header">Yeezy 350 V2</h2>
        <a href="detailpage.html">
          <button class="btn-card">Koop Nu</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img class="card-img" src="src/assets/DunkJarritos.jpg" alt="Nike Dunk Low">
      <div class="container">
        <h2 class="card-header">Nike Dunk Low</h2>
        <a href="detailpage.html">
          <button class="btn-card">Koop Nu</button>
        </a>
      </div>
    </div>
  </section>

  <about/>

</template>

<style scoped lang="scss">
@import 'src/style/_base.scss';

.titel_Discover {
  text-align: center;
  padding: 45px 0px 0px 0px;
}

.h1_text {
  color: $blueSite;
  font-family: Montserrat, sans-serif;
  font-size: 40pt;
}

.fa-brands {
  color: $background-color;
  font-size: 25pt;
  margin: 10px;
}

</style>