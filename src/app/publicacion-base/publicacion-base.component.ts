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

  @Input() publicacion: pubCompleta = {"caption":"Publicacion","fotoUsuario":"","imagen":"","usuario":"", "id":""}

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
    this.db.eliminaPublicacion(this.publicacion.id)
  }
}
