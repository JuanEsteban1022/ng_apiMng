import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor() { }

  /**
       * Valida el evento registrado
       * @param event
       */
  validateFormat(event) {
    let key;
    if (event.type === "paste") {
      key = event.clipboardData.getData("text/plain");
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /^([0-9])*$/;
    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

}
