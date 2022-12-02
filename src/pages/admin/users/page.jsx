import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@/features/route";
import {routes} from "@/shared/lib/routes";

export const adminUsersSecuredRoute = routeModel.securedRoute(routes.admin.users);

export const AdminUsersPage = () => {

    const isLoaded = useStore(adminUsersSecuredRoute.$isOpened);

    if (!isLoaded) {
        return <h3>Loading</h3>;
    }

    return <p>AdminUsersPage</p>;

};
