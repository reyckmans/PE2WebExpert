<script>
import { useGebruikerStore } from "@/store/gebruiker";
import { useShoeStockRoom } from "../store/shoe-stockroom-store";
import { mapState, mapActions } from "pinia";

export default {
  name: "detailpage",
  data() {
    return {
      gekozenMaat: null,
    };
  },
  methods: {
    terugNaarShop() {
      this.$router.go(-1);
    },
    ...mapActions(useGebruikerStore, ["voegItemToeAanWinkelmand"]),
  },
  computed: {
    ...mapState(useShoeStockRoom, ["shoes"]),
    ...mapState(useGebruikerStore, ["aangemeldeGebruiker"]),
    gekozenschoen() {
      return this.shoes.find(
        (shoe) => shoe.id.toString() === this.$route.params.id
      );
    },
  },
};
</script>
<template>
  <section class="scards_shop">
    <div class="card_shop_detail">
      <div class="container_shop">
        <button @click="terugNaarShop" class="btn-card_shop">terug</button>
        <i class="fa-regular fa-heart"></i>
      </div>
      <img
        class="card-img_shop"
        :src="'/src/assets/' + gekozenschoen.afbeelding"
        alt="schoen"
      />
    </div>

    <div class="card_shop_detail">
      <h1 class="card-header_shop">{{ gekozenschoen.naam }}</h1>
      <h3>€{{ gekozenschoen.prijs }}</h3>
      <p>{{ gekozenschoen.omschrijving }}</p>

      <div class="maat-container">
        <button
          :disabled="value === 0"
          :style="{
            color: gekozenMaat === key ? '#009688' : 'inherit',
            fontWeight: gekozenMaat === key ? 'bold' : 'inherit',
          }"
          v-for="(value, key) in gekozenschoen.maten"
          @click="() => (gekozenMaat = key)"
        >
          {{ key }}
        </button>
      </div>

      <button
        v-if="aangemeldeGebruiker !== null"
        @click="() => voegItemToeAanWinkelmand(gekozenschoen.id, gekozenMaat)"
        class="btn-card_shop"
      >
        ADD TO CART
      </button>
      <router-link v-else to="/login"
        ><button style="color: #009688" class="btn-benner" type="button">
          Login
        </button></router-link
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "src/style/_base.scss";

h3 {
  font-size: 17pt;
  color: #009688;
}

/*detail page*/

.maat-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3px;
  margin: 3px;

  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    cursor: pointer;
    font-family: arial, sans-serif;
    font-size: 18px;
    height: 36px;
    line-height: 27px;
    min-width: 54px;
    padding: 0 16px;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: pre;
  }

  button:hover {
    border-color: #dadce0;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
    color: #202124;
  }

  button:disabled {
    background-color: #dfe0e2;
    color: #504d50 !important;
    outline: none;
  }
}

.scards_shop {
  width: 100%;
  padding: 35px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card_shop_detail {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  background-color: $background-color;
}

.card-img_shop {
  width: 100%;
  height: auto;
}

.container_shop {
  padding: 2px 16px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.card-header_shop {
  width: 100%;
  color: $blueSite;
  font-weight: 500;
  font-size: 30pt;
  text-align: center;
}

.btn-card_shop {
  width: 200px;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: $fontweightbold;
  border: 2px solid $blueSite;
  background: transparent;
  color: $blueSite;
  cursor: pointer;
  position: relative;

  &:hover {
    background: $blueSite;
    color: $background-color;
  }
}
</style>
