import {createRoute} from "atomic-router";

export const routes = {
    home: createRoute(),
    signIn: createRoute(),
    admin: {
        plans: createRoute(),
        users: createRoute(),
        files: createRoute(),
        materials: createRoute(),
        dashboard: createRoute(),
    },
    notFound: createRoute(),
    backToHomeRoute: createRoute(),
};
