import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {

  constructor(public modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
