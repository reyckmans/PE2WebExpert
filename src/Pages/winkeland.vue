<!-- <script>
export default {
  name: "winkeland"
}
</script>

<template>

  <div class="box">
    <h1>WINKELMAND</h1>

  </div>

</template>

<style scoped>
@import 'src/style/_base.scss';

.box{
  background-color: aliceblue;
  padding: 4% 0 4%;
  width: 600px;
  margin: auto;
  text-align: center;

}

</style> -->

<template>
  <div class="cart-container">
    <h1>Winkelmand</h1>
    <div v-if="cart.length === 0" class="empty-cart">
      Winkelmandje is leeg
    </div>
    <ul v-else>
      <li v-for="(product, index) in cart" :key="index" class="cart-item">
        <img :src="product.image" alt="Productafbeelding" class="product-image" />
        <div class="product-details">
          <span class="product-name">{{ product.name }}</span>
          <span class="product-price">€{{ product.price.toFixed(2) }}</span>
        </div>
        <div class="product-actions">
          <button @click="removeFromCart(index)" class="remove-button">Verwijderen</button>
        </div>
      </li>
    </ul>
    <div v-if="cart.length > 0" class="total">
      Totaal: €{{ total.toFixed(2) }}
    </div>
  </div>
</template>

<script>
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
    total() {
      return this.cart.reduce((acc, product) => acc + product.price, 0);
    },
  },
  methods: {
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style scoped>
@import 'src/style/_base.scss';

.cart-container {
  background-color: #f9f9f9;
  padding: 20px;
  width: 80%;
  margin: auto;
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
  max-width: 50px;
  max-height: 50px;
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





