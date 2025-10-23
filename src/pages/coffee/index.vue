<script setup>
import SimpleHeaderWrap from "@/components/layout/header/SimpleHeaderWrap.vue";

const folderName = import.meta.url.split("/").at(-2).toUpperCase();
</script>

<template>
  <div class="index">
    <SimpleHeaderWrap :title="folderName" />
  </div>
</template>

<style scoped>
.index {
}
</style>
