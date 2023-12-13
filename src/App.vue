<script>
import benner from "@/components/bennerHome.vue";
import footer from "@/components/footer.vue";
import SchoenLijst from "@/components/schoenLijst.vue";
import navBar from "@/components/navBar.vue";

export default{
  components: {
      benner,
      footer,
      navBar
  }
}

</script>

<template>
  <nav-bar/>
  <router-view></router-view>
  <footer/>

</template>

<style scoped>
#bennerid {
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(assets/Background.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.banner {
  width: 100%;
  height: 100vh;
}


</style>
