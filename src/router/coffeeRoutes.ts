import type { RouteRecordRaw } from "vue-router";
import type { Component } from "vue";

//라우트 파일 위치
const coffeeRouteMap: Record<string, () => Promise<Component>> = {
  // index
  index: () => import("@/pages/coffee/index.vue"),

  // 커피
  productList: () => import("@/pages/coffee/productList.vue"),

  // 커피 이야기
  story: () => import("@/pages/coffee/story.vue"),

  // 스타벅스 리저브
  reserveInfo: () => import("@/pages/coffee/reserveInfo.vue"),

  // 에스프레소 음료
  espresso: () => import("@/pages/coffee/espresso.vue"),

  // 최상의 커피를 즐기는 법
  higherJoy: () => import("@/pages/coffee/higherJoy.vue"),
};

//라우트 이름
const coffeeRouteName = {
  index: "index",
  productList: "productList",
  story: "story",
  reserveInfo: "reserveInfo",
  espresso: "espresso",
  higherJoy: "higherJoy",
};

//라우트 설정
const coffeeRecordRaw: RouteRecordRaw[] = [
  {
    path: "/coffee",
    children: [
      {
        path: "index",
        name: coffeeRouteName.index,
        component: coffeeRouteMap.index,
        // meta: { notLoggedIn: true },
      },
      {
        path: "productList",
        name: coffeeRouteName.productList,
        component: coffeeRouteMap.productList,
      },
      {
        path: "story",
        name: coffeeRouteName.story,
        component: coffeeRouteMap.story,
      },
      {
        path: "reserveInfo",
        name: coffeeRouteName.reserveInfo,
        component: coffeeRouteMap.reserveInfo,
      },
      {
        path: "espresso",
        name: coffeeRouteName.espresso,
        component: coffeeRouteMap.espresso,
      },
      {
        path: "higherJoy",
        name: coffeeRouteName.higherJoy,
        component: coffeeRouteMap.higherJoy,
      },
    ],
  },
];

export { coffeeRouteMap, coffeeRouteName, coffeeRecordRaw };
