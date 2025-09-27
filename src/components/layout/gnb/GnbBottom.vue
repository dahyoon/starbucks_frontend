<script setup lang="ts">
import gnbBottomList from "@/components/layout/gnb/gnbBottomData";
import { RouterLink } from "vue-router";
// import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="GnbBottom">
    <ul class="MainMenu">
      <li
        class="MainMenuItem"
        v-for="mainMenu in gnbBottomList.menus.mainMenus"
        :key="mainMenu.title"
      >
        <!-- 1단계 메뉴 -->
        <RouterLink :to="mainMenu.url">
          {{ mainMenu.title }}
        </RouterLink>

        <!-- 2단계 메뉴 -->
        <ul class="SubMenu" v-if="mainMenu.subMenus">
          <li class="SubMenuItem" v-for="subMenu in mainMenu.subMenus" :key="subMenu.title">
            <RouterLink :to="subMenu.url">
              {{ subMenu.title }}
            </RouterLink>

            <!-- 3단계 메뉴 -->
            <ul class="SubSubMenu" v-if="subMenu.subSubMenus">
              <li
                class="SubSubMenuItem"
                v-for="subSubMenu in subMenu.subSubMenus"
                :key="subSubMenu.title"
              >
                <RouterLink :to="subSubMenu.url">
                  {{ subSubMenu.title }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.GnbBottom {
  @apply text-[0.8125rem] text-[#333];
}

.MainMenu {
  @apply flex;
}

.MainMenu > li {
  @apply h-[3.5rem] leading-[1.25rem] pt-[0.3rem] px-[1.5rem] cursor-pointer;
}

.MainMenu > li:hover {
  @apply underline text-starbucks-green-02 bg-starbucks-black-01 cursor-pointer;
}

.SubMenu {
  @apply fixed flex flex-row max-h-0 overflow-hidden transition-all duration-500 ease-in-out 
         top-[7.4rem] left-0 w-screen pl-[3rem] 
         bg-starbucks-black-01 font-pretendard-regular text-white text-left cursor-default;
}

.MainMenu > li:hover > .SubMenu {
  @apply flex flex-row max-h-[30rem];
}

.SubMenuItem {
  @apply pt-[1.5rem] px-[1.5rem] w-[14rem] text-[0.9rem];
}

.SubMenuItem > a:hover,
.SubSubMenuItem > a:hover {
  @apply underline;
}

.SubSubMenu {
  @apply py-[1rem] text-starbucks-black-02 font-pretendard-medium text-[0.8rem] text-left;
}

.SubSubMenuItem {
  @apply py-[0.1rem];
}
</style>
