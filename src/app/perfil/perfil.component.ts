import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usuario = {
    "nombre": "Ruffles",
    "foto": "/assets/imagenes/Ruffles.png",
    "Followers": 543,
    "Following": 23,
    "Posts": 4,
    "descripcion": "Me llamo Ruffles" 
  }

  @Input() bio: string = ""
  editando = false

  guardarbio(): void {
    this.usuario.descripcion = this.bio;
    this.togleditar()
  }

  togleditar(): void {
    this.editando = !this.editando
    this.bio = ""
  }
}
