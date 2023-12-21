import { defineStore } from "pinia";
import { useShoeStockRoom } from "../store/shoe-stockroom-store";

const gebruikers = [
  {
    gebruikersnaam: "robbe",
    wachtwoord: "robbe",
    voornaam: "Robbe",
    achternaam: "Eyckmans",
    land: "België",
    straat: "Teugelstraat",
    huisnummer: 1,
    postcode: 3920,
    winkelmand: [],
  },
  {
    gebruikersnaam: "senne",
    wachtwoord: "senne",
    voornaam: "Senne",
    achternaam: "Meynckens",
    land: "België",
    straat: "Langestraat",
    huisnummer: 19,
    postcode: 2000,
    winkelmand: [],
  },
];

export const useGebruikerStore = defineStore("gebruiker", {
  state: () => {
    return { aangemeldeGebruiker: null };
  },
  getters: {},
  actions: {
    voegItemToeAanWinkelmand(schoenId, maat) {
      const shoeStockRoomStore = useShoeStockRoom();
      if (shoeStockRoomStore.removeShoeFromStock(schoenId, maat)) {
        const updatedWinkelmand = this.aangemeldeGebruiker?.winkelmand ?? [];
        updatedWinkelmand.push({ schoenId, maat });
        this.aangemeldeGebruiker = {
          ...this.aangemeldeGebruiker,
          winkelmand: updatedWinkelmand,
        };
      }
    },
    verwijderItemUitWinkelmand(schoenId, maat) {
      const shoeStockRoomStore = useShoeStockRoom();
      shoeStockRoomStore.addShoeFromStock(schoenId, maat);
      let updatedWinkelmand = this.aangemeldeGebruiker?.winkelmand ?? [];
      const shoeIndex = updatedWinkelmand.findIndex(
        ({ shoenId, maat }) => schoenId === schoenId && maat === maat
      );
      updatedWinkelmand.splice(shoeIndex, 1);
      this.aangemeldeGebruiker = {
        ...this.aangemeldeGebruiker,
        winkelmand: updatedWinkelmand,
      };
    },
    maakWinkelmandVrij() {
      this.aangemeldeGebruiker = {
        ...this.aangemeldeGebruiker,
        winkelmand: [],
      };
    },
    inlog(gebruikersnaam, wachtwoord) {
      const gevondenGebruiker = gebruikers.find(
        (gebruiker) => gebruiker.gebruikersnaam === gebruikersnaam
      );
      if (
        gevondenGebruiker !== undefined &&
        gevondenGebruiker.wachtwoord === wachtwoord
      ) {
        this.aangemeldeGebruiker = gevondenGebruiker;
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.aangemeldeGebruiker = null;
    },
  },
});
