import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@/features/route";
import {routes} from "@/shared/lib/routes.js";

export const adminDashboardSecuredRoute = routeModel.securedRoute(routes.admin.dashboard);

export const AdminDashboardPage = () => {

  const isLoaded = useStore(adminDashboardSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>AdminDashboardPage</p>;

};
