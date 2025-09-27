type TermsAndConditions = {
  rules: { title: string; url: string; highlight: boolean }[];
};

const termsAndConditionsList: TermsAndConditions = {
  rules: [
    { title: "개인정보처리방침", url: "/", highlight: true },
    { title: "영상정보처리기기 운영관리 방침", url: "/", highlight: false },
    { title: "홈페이지 이용약관", url: "/", highlight: false },
    { title: "위치정보 이용약관", url: "/", highlight: true },
    { title: "스타벅스 카드 이용약관", url: "/", highlight: false },
    { title: "신세계 유니버스 클럽 이용약관", url: "/", highlight: false },
    { title: "비회원 이용약관", url: "/", highlight: false },
    { title: "My DT Pass 서비스 이용약관", url: "/", highlight: false },
    { title: "윤리경영 핫라인", url: "/", highlight: false },
  ],
};
export default termsAndConditionsList;
