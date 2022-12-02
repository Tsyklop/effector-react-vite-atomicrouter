import {redirect} from "atomic-router";
import {merge, split} from "effector";
import {
    authByCredentialsModel
} from "@/features/auth/by-credentials";
import {viewerModel} from "@/entities/viewer";
import {routes} from "@/shared/lib/routes.js";

redirect({
    clock: merge([authByCredentialsModel.checkAuthFx.fail, authByCredentialsModel.signOutUserFx.done, viewerModel.viewerAuthCheckFailure]),
    route: routes.signIn,
});

split({
    source: viewerModel.viewerSignInDone,
    match: ({user}) => {
        return user.role;
    },
    cases: {
        'ADMIN': redirect({route: routes.admin.dashboard}),
        __: redirect({route: routes.home}),
    }
});
