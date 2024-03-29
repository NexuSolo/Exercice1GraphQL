import { Routes } from '@angular/router';
import { RickEtMortyListNameComponent } from './components/rick-et-morty-list-name/rick-et-morty-list-name.component';
import { RickEtMortyDetailComponent } from './components/character/character.component';

export const routes: Routes = [
    { path: ':page', component: RickEtMortyListNameComponent},
    { path: 'character/:id', component: RickEtMortyDetailComponent}
];
