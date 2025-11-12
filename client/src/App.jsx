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
import { Login } from "./components/pages/login/login";
import { Failure } from "./components/error/error";
import { ERROR, ROLES } from "./constants";
import { ProtectedRoute } from "./components/protected-route/protected-route";
import { useAuth } from "./hooks/use-auth";
import { Spinner } from "./elements/spinner/spinner";

export const App = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

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
        {
          path: "/registration",
          element: <Registration />,
        },
        {
          path: "/user",
          element: (
            <ProtectedRoute>
              <PersonalPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/users",
          element: (
            <ProtectedRoute allowedRoles={ROLES.ADMINISTRATOR}>
              <Users />
            </ProtectedRoute>
          ),
        },
        { path: "/login", element: <Login /> },
        { path: "*", element: <Failure error={ERROR.PAGE_NOT_EXIST} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
