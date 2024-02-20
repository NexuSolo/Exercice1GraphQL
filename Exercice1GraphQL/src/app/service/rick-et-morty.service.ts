import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
	providedIn: 'root',
})
export class RickEtMortyService {

	constructor(private apollo: Apollo) {
	}

	getCharacter() {
		return this.apollo.watchQuery({
			query: 
			gql`{
				characters {
					results{
						id,
						name,
						image
					}
				}
			}`,
			fetchPolicy: 'network-only',
			errorPolicy: 'all',
			context: {
				uri: 'https://rickandmortyapi.com/graphql'
			}
		});
	}

	getCharacterByName(id: number) {
		return this.apollo.watchQuery({
			query: 
			gql`{
				character(id:"${id}") {
					id
					name
					image
					status
					type
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
			  }`,
			fetchPolicy: 'network-only',
			errorPolicy: 'all',
			context: {
				uri: 'https://rickandmortyapi.com/graphql'
			}
		});
	}
}
