import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { MainPage } from "./components/pages/main-page/main-page";
import { PersonalPage } from "./components/pages/personal-page/personal-page";
import { News } from "./components/pages/news/news";
import { Users } from "./components/pages/users/users";
import { Registration } from "./components/pages/registration/registration";
import { Services } from "./components/pages/services/services";
import { Service } from "./components/pages/service/service";
import { Error } from "./components/error/error";
import { ERROR } from "./constants";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "/services", element: <Services /> },
        { path: "/services/:id", element: <Service /> },
        { path: "/schedule", element: <div> Schedule </div> },
        { path: "/news", element: <News /> },
        { path: "/contacts", element: <div> Contacts </div> },
        { path: "/registration", element: <Registration /> },
        { path: "/personal-page", element: <PersonalPage /> },
        { path: "/users", element: <Users /> },
        { path: "*", element: <Error error={ERROR.PAGE_NOT_EXIST} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
