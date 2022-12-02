import React from "react";
import { Helmet } from "react-helmet-async";
import { withProviders } from "@/app/providers";
import { Pages } from "@/pages";

import '@/processes';

const helmetDefaultParams = {
  defaultTitle: "effector-react-vite-atomicrouter",
  titleTemplate: "%s",
  htmlAttributes: { lang: "en" },
};

function Application() {
  return (
    <>
      <Helmet {...helmetDefaultParams}>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Pages />
    </>
  );
}

export default withProviders(Application);
