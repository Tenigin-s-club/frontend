import { MainPage } from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ProtectedRoute } from "../../../app/providers/router/ui/ProtectedRoute";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import AuthLayout from "@/app/layouts/authLayout";
import MainLayout from "@/app/layouts/mainLayout";

const authRoutes: RouteObject[] = [
  {
    path: "/register",
    element: (
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
];

export const appRoutersConfig = createBrowserRouter([
  ...authRoutes,
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: (
      <ProtectedRoute>
        <MainLayout>
          <NotFoundPage />
        </MainLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
