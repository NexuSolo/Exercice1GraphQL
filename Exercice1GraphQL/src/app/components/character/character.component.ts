import { Component, OnInit } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { RickEtMortyService } from '../../service/rick-et-morty.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})

export class RickEtMortyDetailComponent implements OnInit{
  listeName !: QueryRef<unknown>;

  ngOnInit(): void {
    this.listeName = this.rm.getCharacterByName(1);
    this.listeName.valueChanges.subscribe(({data, error} : any) => {
      console.log(data.characters.results);
      // console.log(error);
    });
  }

  constructor(private rm : RickEtMortyService) {}
}
