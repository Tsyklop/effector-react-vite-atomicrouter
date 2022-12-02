import { combine, createEvent, createStore, sample } from "effector";
import { authByCredentialsModel } from "@/features/auth";

export const signInFormSubmit = createEvent("sign in form submit");

export const signInFormResetInputs = createEvent("sign in form reset inputs");

export const signInFormLoginChange = createEvent("sign in form login change");
export const signInFormPasswordChange = createEvent(
  "sign in form password change"
);

const $signInLogin = createStore("")
  .on(signInFormLoginChange, (_, login) => login)
  .reset(signInFormResetInputs)
  .reset(authByCredentialsModel.signInFx.done);

const $signInPassword = createStore("")
  .on(signInFormPasswordChange, (_, password) => password)
  .reset(signInFormResetInputs)
  .reset(authByCredentialsModel.signInFx.done);

const $signInAuthorizing = createStore(false)
  .on(authByCredentialsModel.signInFx.pending, () => true)
  .reset(authByCredentialsModel.signInFx.finally);

export const $signInFormState = combine({
  login: $signInLogin,
  password: $signInPassword,
  authorizing: $signInAuthorizing,
});

sample({
  clock: signInFormSubmit,
  source: $signInFormState,
  target: authByCredentialsModel.signInFx,
});
