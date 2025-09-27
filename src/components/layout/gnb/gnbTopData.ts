type GnbTopList = {
  menus: {
    title: string;
    url: string;
  }[];
};

const gnbTopList: GnbTopList = {
  menus: [
    { title: "Sign In", url: "/" },
    { title: "My Starbucks", url: "/" },
    { title: "Customer Service & Ideas", url: "/" },
    { title: "Find a Store", url: "/" },
  ],
};

export default gnbTopList;
