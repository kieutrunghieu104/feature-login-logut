import { Routes, Route, Navigate } from "react-router-dom";

import ROUTE_PATHS from "./routePaths";
import AuthLayout from "~/app/layouts/AuthLayout";
import DefaultLayout from "~/app/layouts/DefaultLayout";
import LoginPage from "~/features/auth/pages/LoginPage";
import DashboardPage from "~/features/dashboard/pages/DashboardPage";
import NotFoundPage from "~/shared/components/NotFoundCustom";


function AppRoutes() {
  return (
    <Routes>
      <Route
        path={ROUTE_PATHS.root}
        element={<Navigate to={ROUTE_PATHS.login} replace />}
      />

      <Route element={<AuthLayout />}>
        <Route
          path={ROUTE_PATHS.login}
          element={<LoginPage />}
        />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route
          path={ROUTE_PATHS.dashboard}
          element={<DashboardPage />}
        />
      </Route>

      <Route
        path={ROUTE_PATHS.notFound}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default AppRoutes;