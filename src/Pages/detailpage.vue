<script>
import json from "@/Json/Product.json";

export default {
  name: "detailpage",
  data() {
    return{
      sneakers: json.schoenen
    }
  },
  computed: {
    gekozenschoen(){
      return this.sneakers.find(sneaker => sneaker.id.toString() === this.$route.params.id )
    }
  }
}
</script>

<template>
  <section class="scards_shop">
    <div class="card_shop_detail">
      <img class="card-img_shop" src="assets/Jordan1.png" alt="Jordan 1 High">
      <div class="container_shop">
        <a href="detailpage.html">
          <button class="btn-card_shop">Koop Nu</button>
        </a>
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>

    <div class="card_shop_detail">
      <h1 class="card-header_shop"> {{gekozenschoen.naam}} </h1>
      <h3>{{ gekozenschoen.prijs }}</h3>
      <p>{{gekozenschoen.omschrijving}}</p>
      <button>39</button>
      <button>40</button>
      <button>41</button>
      <button>42</button>
      <button>43</button>
      <button>44</button>
      <button>45</button>
      <button>46</button>
      <button>47</button>

      <button class="btn-card_shop">ADD TO CART</button>
    </div>
  </section>


</template>

<style scoped lang="scss">
@import 'src/style/_base.scss';

h3{
  font-size: 17pt;
  color: #009688;
}
/*detail page*/

.scards_shop{
  width: 100%;
  padding: 35px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card_shop_detail{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 25%;
  background-color: $background-color;
}

.card-img_shop{
  width: 100%;
  height: auto;
}

.container_shop {
  padding: 2px 16px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.card-header_shop{
  width: 100%;
  color: $blueSite;
  font-weight: 500;
  font-size: 30pt;
  text-align: center;
}



.btn-card_shop{
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

  &:hover{
    background: $blueSite;
    color: $background-color;
  }
}


</style>