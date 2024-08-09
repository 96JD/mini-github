export default function getGraphQlGithubQuery(userName: string) {
	return {
		query: `
      {
        user(login: "${userName}") {
          avatarUrl
          bio
          email
          followers {
            totalCount
                }
          following {
            totalCount
          }
          location
          name
        repositories(ownerAffiliations: OWNER, first: 100, orderBy: {field: NAME, direction: ASC}) {
          edges {
            node {
              createdAt
              description
              id
              licenseInfo {
                spdxId
              }
              name
              url
              languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
          totalCount
        }        
        url
      }
    }
    `
	};
}
