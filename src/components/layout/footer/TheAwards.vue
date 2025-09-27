<script setup></script>

<template>
  <div class="TheAwards">
    <div class="Awards_wrap">
      <ul>
        <li>
          <img src="@/assets/img/footer/award/footer_award_2211_01_T.jpg" alt="The Awards" />
        </li>
        <li>
          <img src="@/assets/img/footer/award/footer_award_2211_02_T.jpg" alt="The Awards" />
        </li>
        <li>
          <img src="@/assets/img/footer/award/footer_award_2211_03_T.jpg" alt="The Awards" />
        </li>
        <li>
          <img src="@/assets/img/footer/award/footer_award_2211_04_T.jpg" alt="The Awards" />
        </li>
        <li>
          <img src="@/assets/img/footer/award/footer_award_2211_05_T.jpg" alt="The Awards" />
        </li>
        <li>
          <img src="@/assets/img/footer/award/footer_award_2211_06_T_1.jpg" alt="The Awards" />
        </li>
        <li>
          <img src="@/assets/img/footer/award/footer_award_2211_07_T.jpg" alt="The Awards" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.TheAwards {
  @apply flex justify-center max-w-[74rem] bg-footer-awards-bg;
}
.Awards_wrap {
  @apply flex justify-center desktop:w-[73.875rem] desktop:w-[90rem] py-[1.25rem];
}
.TheAwards ul {
  @apply flex flex-row;
}
</style>
