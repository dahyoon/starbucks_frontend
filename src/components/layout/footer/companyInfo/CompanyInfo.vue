<script setup>
import companyInfo from "@/components/layout/footer/companyInfo/companyInfoData";
</script>

<template>
  <div class="CompanyInfo">
    <ul class="ul">
      <li v-for="info in companyInfo.items" :key="info.title">
        {{ info.title }}: {{ info.content }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.CompanyInfo {
  @apply text-[0.75rem] text-starbucks-black-02 mt-[1.5625rem] mb-[0.3125rem];
}
.ul {
  @apply flex;
}
.ul > li {
  @apply mx-[0.4375rem];
}
</style>
