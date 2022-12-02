import React from "react";
import { HelmetProvider } from "react-helmet-async";

export const withHelmet = (component) => () => (
    <HelmetProvider>{component()}</HelmetProvider>
);
