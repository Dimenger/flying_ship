import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { MainPage } from "./components/pages/main-page/main-page";
import { PersonalPage } from "./components/pages/personal-page/personal-page";
import { Posts } from "./components/pages/posts/posts";
import { Users } from "./components/pages/users/users";
import { Registration } from "./components/pages/registration/registration";
import { Services } from "./components/pages/services/services";
import { Service } from "./components/pages/service/service";
import { Schedule } from "./components/pages/schedule/schedule";
import { Contacts } from "./components/pages/contacts/contacts";
import { Login } from "./components/pages/login/login";
import { Error } from "./components/error/error";
import { ERROR } from "./constants";
import { PrivateRoute } from "./components/protected-route/protected-route";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "/services", element: <Services /> },
        { path: "/services/:id", element: <Service /> },
        { path: "/schedule", element: <Schedule /> },
        { path: "/posts", element: <Posts /> },
        { path: "/contacts", element: <Contacts /> },
        { path: "/registration", element: <Registration /> },
        {
          path: "/user",
          element: (
            <PrivateRoute>
              <PersonalPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/users",
          element: (
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          ),
        },
        { path: "/login", element: <Login /> },
        { path: "*", element: <Error error={ERROR.PAGE_NOT_EXIST} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
