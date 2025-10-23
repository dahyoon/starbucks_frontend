<script setup lang="ts">
import GnbWrap from "@/components/layout/gnb/GnbWrap.vue";
import FooterWrap from "@/components/layout/footer/FooterWrap.vue";
</script>

<template>
  <GnbWrap class="GnbWrap" />
  <div class="ContentWrap">
    <slot />
  </div>
  <FooterWrap class="FooterWrap" />
</template>

<style scoped>
@reference "@/assets/css/main.css";

.GnbWrap {
  @apply fixed;
}
.ContentWrap {
  @apply pt-[7.5rem]; /* Gnb 높이만큼 패딩 추가 */
}
.FooterWrap {
  @apply bottom-0;
}
</style>
