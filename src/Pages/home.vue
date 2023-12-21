<script>
import benner from "@/components/bennerHome.vue";
import About from "@/Pages/about.vue";
import popularProducts from "../components/popularProducts.vue";

export default {
  name: "home",
  setup() {},
  data() {
    return {
      products: [],
    };
  },
  components: {
    About,
    benner,
    popularProducts,
  },
};
</script>

<template>
  <benner />

  <h1 class="titel_Discover h1_text">
    Discover our variety of Exclusive Products
  </h1>

  <section>
    <popularProducts />
  </section>

  <about />
</template>

<style scoped lang="scss">
@import "src/style/_base.scss";

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
