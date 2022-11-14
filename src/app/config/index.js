import { FiBook, FiUsers, FiPackage } from "react-icons/fi";

export const Config = {
  API_URL: "http://localhost:3000/v1",

  MENU_ITEMS: [
    {
      name: "Books",
      path: "/books",
      icon: <FiBook className="icon" />,
    },
    {
      name: "Characters",
      path: "/characters",
      icon: <FiUsers className="icon" />,
    },
    {
      name: "Houses",
      path: "/houses",
      icon: <FiPackage className="icon" />,
    },
  ],
};
