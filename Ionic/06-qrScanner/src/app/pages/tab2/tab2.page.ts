import { Component } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public dataLocal: DataLocalService) {}

  sendEmail() {
    this.dataLocal.sendEmail();
  }

  openRecord(record) {
    console.log('Register: ', record);
    this.dataLocal.openRecord(record);
  }

}
