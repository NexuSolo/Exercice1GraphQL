import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
	providedIn: 'root',
})
export class RickEtMortyService {

	constructor(private apollo: Apollo) {
	}

	getCharacter(page: number) {
		page = Number(page);
		return this.apollo.watchQuery({
		  query: gql`
			query GetCharacters($page: Int!) {
			  characters(page: $page) {
				results {
				  id
				  name
				  image
				}
			  }
			}
		  `,
		  variables: {
			page: page
		  },
		  fetchPolicy: 'network-only',
		  errorPolicy: 'all',
		  context: {
			uri: 'https://rickandmortyapi.com/graphql'
		  }
		});
	  }
	getCharacterById(id: number) {
		return this.apollo.watchQuery({
		  query: gql`
			query GetCharacterById($id: ID!) {
			  character(id: $id) {
				id
				name
				image
				status
				type
				species
				gender
				origin {
				  name
				}
				location {
				  name
				}
				episode {
				  name
				  episode
				  air_date
				  created
				}
				created
			  }
			}
		  `,
		  variables: {
			id: id
		  },
		  fetchPolicy: 'network-only',
		  errorPolicy: 'all',
		  context: {
			uri: 'https://rickandmortyapi.com/graphql'
		  }
		});
	  }
}
