<script>
import benner from "@/components/bennerHome.vue";
import Footer from "@/components/footer.vue";
import navBar from "@/components/navBar.vue";

export default {
  components: {
    benner,
    Footer,
    navBar,
  },
};
</script>

<template>
  <nav-bar />
  <router-view id="app-container"></router-view>
  <Footer />
</template>

<style>
body {
  height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#app-container {
  flex-grow: 1;
}

#bennerid {
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url(assets/Background.jpeg);
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
