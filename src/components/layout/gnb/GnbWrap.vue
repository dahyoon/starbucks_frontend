<script setup lang="ts">
import GnbTop from "@/components/layout/gnb/GnbTop.vue";
import GnbBottom from "@/components/layout/gnb/GnbBottom.vue";
</script>

<template>
  <div class="Gnb">
    <div class="Gnb_wrap">
      <a href="/">
        <img class="Logo" src="@/assets/img/common/logo.png" alt="스타벅스 로고" />
      </a>
      <GnbTop class="GnbTop" />
      <button class="BtnSearch" type="button">
        <img src="@/assets/img/common/icon_magnifier_black.png" alt="찾기 버튼" />
      </button>
      <GnbBottom />
    </div>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";
.Gnb {
  @apply w-full h-[7.5rem] bg-gnb-bg border-t-[2px] border-t-black border-b-[1px] border-b-[#e5e5e5] font-[Avenir,Arial,georgia];
}
.Gnb_wrap {
  @apply relative h-full max-w-[1100px] mx-auto;
}
.Logo {
  @apply absolute w-[75px] h-[75px] top-1/2 -translate-y-1/2 left-[1.25rem];
}
.GnbTop {
  @apply absolute top-[1.25rem] right-[5rem];
}
.GnbBottom {
  @apply absolute bottom-0 right-0;
}
.BtnSearch {
  @apply absolute w-[2rem] h-[2rem] top-5 right-5 flex bg-white justify-center items-center border border-[#ccc] rounded-sm top-[0.8rem] right-[3rem] cursor-pointer;
}
</style>
