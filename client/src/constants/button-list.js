export const BUTTONS_LIST = [
  { id: "Main Page", title: "Главная", path: "/", allowedRoles: [] },
  {
    id: "Services",
    title: "Услуги",
    path: "/services",
    allowedRoles: [],
  },
  {
    id: "Schedule",
    title: "Расписание",
    path: "/schedule",
    allowedRoles: [],
  },
  { id: "Posts", title: "Новости", path: "/posts", allowedRoles: [] },
  {
    id: "Contacts",
    title: "Контакты",
    path: "/contacts",
    allowedRoles: [],
  },
  {
    id: "Personal Page",
    title: "Личная страница",
    path: "/personal-page",
    allowedRoles: [0, 1, 2],
  },
  {
    id: "Users",
    title: "Пользователи",
    path: "/users",
    allowedRoles: [0],
  },
];
