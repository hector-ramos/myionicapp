import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { ModalContentPage } from '../modal/modal-content/modal-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule
  ],
  declarations: [ModalPage, ModalContentPage],
  entryComponents: [ModalContentPage]
})
export class ModalPageModule {}
