import {defineStore} from 'pinia'

export const useGebruikerStore = defineStore('gebruiker', {
    state: () => {
        return {name: 'robbe', items: []}
    },
    actions: {
        extraLetter() {
            this.name = this.name + "x";
        },
        voegSchoenToe(schoen) {
            this.items.push(schoen);
        }
    },
})
