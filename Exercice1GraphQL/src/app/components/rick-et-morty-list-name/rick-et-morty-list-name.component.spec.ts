import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickEtMortyListNameComponent } from './rick-et-morty-list-name.component';

describe('RickEtMortyListNameComponent', () => {
  let component: RickEtMortyListNameComponent;
  let fixture: ComponentFixture<RickEtMortyListNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickEtMortyListNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RickEtMortyListNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
