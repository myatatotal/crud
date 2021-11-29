import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastraComponent } from './cadastra/cadastra.component';
import { EditaComponent } from './edita/edita.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [

  // {path: '', pathMatch:'full', redirectTo:'lista'},
  {path: 'cadastra', component:CadastraComponent},
  {path: 'edita/:id', component:EditaComponent},
  {path: 'lista', component:ListaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
