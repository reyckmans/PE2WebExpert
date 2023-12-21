import { defineStore } from "pinia";
import json from "../Json/Product.json";

export const useShoeStockRoom = defineStore("shoe-stockroom", {
  state: () => {
    return { shoes: json.schoenen };
  },
  actions: {
    // when we add it to our cart
    removeShoeFromStock(shoeId, maat) {
      const shoe = this.shoes.find((s) => s.id === shoeId);
      if (shoe && shoe.maten[maat] !== 0) {
        shoe.maten[maat]--;
        return true;
      }
      return false;
    },
    // when we decide to remove it from our cart
    addShoeFromStock(shoeId, maat) {
      const shoe = this.shoes.find((s) => s.id === shoeId);
      if (shoe) {
        shoe.maten[maat]++;
        return true;
      }
      return false;
    },
  },
});
