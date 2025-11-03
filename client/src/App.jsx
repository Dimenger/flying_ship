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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser, removeUser } from "./actions";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authMe = async () => {
      try {
        const res = await fetch("http://localhost:3000/auth/me", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!res.ok) {
          throw new Error(`Ошибка ${res.status}, ${res.statusText}`);
        }
        const user = await res.json();
        if (user) {
          dispatch(getUser(user));
        } else {
          dispatch(removeUser(user));
        }
      } catch (error) {
        console.error(error, "Ошибка сервера!!!");
      }
    };
    authMe();
  }, [dispatch]);

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
