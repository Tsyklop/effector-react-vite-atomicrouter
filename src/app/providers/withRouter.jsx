import { RouterProvider } from "atomic-router-react";
import React from "react";
import { router } from "@/app/router";

export const withRouter = (component) => {
    return (() => (
        <RouterProvider router={router}>{component()}</RouterProvider>
    ));
}
