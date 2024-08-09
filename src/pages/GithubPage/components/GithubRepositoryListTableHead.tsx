import _ from "lodash";

import { globalSliceSelectors } from "../../../reduxToolkit/globalSlice";
import { useAppSelector } from "../../../reduxToolkit/store";

export default function GithubRepositoryListTableHead() {
	const selectedUser = useAppSelector(globalSliceSelectors.selectedUser);

	const TABLE_HEADERS = [
		`Repository (${_.toString(selectedUser.repositories.totalCount)})`,
		"Description",
		"Languages",
		"License",
		"Created Date"
	];

	return (
		<thead>
			<tr>
				{_.map(TABLE_HEADERS, (header) => (
					<th key={header}>{header}</th>
				))}
			</tr>
		</thead>
	);
}
