<script>
import json from "../Json/Product.json"
import schoenCard from "./schoenCard.vue";

export default {
  name: "schoenLijst",
  components: {schoenCard},

  data() {
    return {
      sneakers: json.schoenen
    }
  },
  methods: {
    goToDetailPage(id) {
        this.$router.push(`/detailpage/${id}`)
    },
  }
}

</script>

<template>
    <schoenCard @click="()=>goToDetailPage(schoen.id)" v-for="schoen in sneakers" :naam="schoen.naam" :afbeelding="schoen.afbeelding" :prijs="schoen.prijs"/>
</template>

<style scoped lang="scss">
@import 'src/style/_base.scss';

</style>