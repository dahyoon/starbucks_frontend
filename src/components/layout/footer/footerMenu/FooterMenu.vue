<script setup lang="ts">
import footerList from "@/components/layout/footer/footerMenu/footerMenuData";
</script>

<template>
  <div class="FooterMenu">
    <div class="FooterMenu_wrap">
      <ul class="MainMenu">
        <li class="MainMenuItem" v-for="mainMenu in footerList.mainMenus" :key="mainMenu.title">
          <RouterLink v-if="mainMenu.url" :to="mainMenu.url" class="hover:underline">
            {{ mainMenu.title }}
          </RouterLink>
          <span v-else>
            {{ mainMenu.title }}
          </span>
          <ul class="SubMenu" v-if="mainMenu.subMenus">
            <li class="SubMenuItem" v-for="subMenu in mainMenu.subMenus" :key="subMenu.title">
              <RouterLink :to="subMenu.url">
                {{ subMenu.title }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
      <img class="FooterLogo" src="@/assets/img/footer/footer_logo.png" alt="Footer Logo" />
    </div>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.FooterMenu_wrap {
  @apply relative w-[55rem] desktop:w-[74rem];
}
.FooterLogo {
  @apply absolute top-0 right-0;
}
.MainMenu {
  @apply grid grid-cols-3 desktop:grid-cols-5 pt-[0.5rem] pb-[2.1875rem];
}
.MainMenuItem {
  @apply w-[15.5rem] desktop:w-[13.75rem] mb-[2rem] text-[0.875rem];
}
.SubMenu {
  @apply mt-[0.5rem];
}
.SubMenuItem {
  @apply py-[0.2rem] text-[0.75rem];
}
.MainMenuItem a:hover,
.SubMenuItem a:hover {
  @apply underline;
}
</style>
