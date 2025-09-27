type CompanyInfo = {
  items: { title: string; content: string }[];
};

const companyInfo: CompanyInfo = {
  items: [
    { title: "사업자등록번호", content: "201-81-21515" },
    { title: "주식회사 에스씨케이컴퍼니 대표이사", content: "손정현" },
    { title: "TEL", content: "1522-3232" },
    { title: "개인정보 보호책임자", content: "이찬우" },
  ],
};

export default companyInfo;
