import { Navigate, RouteObject } from "react-router-dom";

import AppLayout from "./AppLayout";
import { GithubPage } from "./AppPages";

export const APP_ROUTES = {
	DEFAULT: "/",
	PAGE_NOT_FOUND: "*"
};

export const AppRoutes: RouteObject[] = [
	{
		path: APP_ROUTES.DEFAULT,
		element: <AppLayout />,
		children: [
			{
				path: APP_ROUTES.PAGE_NOT_FOUND,
				element: <Navigate to={APP_ROUTES.DEFAULT} replace />
			},
			{
				path: APP_ROUTES.DEFAULT,
				element: <GithubPage />
			}
		]
	}
];
