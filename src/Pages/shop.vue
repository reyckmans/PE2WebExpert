<!-- <script>

import schoenLijst from "@/components/schoenLijst.vue";

export default {
  name: "shop",
  components: {schoenLijst},
}

</script>

<template>
  <schoen-lijst/>
</template>

<style scoped lang="scss">
@import 'src/style/_base.scss';

.main-producten {
  @include flex-between();
  width: 90%;
  margin: 5rem auto;
}

.scards_shop {
  width: 100%;
  padding: 35px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card_shop {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  margin: 20px;
  background-color: $background-color;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
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

.card-img_shop {
  width: 100%;
  height: auto;
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

#body_shop {
  background-color: $grijsachtergrond;
}

.fa-regular {
  color: $blueSite;
  font-size: 25pt;
  margin: 0 auto;
  margin-top: 25px;
}

/* section cards*/
#scards {
  width: 100%;
  padding: 35px 0;
  display: flex;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  margin: 20px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}


.container {
  padding: 2px 16px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card-header {
  width: 100%;
  color: $blueSite;
  font-weight: 500;
  font-size: 30pt;
  text-align: center;
}

.card-img {
  width: 100%;
  height: auto;
}

.btn-card {
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

.filter-col {
  width: 30%;
}

@media screen and (max-width: 1000px) {
  .main-producten {
    flex-direction: column;
  }
}

</style> -->

<template>
  <div>
    <div class="container_filter">

      <div class="filter">
        <!-- Filter dropdown voor merk -->
        <label for="merk" class="tekst_filter">Selecteer Merk:</label>
        <select id="merk" v-model="geselecteerdMerk" @change="filterSchoenen">
          <option value="alle">Alle Merken</option>
          <option value="NIKE">NIKE</option>
          <option value="JORDAN">JORDAN</option>
          <option value="YEEZY">YEEZY</option>
        </select>
      </div>
      <div class="filter">
        <!-- Filter dropdown voor prijs -->
        <label for="prijs" class="tekst_filter">Selecteer Prijs:</label>
        <select id="prijs" v-model="geselecteerdePrijs" @change="filterSchoenen">
          <option value="alle">Alle Prijzen</option>
          <option value="200-400">200-400</option>
          <option value="400-700">400-700</option>
          <option value="700-1500">700-1500</option>
          <!-- Voeg meer opties toe indien nodig -->
        </select>
      </div>
    </div>
    <!-- De lijst met schoenen -->
    <div class="container">
      <schoen-lijst :gefilterdeSchoenen="gefilterdeSchoenen"/>
    </div>
  </div>
</template>

<script>
import schoenLijst from "@/components/schoenLijst.vue";

export default {
  name: "shop",
  components: {schoenLijst},
  data() {
    return {
      geselecteerdMerk: "alle",
      geselecteerdePrijs: "alle",
      // Voeg hier je schoenenlijst toe (bijv. schoenen: [...])
    };
  },
  computed: {
    gefilterdeSchoenen() {
      // Voeg hier de logica toe om de schoenen te filteren op basis van geselecteerde waarden
      // Gebruik this.geselecteerdMerk en this.geselecteerdePrijs om de geselecteerde waarden op te halen
      // Return de gefilterde lijst met schoenen
      // Bijvoorbeeld: return this.schoenen.filter(schoen => ...)
    },
  },
  methods: {
    filterSchoenen() {
      // Roep deze methode aan wanneer de gebruiker een filteroptie selecteert
      // Pas hier de gefilterdeSchoenen aan op basis van de geselecteerde waarden
    },
  },
};
</script>

<style scoped lang="scss">
/* Voeg hier je CSS-styling toe indien nodig */

@import 'src/style/_base.scss';

.container {
  display: flex;
  width: 100%;
}

.container_filter {
  display: flex;
  justify-content: center;
}

.filter{
  padding: 50px;
}

.tekst_filter{
  color: $blueSite;
  font-size: 16pt;
  font-weight: bold;
}

.main-producten {
  @include flex-between();
  width: 90%;
  margin: 5rem auto;
}

.scards_shop {
  width: 100%;
  padding: 35px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card_shop {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  margin: 20px;
  background-color: $background-color;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
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

.card-img_shop {
  width: 100%;
  height: auto;
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

#body_shop {
  background-color: $grijsachtergrond;
}

.fa-regular {
  color: $blueSite;
  font-size: 25pt;
  margin: 0 auto;
  margin-top: 25px;
}

/* section cards*/
#scards {
  width: 100%;
  padding: 35px 0;
  display: flex;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  margin: 20px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}


.container {
  padding: 2px 16px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card-header {
  width: 100%;
  color: $blueSite;
  font-weight: 500;
  font-size: 30pt;
  text-align: center;
}

.card-img {
  width: 100%;
  height: auto;
}

.btn-card {
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

.filter-col {
  width: 30%;
}

@media screen and (max-width: 1000px) {
  .main-producten {
    flex-direction: column;
  }
}
</style>







