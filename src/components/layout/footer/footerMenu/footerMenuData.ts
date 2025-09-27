type FooterMenu = {
  mainMenus: {
    title: string;
    url?: string;
    subMenus: {
      title: string;
      url: string;
    }[];
  }[];
};

const footerMenuList: FooterMenu = {
  mainMenus: [
    {
      title: "COMPANY",
      subMenus: [
        { title: "한눈에 보기", url: "/" },
        { title: "스타벅스 사명", url: "/" },
        { title: "스타벅스 소개", url: "/" },
        { title: "컴플라이언스", url: "/" },
        { title: "국내 뉴스룸", url: "/" },
        { title: "세계의 스타벅스", url: "/" },
        { title: "글로벌 뉴스룸", url: "/" },
      ],
    },
    {
      title: "CORPORATE SALES",
      url: "/",
      subMenus: [
        { title: "단체 및 기업 구매 안내", url: "/" },
        { title: "단체 주문 배달 안내", url: "/" },
      ],
    },
    {
      title: "PARTNERSHIP",
      subMenus: [
        { title: "신규 입점 제의", url: "/" },
        { title: "협력 고객사 등록신청", url: "/" },
        { title: "중개업체 확인", url: "/" },
      ],
    },
    {
      title: "ONLINE COMMUNITY",
      subMenus: [
        { title: "페이스북", url: "/" },
        { title: "트위터", url: "/" },
        { title: "유튜브", url: "/" },
        { title: "인스타그램", url: "/" },
      ],
    },
    {
      title: "RECRUIT",
      subMenus: [
        { title: "채용 소개", url: "/" },
        { title: "채용 지원하기", url: "/" },
      ],
    },
  ],
};

export default footerMenuList;
