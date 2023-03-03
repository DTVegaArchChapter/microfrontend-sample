import { defineStore } from 'pinia';

export const useBookStore = defineStore('book', {
    state: () => {
        return { bookId : '' }
    }
})