<script>
import { useGebruikerStore } from "@/store/gebruiker";
import { useShoeStockRoom } from "../store/shoe-stockroom-store";
import { mapState, mapActions } from "pinia";

export default {
  name: "Winkelmand",
  data() {
    return {
      cart: [
        { name: "Product 1", price: 10.0, image: "path/to/product1.jpg" },
        { name: "Product 2", price: 15.0, image: "path/to/product2.jpg" },
        // Voeg hier meer producten toe als dat nodig is
      ],
    };
  },
  computed: {
    ...mapState(useGebruikerStore, ["aangemeldeGebruiker"]),
    ...mapState(useShoeStockRoom, ["shoes"]),
    cartItems() {
      if (this.aangemeldeGebruiker) {
        return this.aangemeldeGebruiker.winkelmand.map((item) => {
          const shoe = this.shoes.find((shoe) => shoe.id === item.schoenId);
          if (shoe) {
            return { ...shoe, gekozenMaat: item.maat };
          }
          return undefined;
        });
      }
      return [];
    },
    total() {
      return this.cartItems.reduce(
        (total, product) => total + product.prijs,
        0
      );
    },
  },
  methods: {
    // ...mapActions(useShoeStockRoom, ["removeShoeFromStock"]),
    ...mapActions(useGebruikerStore, ["verwijderItemUitWinkelmand"]),
    /*  removeFromCart(schoenId) {
      this.removeShoeFromStock(schoenId);
      this.verwijderItemUitWinkelmand(schoenId);
    }, */
  },
};
</script>

<template>
  <div class="cart-container">
    <h1>Winkelmand</h1>
    <div v-if="cart.length === 0" class="empty-cart">Winkelmandje is leeg</div>
    <ul v-else>
      <li v-for="item in cartItems" :key="index" class="cart-item">
        <img
          :src="'/src/assets/' + item.afbeelding"
          alt="Productafbeelding"
          height="150"
          class="product-image"
        />
        <div class="product-details">
          <span class="product-name">{{ item.naam }}</span>
          <span class="product-name">{{ item.gekozenMaat }}</span>
          <span class="product-price">€{{ item.prijs }}</span>
        </div>
        <div class="product-actions">
          <button
            @click="verwijderItemUitWinkelmand(item.id, item.gekozenMaat)"
            class="remove-button"
          >
            Verwijderen
          </button>
        </div>
      </li>
    </ul>
    <div>
      <div v-if="cart.length > 0" class="total">
        Totaal: €{{ total.toFixed(2) }}
      </div>
      <router-link to="/checkoutpage">
        <button>Proceed To Checkout</button></router-link
      >
    </div>
  </div>
</template>

<style scoped>
@import "src/style/_base.scss";

.cart-container {
  background-color: #f9f9f9;
  padding: 20px;
  width: 80%;
  margin: 50px auto;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h1 {
  color: #333;
}

.empty-cart {
  margin-top: 20px;
  color: #888;
}

ul {
  list-style: none;
  padding: 0;
}

.cart-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.product-image {
  margin-right: 10px;
  border-radius: 4px;
}

.product-details {
  flex-grow: 1;
  text-align: left;
  margin-bottom: 10px;
}

.product-name {
  font-weight: bold;
  display: block;
}

.product-price {
  display: block;
  color: #555;
  text-align: center;
}

.product-actions {
  text-align: right;
  flex-basis: 100%;
}

.remove-button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #c82333;
}

.total {
  margin-top: 10px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-details {
    text-align: center;
    margin-bottom: 5px;
  }

  .product-price {
    text-align: center;
  }

  .product-actions {
    text-align: center;
  }
}
</style>
