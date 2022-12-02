import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@/features/route";
import {routes} from "@/shared/lib/routes.js";

export const adminMaterialsSecuredRoute = routeModel.securedRoute(routes.admin.materials);

export const AdminMaterialsPage = () => {

  const isLoaded = useStore(adminMaterialsSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>AdminMaterialsPage</p>;

};
