<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useBookStore } from './store';

const chapters = ref<any[]>([]);
const isLoading = ref(false);
const bookStore = useBookStore();

bookStore.$subscribe(async (mutation, state) => {
  if (mutation.storeId === 'book') {
    isLoading.value = true
    await fetch(`https://the-one-api.dev/v2/book/${state.bookId}/chapter`).then(async (response) => {
      chapters.value = (await response.json()).docs
      isLoading.value = false
    })
  }
})
</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else-if="bookStore.bookId !== ''">
    <h2>Book Chapters</h2>

    <div class="chapter-list" v-for="chapter in chapters">
      <div class="item">{{ chapter.chapterName }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapter-list .item {
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #f2f2f2;
}
</style>