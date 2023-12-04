<script>
import json from "../Json/Product.json"
import schoenCard from "./schoenCard.vue";

export default {
  name: "schoenLijst",
  components: {schoenCard},

  data() {
    return{
      sneakers: json.schoenen
    }
  }
}
</script>

<template>
  <schoenCard v-for="schoen in sneakers" :naam="schoen.naam" :afbeelding="schoen.afbeelding" :prijs="schoen.prijs"/>

</template>

<style scoped>

</style>