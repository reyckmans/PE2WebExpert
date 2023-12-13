<script>

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

</style>