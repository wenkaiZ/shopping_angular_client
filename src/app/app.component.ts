import { Component } from '@angular/core';
import { ShareInfoClass } from './shareInfoClass';
import { ShareInfoService } from './share-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Anfular_Client';
  shareInfoClass: ShareInfoClass = new ShareInfoClass();
  constructor(private shareInfoService:ShareInfoService){
    this.shareInfoService.change.subscribe((shareInfo: ShareInfoClass)=>{
      this.shareInfoClass = shareInfo;
    })
  }
}
