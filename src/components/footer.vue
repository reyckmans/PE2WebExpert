<script>
export default {
  name: "footer.vue"
}
</script>

<template>

  <footer>
    <h2 class="h2_footer">Quick links</h2>
    <p class="p_footer"><a href="#">HOME</a> <a href="#sAboud_us">ABOUT US</a> <a href="#">SHOP</a> <a
        href="contact.html">CONTACT</a> <a href="login.html">LOGIN</a></p>
    <p><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-tiktok"></i> <i class="fa-brands fa-instagram"></i>
    </p>
  </footer>

</template>

<style scoped lang="scss">
@import 'src/style/_base.scss';

footer {
  text-align: center;
  background-color: $blueSite;

  a {
    padding: 40px 40px 0px 40px;
    text-decoration: none;
    color: $background-color;
  }
}

.h2_footer {
  padding: 10px;
  color: $background-color;
}

.p_footer {
  padding: 10px;
}

</style>