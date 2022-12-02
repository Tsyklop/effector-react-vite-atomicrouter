import {attach, createEffect, sample} from "effector";
import {
  viewerModel
} from "@/entities/viewer";
import {signInUser, signOutUser} from "@/shared/api/auth";
import {getUserData} from "@/shared/api/user";
import {showErrorToast} from "@/shared/lib/toast";

export const signInFx = createEffect(async (data) => {
  return await signInUser(data);
});

export const signOutUserFx = createEffect(async () => {
  await signOutUser();
  return null;
});

export const checkAuthFx = attach({
  effect: async (viewer) => {
    return new Promise( (resolve) => {
      setTimeout(async () => {
        if (viewer) {
          return resolve(viewer);
        }
        return resolve(await getUserData());
      }, 2000);
    });
  },
  source: viewerModel.$viewer,
});

checkAuthFx.done.watch(({result}) => {
  viewerModel.viewerAuthCheckSuccess(result);
});

checkAuthFx.fail.watch(({ error }) => {
  viewerModel.viewerAuthCheckFailure(error.message);
});

sample({
  clock: signInFx.doneData,
  target: viewerModel.viewerSignInDone
});

/*sample({
  clock: checkAuthFx.doneData,
  fn: (viewer) => viewer,
  target: viewerDataRetrieved
});*/

sample({
  clock: viewerModel.viewerAuthCheckStarted,
  target: checkAuthFx,
});

sample({
  clock: viewerModel.viewerAuthCheckFailure,
  target: showErrorToast,
  fn: (reason) => (reason ? reason : "Error"),
});
