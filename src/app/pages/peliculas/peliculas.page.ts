import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {PeliculaService} from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  results: Observable<any>;
  userInput;
  constructor(private peliculaService: PeliculaService) {
    
  }
  botonClick(){
    let pelis = this.peliculaService.getPeliculas(this.userInput);
    pelis.subscribe(observer => {
      
      let res = new Observable(obs => {
        obs.next(observer.Search); 
      });
      
      this.results = res;
    });
  }

  ngOnInit() {
  }
}