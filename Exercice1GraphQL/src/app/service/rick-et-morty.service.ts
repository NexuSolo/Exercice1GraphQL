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
}
