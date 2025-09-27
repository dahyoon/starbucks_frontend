<script setup>
import utilsNavList from "@/components/layout/footer/utilsNav/utilsNavData";
</script>

<template>
  <div class="UtilsNav">
    <button class="NavBtn" type="button" v-for="item in utilsNavList.items" :key="item.title">
      {{ item.title }}
    </button>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.UtilsNav {
}
.NavBtn {
  @apply w-[6.25rem] h-[2rem] leading-[1.875rem] text-white text-[0.75rem] border-[0.125rem] rounded-[0.1875rem] mt-[0.625rem] mx-[0.1875rem] px-[0.625rem] cursor-pointer;
}
.NavBtn:hover {
  @apply underline;
}
</style>
