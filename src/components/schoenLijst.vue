<script>
import ShoeCard from "./shoe-card.vue";

export default {
  name: "schoenLijst",
  components: { ShoeCard },
  data() {
    return {
      currentTab: 0,
    };
  },
  props: {
    shoes: [],
  },
  methods: {
    goToDetailPage(id, stock) {
      if (stock !== 0) {
        this.$router.push(`/detailpage/${id}`);
      }
    },
  },
  computed: {
    tabs() {
      return Math.ceil(this.shoes.length / 8);
    },
    pageShoes() {
      return this.shoes.slice(this.currentTab * 8, this.currentTab * 8 + 8);
    },
  },
};
</script>

<template>
  <div id="schoenLijst">
    <div v-if="tabs > 1" id="pagination">
      <button @click="() => (currentTab = n - 1)" v-for="n in tabs">
        {{ n }}
      </button>
    </div>
    <div class="inner">
      <ShoeCard
        @click="() => goToDetailPage(shoe.id, shoe.stock)"
        v-for="shoe in pageShoes"
        :shoe="shoe"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/style/_base.scss";

#schoenLijst {
  padding: 20px;
}

#pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  button {
    font-size: x-large;
    padding: 5px;
  }
  margin-bottom: 50px;
}

.inner {
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 50px;
}
</style>
