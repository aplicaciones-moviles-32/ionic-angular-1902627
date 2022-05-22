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
    this._publirefs = {};
    for(let key in publicaciones) {
      //Obtiene datos de la publicacion
      this.db.getPublicacionDetalle(publicaciones[key]).subscribe(res=>{
        if(res!=null) {
          this.db.getImagen(res.imagen).subscribe(imge =>{
            //Obtiene url imagen
            res.imagen = imge
            //agrega a publicaciones
            this._publirefs[publicaciones[key]] = res})
        }
      })
    }
  }

  _publirefs: keyval_pub = {}
}
