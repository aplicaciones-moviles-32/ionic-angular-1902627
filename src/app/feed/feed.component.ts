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
    },
    {
      "nombre": "@Manuel",
      "foto": "/assets/imagenes/perro1.jpg",
      "caption": "Otra foto"
    }
  ]
}
