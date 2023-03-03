<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useBookStore } from './store';

const chapters = ref<any[]>([]);
const isLoading = ref(true);
const bookStore = useBookStore();

onMounted(async () => {
  await fetch(`https://the-one-api.dev/v2/book/${bookStore.bookId}/chapter`).then(async (response) => {
    chapters.value = (await response.json()).docs
    isLoading.value = false
  })
})

</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
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