import { isEnterPressed } from "96jd-accessibility-utils";
import { addParamToUrl } from "96jd-url-params-utils";
import _ from "lodash";
import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import { APP_URL_PARAMS } from "../../../../AppUrlParams";
import { GITHUB_CONSTANTS } from "../../../../models/Github";
import { globalSliceActions } from "../../../../reduxToolkit/globalSlice";
import { useAppDispatch } from "../../../../reduxToolkit/store";

export default function NavbarSearchInput() {
	const dispatch = useAppDispatch();

	const [searchedUsername, setSearchedUsername] = useState<string>("");

	const onGithubUsernameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value;
		addParamToUrl(APP_URL_PARAMS.SEARCHED_USERNAME, searchValue);
		setSearchedUsername(searchValue);
	}, []);

	const searchUserInfo = useCallback(() => {
		dispatch(
			globalSliceActions.setSearchedUsername(
				_.isEmpty(searchedUsername) ? GITHUB_CONSTANTS.USERNAME : searchedUsername
			)
		);
	}, [dispatch, searchedUsername]);

	const onInputKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (isEnterPressed(e)) {
				searchUserInfo();
			}
		},
		[searchUserInfo]
	);

	return (
		<InputGroup>
			<Form.Control
				size="sm"
				type="text"
				placeholder="Search Username..."
				value={searchedUsername}
				onChange={onGithubUsernameChange}
				onKeyDown={onInputKeyDown}
			/>
			<Button variant="secondary" onClick={searchUserInfo}>
				Search
			</Button>
		</InputGroup>
	);
}
