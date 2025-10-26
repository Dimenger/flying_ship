import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { MainPage } from "./components/pages/main-page/main-page";
import { PersonalPage } from "./components/pages/personal-page/personal-page";
import { News } from "./components/pages/news/news";
import { Users } from "./components/pages/users/users";
import { Registration } from "./components/pages/registration/registration";
import { Services } from "./components/pages/services/services";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "/personal-page", element: <PersonalPage /> },
        { path: "/services", element: <Services /> },
        { path: "/schedule", element: <div> Schedule </div> },
        { path: "news", element: <News /> },
        { path: "/contacts", element: <div> Contacts </div> },
        { path: "/users", element: <Users /> },
        { path: "/registration", element: <Registration /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
