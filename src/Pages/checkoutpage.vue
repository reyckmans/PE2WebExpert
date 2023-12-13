<!-- <script>
export default {
  name: "checkoutpage"
}
</script>

<template>

  <div class="box">
    <h1>CHECKOUT PAGE</h1>

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
<script>
export default {
  name: "CheckoutPage",
  data() {
    return {
      useDifferentBilling: false, // Checkbox status
      addressDetails: {
        firstName: "",
        lastName: "",
        country: "",
        street: "",
        houseNumber: "",
        postalCode: "",
      },
      billingDetails: {
        firstName: "",
        lastName: "",
        country: "",
        street: "",
        houseNumber: "",
        postalCode: "",
      },
      orderSummary: [
        { name: "Product 1", price: 10.0, quantity: 2 },
        { name: "Product 2", price: 15.0, quantity: 1 },
        // Voeg hier meer producten toe als dat nodig is
      ],
    };
  },
  computed: {
    total() {
      return this.orderSummary.reduce((acc, product) => acc + product.price * product.quantity, 0);
    },
    totalTax() {
      // Hier kun je je eigen BTW-berekening toevoegen
      return this.total * 0.21;
    },
  },
  methods: {
    goToConfirmationPage() {
      // Simuleer een geslaagde betaling en ga naar de bevestigingspagina
      this.$router.push("/confirmation");
    },
  },
};
</script>

<template>
  <div class="checkout-container">
    <div class="left-section">
      <h2>Adresgegevens</h2>
      <div class="form-group">
        <label>
          Voornaam:
          <input v-model="addressDetails.firstName" type="text" />
        </label>
      </div>
      <div class="form-group">
        <label>
          Achternaam:
          <input v-model="addressDetails.lastName" type="text" />
        </label>
      </div>
      <div class="form-group">
        <label>
          Land:
          <input v-model="addressDetails.country" type="text" />
        </label>
      </div>
      <div class="form-group">
        <label>
          Straat:
          <input v-model="addressDetails.street" type="text" />
        </label>
      </div>
      <div class="form-group">
        <label>
          Huisnummer:
          <input v-model="addressDetails.houseNumber" type="text" />
        </label>
      </div>
      <div class="form-group">
        <label>
          Postcode:
          <input v-model="addressDetails.postalCode" type="text" />
        </label>
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="useDifferentBilling" /> Facturatiegegevens verschillend van adresgegevens
        </label>
      </div>
      <div v-if="useDifferentBilling" class="billing-form">
        <h2>Facturatiegegevens</h2>
        <div class="form-group">
          <label>
            Voornaam:
            <input v-model="billingDetails.firstName" type="text" />
          </label>
        </div>
        <div class="form-group">
          <label>
            Achternaam:
            <input v-model="billingDetails.lastName" type="text" />
          </label>
        </div>
        <div class="form-group">
          <label>
            Land:
            <input v-model="billingDetails.country" type="text" />
          </label>
        </div>
        <div class="form-group">
          <label>
            Straat:
            <input v-model="billingDetails.street" type="text" />
          </label>
        </div>
        <div class="form-group">
          <label>
            Huisnummer:
            <input v-model="billingDetails.houseNumber" type="text" />
          </label>
        </div>
        <div class="form-group">
          <label>
            Postcode:
            <input v-model="billingDetails.postalCode" type="text" />
          </label>
        </div>
      </div>
    </div>
    <div class="right-section">
      <div class="order-summary">
        <h2>Bestellingsoverzicht</h2>
        <ul>
          <li v-for="(product, index) in orderSummary" :key="index">
            {{ product.name }} - €{{ (product.price * product.quantity).toFixed(2) }}
            <span>Aantal: {{ product.quantity }}</span>
          </li>
        </ul>
        <div class="totals">
          <span>Totaal: €{{ total.toFixed(2) }}</span>
          <span>BTW (21%): €{{ totalTax.toFixed(2) }}</span>
        </div>
      </div>
      <button @click="goToConfirmationPage" class="checkout-button">Afrekenen</button>
    </div>
  </div>
</template>

<style scoped>
@import 'src/style/_base.scss';

/* Voeg hier je aangepaste stijlen toe */

.checkout-container {
  display: flex;
  background-color: #f9f9f9;
  padding: 20px;
  width: 80%;
  margin: auto;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.left-section,
.right-section {
  flex-grow: 1;
}

.left-section {
  margin-right: 20px;
}

h2 {
  color: #333;
}

.checkout-button {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

.checkout-button:hover {
  background-color: #218838;
}

.form-group {
  margin-bottom: 15px;
}

.address-section,
.billing-section,
.order-summary {
  margin-bottom: 20px;
}

.billing-form {
  margin-top: 10px;
}

</style>




