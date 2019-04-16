import { Injectable,EventEmitter } from '@angular/core';
import { ShareInfoClass } from './shareInfoClass';
@Injectable({
  providedIn: 'root'
})
export class ShareInfoService {
  static logIn : Boolean = false;
  static userName : string;
  change : EventEmitter<any>;
  constructor() {
    this.change = new EventEmitter();
   }
}
