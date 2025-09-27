<script setup lang="ts">
import FooterMenu from "@/components/layout/footer/footerMenu/FooterMenu.vue";
import Awards from "@/components/layout/footer/TheAwards.vue";
import TermsAndConditions from "@/components/layout/footer/termsAndConditions/termsAndConditions.vue";
import UtilNav from "@/components/layout/footer/utilsNav/UtilsNav.vue";
import CompanyInfo from "@/components/layout/footer/companyInfo/CompanyInfo.vue";
import CopyRight from "@/components/layout/footer/CopyRight.vue";
</script>

<template>
  <div class="Footer">
    <FooterMenu class="FooterMenu" />
    <Awards />
    <TermsAndConditions />
    <UtilNav />
    <CompanyInfo />
    <CopyRight />
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";
.Footer {
  @apply bottom-0 bg-footer-bg w-full pt-[2rem] pb-[2.1875rem];
}
.FooterMenu {
  @apply text-white;
}
</style>
