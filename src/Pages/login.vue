<script>
import benner from "@/components/bennerHome.vue";

export default {
  name: "login",
  data(){
    return{
      products: []
    }
  },
  components: {
    benner
  }
}
</script>

<template>

  <div class="container">
    <div class="form">
      <h2>Login</h2>
      <form action="#" class="login-form">
        <input type="text" name="username" placeholder="Username">
        <input type="text" name="password" placeholder="Password">
        <button type="submit" class="btn">Login</button>
        <p class="message">Already registered?<a href="#"> Sign in</a></p>
        <p class="message">Forgot your password? <a href="#">Change Password</a></p>
      </form>
      <form action="#" class="register-form">
        <input type="text" name="email" placeholder="Email">
        <input type="text" name="password" placeholder="Password">
        <button type="submit" class="btn">Submit</button>
        <p class="message">New User? <a href="#">Create an account</a></p>
      </form>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import 'src/style/_base.scss';

/* Login page*/
.container {
  padding: 8% 0 0;
  width: 365px;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  max-width: 350px;
  margin: 0 auto 100px;
  padding: 30px 45px 30px 45px;
  background: $background-color;

  h2 {
    text-align: center;
    color: $blueSite;
    padding: 5px;
  }
}

.form {
  input {
    @include input;

    ::placeholder {
      color: $graycolor;
    }
  }

  .btn {
    @include btn;
    border-radius: 25px;
  }

  .message {
    @include message;
    margin: 10px 0;

    a {
      text-decoration: none;
      color: $blueSite;
    }
  }
}

.form .register-form {
  display: none;
}

</style>