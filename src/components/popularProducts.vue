<script>
import { mapState, mapActions } from "pinia";
import { useShoeStockRoom } from "../store/shoe-stockroom-store";
import schoenLijst from "./schoenLijst.vue";

export default {
  name: "confirmation.vue",
  components: { schoenLijst },

  computed: {
    ...mapState(useShoeStockRoom, ["shoes"]),
    mostPopular() {
      return this.shoes
        .map((shoe) => ({
          ...shoe,
          totalStock: Object.values(shoe.maten).reduce(
            (total, maat) => total + maat,
            0
          ),
        }))
        .sort((shoe1, shoe2) => shoe2.totalStock - shoe1.totalStock)
        .slice(0, 3);
    },
  },
};
</script>

<template>
  <div id="popular-products">
    <div class="inner">
      <schoen-lijst :shoes="mostPopular" />
    </div>
    <h2 class="titel_Discover h1_text">Most Popular!</h2>
  </div>
</template>

<style scoped lang="scss">
@import "src/style/_base.scss";

#popular-products {
  display: flex;
  flex-direction: column;

  .inner {
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 20px;
  }
}
</style>
