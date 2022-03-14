import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    publicaciones = [
      {
        "id": "adr3q212",
        "imagen":"/assets/imagenes/jose.png",
      },
      {
        "id": "65423",
        "imagen":"/assets/imagenes/jesus.png",
      },
      {
        "id": "34f4f",
        "imagen":"/assets/imagenes/morgan.png",
      },
      {
        "id": "45f43d",
        "imagen":"/assets/imagenes/raul.png",
      },
      {
        "id": "23432ff4",
        "imagen":"/assets/imagenes/shutter.png",
      },
      {
        "id": "234d33",
        "imagen":"/assets/imagenes/steve.png",
      },
  ]
}
