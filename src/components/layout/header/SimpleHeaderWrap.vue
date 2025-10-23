<script setup lang="ts">
import BreadCrumb from "@/components/layout/header/BreadCrumb.vue";

defineProps({
  title: {
    type: String,
    default: "헤더 제목",
  },
});
</script>

<template>
  <div class="Header">
    <div class="SimpleHeaderWrap">
      <h2 class="SubTitle">{{ title }}</h2>
      <BreadCrumb :crumbs="[{ label: title, isCurrent: true }]" />
    </div>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.Header {
  @apply h-[6.25rem] pt-[1.875rem];
}

.SimpleHeaderWrap {
  @apply relative max-w-[1100px] mx-auto;
}

.SubTitle {
  @apply text-[2.25rem];
}
</style>
