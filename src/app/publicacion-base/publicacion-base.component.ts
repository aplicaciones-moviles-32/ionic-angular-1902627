import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { pubCompleta } from '../interfaces';
import { BdatosService } from '../bdatos.service';

@Component({
  selector: 'app-publicacion-base',
  templateUrl: './publicacion-base.component.html',
  styleUrls: ['./publicacion-base.component.css']
})
export class PublicacionBaseComponent implements OnInit {

  constructor(private pop: PopoverController, private db: BdatosService) { }

  ngOnInit(): void {
  }
  //Variables
  publVar: pubCompleta = {"caption":"Publicacion","fotoUsuario":"","imagen":"","usuario":"", "id":""}
  editando: boolean = false
  @Input() nuevaDesc: string = ""
  @Input() set publicacion(entrada: pubCompleta) {
    this.publVar = entrada
    this.nuevaDesc = entrada.caption
  }


  //Funciones
  //Popover
  async presentPopover(ev: any) {
    const popover = await this.pop.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  eliminar_pub() {
    this.db.eliminaPublicacion(this.publVar.id)
  }

  toglear() {
    this.editando = !this.editando
  }

  guardar() {
    this.publVar.caption = this.nuevaDesc
    console.log(this.nuevaDesc)
    this.db.updatePublicacion(this.publVar.id, this.publVar)
    this.toglear()

  }
}
