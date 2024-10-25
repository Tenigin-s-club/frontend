import { ReactNode } from "react";
import { MainPage } from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { MyTestsPage } from "@/pages/MyTestsPage";
import { SupportPage } from "@/pages/SupportPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { CreateTestPage } from "@/pages/CreateTestPage";
import { ProtectedRoute } from "../../../app/providers/router/ui/ProtectedRoute";
import { PassingTestPage } from "@/pages/PassingTestPage";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import AuthLayout from "@/app/layouts/authLayout";
import MainLayout from "@/app/layouts/mainLayout";

export interface IListRoutes {
  element: ReactNode;
  path: string;
}

const authRoutes: RouteObject[] = [
  {
    element: (
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    ),
    path: "/register",
  },
  {
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
    path: "/login",
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
        element: <MyTestsPage />,
        path: "/mytests",
      },
      {
        element: <CreateTestPage />,
        path: "/createtest/:title",
      },
      {
        element: <PassingTestPage />,
        path: "/passingtest/:idTest",
      },
      {
        element: <PassingTestPage />,
        path: "/passingtest/:idTest/:numberQuestion",
      },
      {
        element: <SupportPage />,
        path: "/support",
      },
      {
        element: <ProfilePage />,
        path: "/profile",
      },
    ],
  },
]);
