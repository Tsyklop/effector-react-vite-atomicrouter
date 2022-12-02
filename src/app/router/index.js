import { createHistoryRouter } from "atomic-router";
import { createEffect, sample } from "effector";
import { createHashHistory } from "history";
import {routes} from "@/shared/lib/routes";

export const routesConfig = [
  { path: "/", route: [routes.home, routes.backToHomeRoute] },
  { path: "/auth/signIn", route: [routes.signIn] },
  { path: "/admin", route: routes.admin.dashboard },
  { path: "/admin/users", route: routes.admin.users },
  { path: "/admin/files", route: routes.admin.files },
  { path: "/admin/materials", route: routes.admin.materials },
  { path: "/admin/plans", route: routes.admin.plans },
  { path: "/404", route: routes.notFound },
];

export const router = createHistoryRouter({
  routes: routesConfig,
  notFoundRoute: routes.notFound,
});

router.setHistory(createHashHistory());
router.initialized.watch(() => {
  console.log("router.initialized");
});

sample({
  clock: router.initialized,
  target: createEffect(() => {
    console.log("router.initialized");
  }),
});
