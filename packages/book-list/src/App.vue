<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useBookStore } from './store';

const books = ref<any[]>([]);
const selectedBookId = ref({});
const isLoading = ref(true);
const bookStore = useBookStore();

onMounted(async () => {
  await fetch('https://the-one-api.dev/v2/book').then(async (response) => {
    books.value = (await response.json()).docs
    isLoading.value = false
  })
})

const itemSelect = (book: any) => {
  selectedBookId.value = book._id
  bookStore.bookId = book._id
}
</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
    <h2>Books</h2>

    <div class="book-list" v-for="book in books">
      <div :class="{ 'selected': selectedBookId === book._id }" @click="itemSelect(book)" class="item">{{ book.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-list .item {
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #f2f2f2;
}

.book-list .item:hover {
  background-color: #fff;
  cursor: pointer;
}

.book-list .item.selected {
  background-color: #edfcff
}
</style>
