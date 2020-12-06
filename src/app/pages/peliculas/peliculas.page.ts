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
    //La api nos proporciona un objeto así {Search: [...]}

    let pelis = this.peliculaService.getPeliculas(this.userInput); //esto es el observable
    
    //Observable.subscribe nos permite acceder al objeto interno del observable
    //En este caso la lista de pelis (dentro de "Search")
    pelis.subscribe(observer => {
      //Creamos un observable y le asignamos el objeto ya filtrado
      let res = new Observable(obs => {
        obs.next(observer.Search); //[...]
      });
      
      this.results = res;
    });
  }
  botonClick(){
    let pelis = this.peliculaService.getPeliculas(this.userInput);
    pelis.subscribe(observer => {
      //Creamos un observable y le asignamos el objeto ya filtrado
      let res = new Observable(obs => {
        obs.next(observer.Search); //[...]
      });
      
      this.results = res;
    });
  }

  ngOnInit() {
  }
}