import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@/features/route";
import {routes} from "@/shared/lib/routes.js";

export const adminFilesSecuredRoute = routeModel.securedRoute(routes.admin.files);

export const AdminFilesPage = () => {

  const isLoaded = useStore(adminFilesSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>AdminFilesPage</p>;

};
