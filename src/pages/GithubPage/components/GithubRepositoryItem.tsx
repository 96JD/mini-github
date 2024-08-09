import { format } from "date-fns";
import _ from "lodash";

import { LanguagesEdge, Repository } from "../../../models/Github";
import Link from "../../../shared/components/Link";
import { SHARED_CONSTANTS } from "../../../shared/constants";

interface Props {
	repository: Repository;
}

export default function GithubRepositoryItem({ repository }: Readonly<Props>) {
	return (
		<tr>
			<td>
				<Link href={repository.url} label={repository.name} />
			</td>
			<td>{repository.description}</td>
			<td>
				{_.map(repository.languages.edges, (edge: LanguagesEdge, index) =>
					index === _.size(repository.languages.edges) - 1 ? edge.node.name : `${edge.node.name} - `
				)}
			</td>
			<td>{!_.isNil(repository.licenseInfo) && repository.licenseInfo.spdxId}</td>
			<td>{format(new Date(repository.createdAt), SHARED_CONSTANTS.DATE_FORMAT)}</td>
		</tr>
	);
}
