import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { pubCompleta } from '../interfaces';

@Component({
  selector: 'app-publicacion-base',
  templateUrl: './publicacion-base.component.html',
  styleUrls: ['./publicacion-base.component.css']
})
export class PublicacionBaseComponent implements OnInit {

  constructor(private pop: PopoverController) { }

  ngOnInit(): void {
  }
  @Input() id = ""
  @Input() publicacion: pubCompleta = {"caption":"Publicacion","fotoUsuario":"","imagen":"","usuario":""}
  @Input() redireccionar: boolean = false

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
}
