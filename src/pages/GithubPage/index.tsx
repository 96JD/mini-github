import { getParamFromUrl } from "96jd-url-params-utils";
import _ from "lodash";
import { useEffect, useState } from "react";

import { AppToaster } from "../../AppToaster";
import { APP_URL_PARAMS } from "../../AppUrlParams";
import { GITHUB_CONSTANTS, User } from "../../models/Github";
import { globalSliceActions, globalSliceSelectors } from "../../reduxToolkit/globalSlice";
import { useAppDispatch, useAppSelector } from "../../reduxToolkit/store";
import Spinner from "../../shared/components/Loader/components/Spinner";
import GithubRepositoryListTable from "./components/GithubRepositoryListTable";
import GithubUserCard from "./components/GithubUserCard";
import getGraphQlGithubQuery from "./functions";

export default function GithubPage() {
	const dispatch = useAppDispatch();

	const searchedUsername = useAppSelector(globalSliceSelectors.searchedUsername);
	const selectedUser = useAppSelector(globalSliceSelectors.selectedUser);

	const [isLoading, setIsLoading] = useState<boolean>();

	useEffect(() => {
		setIsLoading(true);
		if (!_.isEmpty(searchedUsername)) {
			fetch("https://api.github.com/graphql", {
				method: "POST",
				headers: {
					Authorization: `bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`
				},
				body: JSON.stringify(getGraphQlGithubQuery(searchedUsername))
			})
				.then((response) => response.json())
				.then((jsonResponse: { data: { user: User } }) => {
					dispatch(globalSliceActions.setSelectedUser(jsonResponse.data.user));
					setIsLoading(false);
				})
				.catch(() => {
					AppToaster.error("An error occurred!");
				});
		}
	}, [dispatch, searchedUsername]);

	useEffect(() => {
		const searchedUsernameParam = getParamFromUrl(APP_URL_PARAMS.SEARCHED_USERNAME);
		dispatch(
			globalSliceActions.setSearchedUsername(
				_.isNil(searchedUsernameParam) || _.isEmpty(searchedUsernameParam)
					? GITHUB_CONSTANTS.USERNAME
					: searchedUsernameParam
			)
		);
	}, [dispatch]);

	return isLoading ? (
		<Spinner />
	) : (
		!_.isNil(selectedUser) && (
			<>
				<GithubUserCard />
				{!_.isEmpty(selectedUser.repositories) && <GithubRepositoryListTable />}
			</>
		)
	);
}
