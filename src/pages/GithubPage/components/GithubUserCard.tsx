import _ from "lodash";
import { Card, Image } from "react-bootstrap";

import { globalSliceSelectors } from "../../../reduxToolkit/globalSlice";
import { useAppSelector } from "../../../reduxToolkit/store";
import Link from "../../../shared/components/Link";

export default function GithubUserCard() {
	const selectedUser = useAppSelector(globalSliceSelectors.selectedUser);

	const USER_INFO = [
		{
			label: "",
			icon: "bi-geo-alt-fill",
			value: !_.isNil(selectedUser.location) ? selectedUser.location : "Not Provided!"
		},
		{ label: "Followers:", icon: "bi-people-fill", value: _.toString(selectedUser.followers.totalCount) },
		{ label: "Following:", icon: "bi-people-fill", value: _.toString(selectedUser.following.totalCount) }
	];

	return (
		<Card className="main-bg text-white mb-4">
			<Card.Header>
				<Link href={selectedUser.url} label={selectedUser.name} />
			</Card.Header>
			<Card.Body>
				<div className="d-flex mb-4">
					<Image rounded height={100} src={selectedUser.avatarUrl} alt={selectedUser.avatarUrl} />
					<div>
						{_.map(USER_INFO, (info) => (
							<Card.Text key={info.label} className="ms-4">
								<i className={`bi ${info.icon}`}>{` ${info.label} ${info.value}`}</i>
							</Card.Text>
						))}
					</div>
				</div>
				<Card.Text className="p-1">{selectedUser.bio}</Card.Text>
			</Card.Body>
		</Card>
	);
}
