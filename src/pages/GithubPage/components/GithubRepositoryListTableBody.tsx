import _ from "lodash";

import { globalSliceSelectors } from "../../../reduxToolkit/globalSlice";
import { useAppSelector } from "../../../reduxToolkit/store";
import GithubRepositoryItem from "./GithubRepositoryItem";

export default function GithubRepositoryListTableBody() {
	const selectedUser = useAppSelector(globalSliceSelectors.selectedUser);
	return (
		<tbody>
			{_.map(selectedUser.repositories.edges, (edge) => (
				<GithubRepositoryItem key={edge.node.id} repository={edge.node} />
			))}
		</tbody>
	);
}
