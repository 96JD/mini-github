interface RepositoriesEdge {
	node: Repository;
}

interface Repositories {
	edges: RepositoriesEdge[];
	totalCount: number;
}

export interface User {
	avatarUrl: string;
	bio: string;
	email: string;
	followers: {
		totalCount: number;
	};
	following: {
		totalCount: number;
	};
	location: string;
	name: string;
	repositories: Repositories;
	url: string;
}

export interface Repository {
	createdAt: Date;
	description: string;
	id: string;
	licenseInfo: {
		spdxId: string;
	};
	name: string;
	url: string;
	languages: {
		edges: LanguagesEdge[];
	};
}

export interface LanguagesEdge {
	node: {
		name: string;
	};
}

export const GITHUB_CONSTANTS = {
	USERNAME: "96JD",

	INITIAL_USER: {
		avatarUrl: "",
		bio: "",
		email: "",
		followers: {
			totalCount: 0
		},
		following: {
			totalCount: 0
		},
		location: "",
		name: "",
		repositories: {
			edges: [],
			totalCount: 0
		},
		url: ""
	}
};
