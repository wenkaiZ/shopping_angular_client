import { Injectable,EventEmitter } from '@angular/core';
import { ShareInfoClass } from './shareInfoClass';
@Injectable({
  providedIn: 'root'
})
export class ShareInfoService {
  shareInfo: ShareInfoClass;
  logIn : Boolean = false;
  userName : string;
  change : EventEmitter<any>;
  constructor() {
    this.change = new EventEmitter();
   }
}
