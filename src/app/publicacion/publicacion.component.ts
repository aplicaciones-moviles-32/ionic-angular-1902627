import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  publicacionid = this.ruta.snapshot.params["id"]

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
    "id": "ghjtr435",
    "imagen":"/assets/imagenes/steve.png",
  },
  {
    "id": "mnmvgdfr3",
    "imagen":"/assets/imagenes/carrusel.png",
  },
  {
    "id": "2343fddfgr",
    "imagen":"/assets/imagenes/bambi1.png",
  },
  {
    "id": "hfghf5654",
    "imagen":"/assets/imagenes/bambi2.png",
  },
  {
    "id": "gfgd545",
    "imagen":"/assets/imagenes/bambi3.png",
  },
  {
    "id": "gdegd3432",
    "imagen":"/assets/imagenes/bambi4.png",
  },
  {
    "id": "gfhf4345",
    "imagen":"/assets/imagenes/bambi5.png",
  },
  ]

  obtenerPublicacion(id:string) {
    var publicacion: any = {}
    for(let x = 0; x<this.publicaciones.length; x++) {
      if( id == this.publicaciones[x].id) {
        publicacion = this.publicaciones[x]
      }
    }
    return publicacion
  }

  resultado = this.obtenerPublicacion(this.publicacionid)

  
  ngOnInit(): void {
  }

}
