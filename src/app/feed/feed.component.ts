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

  imagenes = [
    "/assets/imagenes/perro1.jpg",
    "/assets/imagenes/perro1.jpg",
    "/assets/imagenes/perro1.jpg",
    "/assets/imagenes/perro1.jpg"
  ];
  perros = [
    {
      "nombre": "@PerroLoco",
      "foto": "/assets/imagenes/perro1.jpg",
      "caption": "Hola a todos"
    },
    {
      "nombre": "@José",
      "foto": "/assets/imagenes/perro2.jpg",
      "caption": "Bonito día"
    }
  ]
}
