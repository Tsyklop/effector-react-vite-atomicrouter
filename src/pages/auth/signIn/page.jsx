import { useEvent, useStore } from "effector-react";
import React from "react";
import {Helmet} from "react-helmet-async";
import {
  $signInFormState,
  signInFormSubmit,
  signInFormLoginChange,
  signInFormPasswordChange,
} from "@/pages/auth/signIn/model";


export const SignInPage = () => {
  const signInForm = useStore($signInFormState);

  const formSubmit = useEvent(signInFormSubmit);

  return (
    <>

      <Helmet title='SignIn'/>

      <h1>LOGIN</h1>

      <form>
        <input
          type="text"
          name="login"
          onChange={(e) => signInFormLoginChange(e.currentTarget.value)}
          value={signInForm.login}
        />

        <input
          type="password"
          name="password"
          onChange={(e) => signInFormPasswordChange(e.currentTarget.value)}
          value={signInForm.password}
        />

        <button
          type="button"
          disabled={signInForm.authorizing}
          onClick={() => formSubmit()}
        >
          Login
        </button>
      </form>

    </>
  );
};
