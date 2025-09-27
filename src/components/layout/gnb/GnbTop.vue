<script setup lang="ts">
import gnbTopList from "@/components/layout/gnb/GnbTopData";
</script>

<template>
  <nav class="GnbTop">
    <ul class="ul">
      <li v-for="menu in gnbTopList.menus" :key="menu.title">
        <RouterLink :to="menu.url">
          {{ menu.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@reference "@/assets/css/main.css";
.GnbTop {
  @apply text-[0.8125rem] text-[#555555];
}
.ul {
  @apply flex;
}
.ul > li {
  @apply px-[1rem] h-[0.75rem] leading-[10px] border-r-[0.1rem] border-r-gray-200 last:border-r-0;
}
.ul > li:hover {
  @apply underline;
}
</style>
