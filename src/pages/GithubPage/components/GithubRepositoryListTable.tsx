import { Table } from "react-bootstrap";

import GithubRepositoryListTableBody from "./GithubRepositoryListTableBody";
import GithubRepositoryListTableHead from "./GithubRepositoryListTableHead";

export default function GithubRepositoryListTable() {
	return (
		<Table className="rounded overflow-hidden" variant="dark" responsive striped bordered hover>
			<GithubRepositoryListTableHead />
			<GithubRepositoryListTableBody />
		</Table>
	);
}
