import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
// import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';
import { ActionSheetPage } from './action-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ActionSheetPageRoutingModule
    RouterModule.forChild([
      {
        path: '',
        component: ActionSheetPage
      }
    ])
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
