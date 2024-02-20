import { Component, OnInit } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { RickEtMortyService } from '../../service/rick-et-morty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})

export class RickEtMortyDetailComponent implements OnInit{
  character : any;

  constructor(private rm : RickEtMortyService, private route : ActivatedRoute) {}
  listName !: any

  ngOnInit(): void {
    this.listName = this.rm.getCharacterByName(1);
    this.listName.valueChanges.subscribe(({data, error} : any) => {
      console.log(data.character);
      // console.log(error);
    });
    const id = this.route.snapshot.paramMap.get('id');
    //appel back
  }

}
