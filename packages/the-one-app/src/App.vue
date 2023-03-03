<script setup lang="ts">
import BookList from 'book-list/App'
import BookChapterList from 'book-chapter-list/App'

</script>

<template>
  <div>The One App</div>


  <div class="red-area scroll-area">
    <BookList />
  </div>

  <div class="blue-area scroll-area">
    <BookChapterList />
  </div>
</template>

<style scoped>
.red-area {
  padding: 20px;
  margin: 10px;
  border: 5px dotted red;
}

.blue-area {
  padding: 20px;
  margin: 10px;
  border: 5px dotted blue;
}

.scroll-area {
  max-height: 300px;
  overflow: auto;
}
</style>
