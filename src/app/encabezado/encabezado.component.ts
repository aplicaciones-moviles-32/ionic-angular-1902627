import { Component, OnInit } from '@angular/core';
import { BdatosService } from '../bdatos.service';
import { PopoverController } from '@ionic/angular';
import { PopoverPerfilComponent } from '../popover-perfil/popover-perfil.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private dbase: BdatosService, private pop: PopoverController) { }
  usuario: any
  foto:any
  ngOnInit(): void {
    this.dbase.getUsuario().subscribe(res=> {
      this.usuario = res
      this.foto = this.usuario.foto
    })
  }
  async presentPopover(ev: any) {
    const popover = await this.pop.create({
      component: PopoverPerfilComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
}
