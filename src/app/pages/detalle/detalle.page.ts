import { Component, OnInit } from '@angular/core';
import {PeliculaService} from 'src/app/services/pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  information = null
  constructor(private activatedRoute: ActivatedRoute, private peliculaService: PeliculaService) { }

  ngOnInit() {

    let imdbID = this.activatedRoute.snapshot.paramMap.get('imdbID');
    this.peliculaService.getDetalles(imdbID).subscribe(result => {
      this.information = result;
    console.log(result);
    console.log(imdbID);
  });
}

}



