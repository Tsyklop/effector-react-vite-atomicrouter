import PropTypes from "prop-types";
import React from "react";
import {Helmet} from "react-helmet-async";
import {BasePage} from "@/widgets/page-template";
import {routes} from "@/shared/lib/routes";
import {Header, SideBar} from "@/shared/ui";
import {ProtectedLayout} from "@/shared/ui/templates";

const menus = [
    {
        route: routes.admin.dashboard,
        title: 'Dashboard'
    },
    {
        route: routes.admin.users,
        title: 'Users'
    },
    {
        route: routes.admin.files,
        title: 'Files'
    },
    {
        route: routes.admin.materials,
        title: 'Materials'
    },
    {
        route: routes.admin.plans,
        title: 'Plans'
    }
];

export const AdminPage = ({children}) => {
    return (
        <BasePage>

            <Helmet title='Admin'/>

            <ProtectedLayout sidebar={<SideBar items={menus}/>} header={<Header/>}>
                {children}
            </ProtectedLayout>

        </BasePage>
    );
};

AdminPage.propTypes = {
    children: PropTypes.element
};
