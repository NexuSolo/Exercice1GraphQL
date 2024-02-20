import { Component, OnInit } from '@angular/core';
import { RickEtMortyService } from '../../service/rick-et-morty.service';
import { Observable } from 'rxjs';
import { Query, QueryRef } from 'apollo-angular';
import { RouterLink } from '@angular/router';

export interface Characters {
	results?: {
	  id: string
	  name: string
	  image: string
	} 
}
@Component({
  selector: 'app-rick-et-morty-list-name',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './rick-et-morty-list-name.component.html',
  styleUrl: './rick-et-morty-list-name.component.css'
})

export class RickEtMortyListNameComponent implements OnInit{
  listeName : Characters[] = [];

  ngOnInit(): void {
    this.rm.getCharacter().valueChanges.subscribe(({data}:any) => {
      console.log(data.characters.results);
      this.listeName = data.characters.results as Characters[];
    });
  }

  constructor(private rm : RickEtMortyService) {

  }

  



}
