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
  character !: any;

  constructor(private rm : RickEtMortyService, private route : ActivatedRoute) {}


  ngOnInit(): void {
    const id : number =  this.route.snapshot.paramMap.get('id') as unknown as number;
    this.rm.getCharacterById(id).valueChanges.subscribe(({data, error} : any) => {
      this.character = data.character;
      console.log(data.character);
      // console.log(error);
    });
    //appel back
  }

}
