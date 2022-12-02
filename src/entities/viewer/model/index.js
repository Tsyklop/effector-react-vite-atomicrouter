import {createEvent, createStore, sample,} from "effector";
import connectLocalStorage from "effector-localstorage";

const defaultViewerState = null;

const tokenLocalStorage = connectLocalStorage("token").onError((err) =>
    console.log(err)
);

export const viewerSignedIn = createEvent("viewer signed in");

export const viewerSignInDone = createEvent("viewer sign in done");

export const viewerAuthCheckStarted = createEvent("viewer auth check started");
export const viewerAuthCheckSuccess = createEvent("viewer auth check success");
export const viewerAuthCheckFailure = createEvent("viewer auth check failure");

export const $token = createStore(tokenLocalStorage.init(null), {name: "token"})
    .on(viewerSignInDone, (_, {token}) => token);
    // .on(viewerTokenRetrieved, (_, token) => token);

export const $viewer = createStore(defaultViewerState, {name: "viewer"})
    .on(viewerSignInDone, (_, {user}) => user)
    .on(viewerAuthCheckSuccess, (state, viewer) => ({...state, ...viewer}));

$token.watch((data) => {
    tokenLocalStorage(data);
});
