import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@/features/route";
import {routes} from "@/shared/lib/routes";

export const adminPlansSecuredRoute = routeModel.securedRoute(routes.admin.plans);

export const AdminPlansPage = () => {

  const isLoaded = useStore(adminPlansSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>AdminPlansPage</p>;

};
