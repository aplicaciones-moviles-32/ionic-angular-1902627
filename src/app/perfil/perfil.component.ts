import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdatosService } from '../bdatos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private http: HttpClient, private bd: BdatosService) { }

  ngOnInit(): void {
    this.getUsuario()
  }

  getUsuario(): void{
    this.bd.getUsuario(this.bd.usuario_act).subscribe(res => {
      this.usuario = res
    })
  }

  usuario: any = {
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
