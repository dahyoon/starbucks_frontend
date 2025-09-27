type GnbBottomList = {
  menus: {
    mainMenus: {
      title: string;
      url: string;
      subMenus?: {
        title: string;
        url: string;
        subSubMenus?: {
          title: string;
          url: string;
        }[];
      }[];
    }[];
  };
};

const gnbBottomList: GnbBottomList = {
  menus: {
    mainMenus: [
      {
        title: "COFFEE",
        url: "/",
        subMenus: [
          {
            title: "커피",
            url: "/",
            subSubMenus: [
              { title: "스타벅스 원두", url: "/" },
              { title: "스타벅스 비아", url: "/" },
              { title: "스타벅스 오르가미", url: "/" },
              { title: "스바턱스앳홈 by 캡슐", url: "/" },
              { title: "나와 어울리는 커피", url: "/" },
            ],
          },
          {
            title: "커피이야기",
            url: "/",
            subSubMenus: [
              { title: "농장에서 우리의 손으로", url: "/" },
              { title: "최상의 아라비카 원두", url: "/" },
              { title: "스타벅스 로스트 스펙트럼", url: "/" },
              { title: "스타벅스 디카페인", url: "/" },
            ],
          },
          {
            title: "스타벅스 리저브",
            url: "/",
            subSubMenus: [{ title: "RESERVE MAGAZINE", url: "/" }],
          },
          {
            title: "에스프레소 음료",
            url: "/",
            subSubMenus: [
              { title: "도피오", url: "/" },
              { title: "에스프레소 마키아또", url: "/" },
              { title: "아메리카노", url: "/" },
              { title: "마키아또", url: "/" },
              { title: "카푸치노", url: "/" },
              { title: "라떼", url: "/" },
              { title: "모카", url: "/" },
            ],
          },
          {
            title: "최상의 커피를 즐기는 법",
            url: "/",
            subSubMenus: [
              { title: "커피 프레스", url: "/" },
              { title: "푸어 오버", url: "/" },
              { title: "아이스 푸어 오버", url: "/" },
              { title: "커피 메이커", url: "/" },
            ],
          },
        ],
      },
      {
        title: "MENU",
        url: "/",
        subMenus: [
          {
            title: "음료",
            url: "/",
            subSubMenus: [
              { title: "콜드 브루", url: "/" },
              { title: "브루드 커피", url: "/" },
              { title: "에스프레소", url: "/" },
              { title: "프라푸치노", url: "/" },
              { title: "블렌디드", url: "/" },
              { title: "스타벅스 리프레셔", url: "/" },
              { title: "스타벅스 피지오", url: "/" },
              { title: "티(티바나)", url: "/" },
              { title: "기타 제조 음료", url: "/" },
              { title: "스타벅스 주스(병음료)", url: "/" },
            ],
          },
          {
            title: "푸드",
            url: "/",
            subSubMenus: [
              { title: "브레드", url: "/" },
              { title: "케이크", url: "/" },
              { title: "샌드위치 & 샐러드", url: "/" },
              { title: "따뜻한 푸드", url: "/" },
              { title: "과일 & 요거트", url: "/" },
              { title: "스낵 & 미니 디저트", url: "/" },
              { title: "아이스크림", url: "/" },
            ],
          },
          {
            title: "상품",
            url: "/",
            subSubMenus: [
              { title: "머그", url: "/" },
              { title: "글라스", url: "/" },
              { title: "플라스틱 텀블러", url: "/" },
              { title: "스테인리스 텀블러", url: "/" },
              { title: "보온병", url: "/" },
              { title: "액세서리", url: "/" },
              { title: "선물세트", url: "/" },
              { title: "커피 용품", url: "/" },
              { title: "패키지 티(티바나)", url: "/" },
              { title: "시럽", url: "/" },
            ],
          },
          {
            title: "카드",
            url: "/",
            subSubMenus: [
              { title: "실물카드", url: "/" },
              { title: "스타벅스 모바일 카드", url: "/" },
            ],
          },
          {
            title: "메뉴 이야기",
            url: "/",
            subSubMenus: [
              { title: "스타벅스 티바나", url: "/" },
              { title: "스타벅스 콜드 브루", url: "/" },
            ],
          },
        ],
      },
      {
        title: "STORE",
        url: "/",
        subMenus: [
          {
            title: "매장 찾기",
            url: "/",
            subSubMenus: [
              { title: "퀵 검색", url: "/" },
              { title: "지역 검색", url: "/" },
            ],
          },
          { title: "드라이브 스루 매장", url: "/" },
          { title: "스타벅스 리저브 매장", url: "/" },
          { title: "커뮤니티 스토어 매장", url: "/" },
        ],
      },
      {
        title: "ESG",
        url: "/",
        subMenus: [
          {
            title: "커뮤니티",
            url: "/",
            subSubMenus: [
              { title: "커뮤니티 스토어", url: "/" },
              { title: "청년 지원 프로그램", url: "/" },
              { title: "국가유산 지킴이", url: "/" },
              { title: "재능기부 카페", url: "/" },
              { title: "희망배달 캠페인", url: "/" },
            ],
          },
          {
            title: "친환경",
            url: "/",
            subSubMenus: [
              { title: "친환경 활동", url: "/" },
              { title: "다회용컴 사용 캠페인", url: "/" },
              { title: "커피박 재활용", url: "/" },
            ],
          },
          {
            title: "윤리 구매",
            url: "/",
            subSubMenus: [
              { title: "윤리적 원두 구매", url: "/" },
              { title: "공정무역", url: "/" },
            ],
          },
          { title: "ESG 정보", url: "/" },
        ],
      },
      {
        title: "STARBUCKS REWARDS",
        url: "/",
        subMenus: [
          {
            title: "스타벅스 리워드",
            url: "/",
            subSubMenus: [
              { title: "스타벅스 리워드 소개", url: "/" },
              { title: "등급 및 혜택", url: "/" },
              { title: "스타벅스 별", url: "/" },
              { title: "자주 하는 질문", url: "/" },
            ],
          },
          {
            title: "스타벅스 카드",
            url: "/",
            subSubMenus: [
              { title: "스타벅스 카드 소개", url: "/" },
              { title: "스타벅스 카드 갤러리", url: "/" },
              { title: "자주 하는 질문", url: "/" },
            ],
          },
          {
            title: "스타벅스 모바일 카드",
            url: "/",
            subSubMenus: [
              { title: "스타벅스 모바일 카드 소개", url: "/" },
              { title: "이용 안내", url: "/" },
              { title: "선물하기", url: "/" },
              { title: "자주 하는 질문", url: "/" },
            ],
          },
        ],
      },
      {
        title: "CORPORATE SALES",
        url: "/",
        subMenus: [
          {
            title: "단체 및 기업 구매 안내",
            url: "/",
            subSubMenus: [
              { title: "MD 상품", url: "/" },
              { title: "실물카드", url: "/" },
              { title: "스타벅스 모바일 카드(MMS)", url: "/" },
              { title: "스타벅스 모바일 카드(BULK)", url: "/" },
            ],
          },
          {
            title: "단체 주문 배달 안내",
            url: "/",
            subSubMenus: [
              { title: "단체 주문 배달 안내", url: "/" },
              { title: "단체 주문 신청", url: "/" },
              { title: "신청 내역 조회", url: "/" },
            ],
          },
        ],
      },
      {
        title: "WHAT'S NEW",
        url: "/",
        subMenus: [
          {
            title: "이벤트",
            url: "/",
            subSubMenus: [
              { title: "전체", url: "/" },
              { title: "스타벅스 카드", url: "/" },
              { title: "스타벅스 리워드", url: "/" },
              { title: "온라인", url: "/" },
            ],
          },
          {
            title: "뉴스",
            url: "/",
            subSubMenus: [
              { title: "전체", url: "/" },
              { title: "상품 출시", url: "/" },
              { title: "스타벅스와 문화", url: "/" },
              { title: "스타벅스 사회공헌", url: "/" },
              { title: "스타벅스 카드출시", url: "/" },
            ],
          },
          {
            title: "매장별 이벤트",
            url: "/",
            subSubMenus: [
              { title: "일반 매장", url: "/" },
              { title: "신규 매장", url: "/" },
            ],
          },
          { title: "공지사항", url: "/" },
          { title: "월페이퍼", url: "/" },
        ],
      },
    ],
  },
};

export default gnbBottomList;
