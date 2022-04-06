import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { publicacion } from '../interfaces'
import { BdatosService } from '../bdatos.service'

interface keyval_pub {
  [key: string]: publicacion
}

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private db: BdatosService) { }

  ngOnInit(): void {
  }

  @Input() set publirefs(publicaciones: any) {
    for(let key in publicaciones) {
      this.db.getPublicacionDetalle(publicaciones[key]).subscribe(res=>{
        this._publirefs[publicaciones[key]] = res
      })
    }
  }

  _publirefs: keyval_pub = {}
}
