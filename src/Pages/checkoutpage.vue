<script>
import { useGebruikerStore } from "@/store/gebruiker";
import { useShoeStockRoom } from "../store/shoe-stockroom-store";
import { mapState, mapActions } from "pinia";
import confirmation from "../components/confirmation.vue";

export default {
  name: "CheckoutPage",
  components: {
    confirmation,
  },
  data() {
    return {
      hasPaid: false,
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
    };
  },
  computed: {
    ...mapState(useGebruikerStore, ["aangemeldeGebruiker"]),
    ...mapState(useGebruikerStore, ["totaal"]),
    ...mapState(useGebruikerStore, ["totaalMetBtw"]),
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
    summary() {
      return this.cartItems?.reduce((inital, item) => {
        const key = `${item.id}-${item.gekozenMaat}`;
        if (inital[key]) {
          inital[key] = {
            ...item,
            amount: inital[key].amount + 1,
            prijs: inital[key].prijs + item.prijs,
          };
        } else {
          inital[key] = { ...item, amount: 1 };
        }
        return { ...inital };
      }, {});
    },
    totaal() {
      return Object.values(this.summary).reduce(
        (totaal, item) => totaal + item.prijs,
        0
      );
    },
    totaalMetBtw() {
      return this.totaal * 1.21;
    },
  },
  mounted() {
    this.addressDetails.firstName = this.aangemeldeGebruiker.voornaam;
    this.addressDetails.lastName = this.aangemeldeGebruiker.achternaam;
    this.addressDetails.country = this.aangemeldeGebruiker.land;
    this.addressDetails.street = this.aangemeldeGebruiker.straat;
    this.addressDetails.houseNumber = this.aangemeldeGebruiker.huisnummer;
    this.addressDetails.postalCode = this.aangemeldeGebruiker.postcode;
  },
  methods: {
    ...mapActions(useGebruikerStore, ["maakWinkelmandVrij"]),
    payForCart() {
      this.maakWinkelmandVrij();
      this.hasPaid = true;
    },
  },
};
</script>

<template>
  <div class="checkout-container">
    <div v-if="!hasPaid" class="left-section">
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
          <input type="checkbox" v-model="useDifferentBilling" />
          Facturatiegegevens verschillend van adresgegevens
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
    <div v-if="!hasPaid" class="right-section">
      <div class="order-summary">
        <h2>Bestellingsoverzicht</h2>
        <ul>
          <li v-for="(value, key) in summary" :key="index">
            <p>{{ `${value.naam} x ${value.amount}` }}</p>
            <p>Maat: {{ value.gekozenMaat }}</p>
            <img
              width="70"
              :src="'/src/assets/' + value.afbeelding"
              alt="schoen"
            />
            <p>Prijs: €{{ value.prijs }}</p>
          </li>
        </ul>
        <div class="totals">
          <p>-----------------------</p>
          <p>Totaal: €{{ totaal.toFixed(2) }}</p>
          <p>BTW (21%): €{{ totaalMetBtw.toFixed(2) }}</p>
        </div>
      </div>
      <button @click="payForCart" class="checkout-button">Afrekenen</button>
    </div>
    <confirmation v-else />
  </div>
</template>

<style scoped>
@import "src/style/_base.scss";

/* Voeg hier je aangepaste stijlen toe */

.checkout-container {
  display: flex;
  background-color: #f9f9f9;
  padding: 20px;
  width: 80%;
  margin: 50px auto;
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
