<script setup>
import termsAndConditionsList from "@/components/layout/footer/termsAndConditions/termsAndConditionsData";
</script>

<template>
  <div class="termsAndConditions">
    <ul class="ul">
      <li
        v-for="rule in termsAndConditionsList.rules"
        :key="rule.title"
        :class="{ 'text-starbucks-green-01 font-bold': rule.highlight }"
      >
        <RouterLink :to="rule.url">
          {{ rule.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.termsAndConditions {
  @apply mt-[2rem];
}
.ul {
  @apply flex text-footer-rules text-[0.75rem];
}
.ul > li {
  @apply px-[0.7rem] h-[0.75rem] leading-[10px] border-r-[0.0625rem] /* 1px */ border-r-gray-700 last:border-r-0;
}
.ul > li:hover {
  @apply underline;
}
</style>
