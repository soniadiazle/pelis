import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient) { }

  getPeliculas(userInput) :Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?s=${userInput}&apikey=2235e600`);
    
  }

  getDetalles(imdbID) :Observable<any>{
    return this.http.get('http://www.omdbapi.com/?i='+imdbID+'&apikey=2235e600')
  }
}
