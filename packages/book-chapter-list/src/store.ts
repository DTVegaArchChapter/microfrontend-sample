import { defineStore } from 'pinia';

export const useBookStore = defineStore('book', {
    state: () => {
        return { bookId : '5cf58080b53e011a64671584' }
    }
})