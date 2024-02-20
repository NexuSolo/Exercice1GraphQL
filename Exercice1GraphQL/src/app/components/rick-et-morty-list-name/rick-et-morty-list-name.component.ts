import { Component, OnInit } from '@angular/core';
import { RickEtMortyService } from '../../service/rick-et-morty.service';
import { Observable } from 'rxjs';
import { Query, QueryRef } from 'apollo-angular';

@Component({
  selector: 'app-rick-et-morty-list-name',
  standalone: true,
  imports: [],
  templateUrl: './rick-et-morty-list-name.component.html',
  styleUrl: './rick-et-morty-list-name.component.css'
})
export class RickEtMortyListNameComponent implements OnInit{
  listeName !: QueryRef<unknown>;

  ngOnInit(): void {
    this.listeName = this.rm.getCharacter();
    console.log(this.listeName);
  }

  constructor(private rm : RickEtMortyService) {

  }

  



}
