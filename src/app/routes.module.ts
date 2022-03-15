import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

const rutas = [
  { path: "feed", component: FeedComponent},
  { path: "perfil", component: PerfilComponent},
  { path: "publicacion/:id", component: PublicacionComponent},
  { path: "", redirectTo: "perfil", pathMatch: "full"}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class RoutesModule { }
