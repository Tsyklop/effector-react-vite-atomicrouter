import { chainRoute } from "atomic-router";
import {viewerModel} from "@/entities/viewer";

export function securedRoute(route) {
  return chainRoute({
    route,
    openOn: [viewerModel.viewerAuthCheckSuccess],
    beforeOpen: viewerModel.viewerAuthCheckStarted,
  });
}
