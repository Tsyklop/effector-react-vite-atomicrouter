import {createRoutesView} from "atomic-router-react";
import React from "react";
import * as admin from "@/pages/admin";
import {signIn} from "@/pages/auth";
import {HomePage} from "@/pages/home";
import {NotFoundPage} from "@/pages/not-found";
import {BasePage, AdminPage, SpaPage} from "@/widgets/page-template";
import {routes} from "@/shared/lib/routes";

const adminRoutes = [
    {
        route: routes.admin.plans,
        view: admin.AdminPlansPage,
        layout: AdminPage,
    },
    {
        route: routes.admin.users,
        view: admin.AdminUsersPage,
        layout: AdminPage
    },
    {
        route: routes.admin.files,
        view: admin.AdminFilesPage,
        layout: AdminPage,
    },
    {
        route: routes.admin.materials,
        view: admin.AdminMaterialsPage,
        layout: AdminPage,
    },
    {
        route: routes.admin.dashboard,
        view: admin.AdminDashboardPage,
        layout: AdminPage,
    }
];

const RoutesView = createRoutesView({
    routes: [
        {
            route: routes.home,
            view: HomePage,
            layout: BasePage,
        },
        {
            route: routes.signIn,
            view: signIn.SignInPage,
            layout: SpaPage,
        },
        ...adminRoutes,
        {
            route: routes.notFound,
            view: NotFoundPage,
            layout: SpaPage,
        },
    ],
    otherwise() {
        return <NotFoundPage/>;
    },
});

export const Pages = () => {
    return <RoutesView/>;
};
