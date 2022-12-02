import compose from "compose-function";
import { withHelmet } from "@/app/providers/withHelmet.jsx";
import { withRouter } from "@/app/providers/withRouter.jsx";

export const withProviders = compose(withHelmet, withRouter);
