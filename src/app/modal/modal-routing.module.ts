import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPage } from './modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  },
  {
    path: 'modal-content',
    loadChildren: () => import('./modal-content/modal-content.module').then( m => m.ModalContentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
