import { Component, OnInit } from '@angular/core';
import { RickEtMortyService } from '../../service/rick-et-morty.service';
import { Observable } from 'rxjs';
import { Query, QueryRef } from 'apollo-angular';
import { ActivatedRoute, RouterLink } from '@angular/router';

export interface Characters {
	  id: string
	  name: string
	  image: string
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
  page : number = 1;
  ngOnInit(): void {
    this.page =  this.route.snapshot.paramMap.get('page') as unknown as number || 1;
    this.rm.getCharacter(this.page).valueChanges.subscribe(({data}:any) => {
      console.log(data.characters.results);
      this.listeName = data.characters.results as Characters[];
      for(const character of this.listeName){
        console.log(character);
      }
    });
  }

  constructor(private rm : RickEtMortyService, private route : ActivatedRoute) {

  }

  



}
