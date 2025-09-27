<script setup lang="ts">
import GnbWrap from "@/components/layout/gnb/GnbWrap.vue";
import FooterWrap from "@/components/layout/footer/FooterWrap.vue";
</script>

<template>
  <GnbWrap class="GnbWrap" />
  <slot />
  <FooterWrap class="FooterWrap" />
</template>

<style scoped>
@reference "@/assets/css/main.css";

.GnbWrap {
  @apply fixed;
}
.FooterWrap {
  @apply bottom-0;
}
</style>
