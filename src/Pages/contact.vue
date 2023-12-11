<script>
export default {
  name: "contact"
}
</script>

<template>

  <div class="container_c">
    <form action="action_page.php">

      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name..">

      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name..">

      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="belgium">Belgium</option>
        <option value="netherlands">Netherlands</option>
        <option value="usa">USA</option>
      </select>

      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

      <input type="submit" value="Submit">

    </form>
  </div>

</template>

<style scoped lang="scss">
@import 'src/style/_base.scss';

/*Contact Page*/
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

input[type=submit] {
  background-color: $blueSite;
  color: $background-color;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: $blueSite;
}

.container_c {
  border-radius: 5px;
  background-color: $background-color;
  padding: 20px;
  width: 50vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

</style>