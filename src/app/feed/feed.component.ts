import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  publicaciones = [
    {
        "usuario": "@PerroLoco",
        "fotoUsuario": "/assets/imagenes/perro1.jpg",
        "id": "uiasdbiwa",
        "imagen": "/assets/imagenes/perro1.jpg",
        "caption": "Hola a todos"
      },
      {
        "usuario": "@Jose",
        "fotoUsuario": "/assets/imagenes/perro2.jpg",
        "id": "uhiadwb324",
        "imagen": "/assets/imagenes/perro2.jpg",
        "caption": "Bonito día"
      },
      {
        "usuario": "@Manuel",
        "fotoUsuario": "/assets/imagenes/perro1.jpg",
        "id": "ioefwbnoasd",
        "imagen": "/assets/imagenes/perro1.jpg",
        "caption": "Otra foto"
      }
  ]
}
