import { lazy } from "react";

import { Loader } from "./shared/components/Loader";

export const GithubPage = Loader(lazy(() => import("./pages/GithubPage")));
