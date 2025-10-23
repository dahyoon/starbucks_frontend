<script setup lang="ts">
interface Crumb {
  label: string;
  href?: string; // 링크가 있으면 a 태그로, 없으면 span
  isCurrent?: boolean; // 현재 페이지 표시
}

const props = defineProps<{
  crumbs: Crumb[];
}>();
</script>

<template>
  <nav class="BreadCrumb" aria-label="Breadcrumb">
    <ul>
      <li>
        <a href="/">
          <img src="@/assets/img/header/icon_home.png" alt="홈으로" />
        </a>
      </li>
      <li>
        <img src="@/assets/img/header/icon_arrow.png" alt="하위메뉴" />
      </li>
      <template v-for="(crumb, index) in props.crumbs" :key="index">
        <li class="flex items-center">
          <template v-if="crumb.href && !crumb.isCurrent">
            <a :href="crumb.href">{{ crumb.label }}ㅗ디ㅣ</a>
          </template>
          <template v-else>
            <span :aria-current="crumb.isCurrent ? 'page' : null"> {{ crumb.label }}ㄴㅇㄴㄹ </span>
          </template>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.BreadCrumb {
  @apply text-[0.75rem];
}
</style>
