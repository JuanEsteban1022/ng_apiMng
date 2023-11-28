import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/primeng';
import { UtilServiceService } from 'src/app/services/utilService/util-service.service';

@Component({
  selector: 'app-forms-new-service',
  templateUrl: './forms-new-service.component.html',
  styleUrls: ['./forms-new-service.component.css']
})
export class FormsNewServiceComponent implements OnInit {
  userform: FormGroup;
  constructor(private fb: FormBuilder, public utilService: UtilServiceService) { }

  ngOnInit() {
    this.form();
  }

  onSubmit() { console.log(this.userform.value); }

  form() {
    this.userform = this.fb.group({
      nameService: ['test-service', Validators.required],
      bdName: ['codesaaa', Validators.required],
      ip: ['', [Validators.required, Validators.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]],
      port: ['5432', [Validators.required, Validators.pattern('^[0-9\D]+$')]],
      schema: ['qbl_mng', Validators.required],
      username: ['Qsofttt', Validators.required],
      password: ['05740574', Validators.required],
    });
  }

  validKeyCodeASCII(evento) {
    var code = (evento.which) ? evento.which : evento.keyCode;
    if ((code >= 48 && code <= 57 || code >= 96 && code <= 105) || code === 8 || code === 46) {

    } else { // Keys diferentes a códigos ASCII númericos
      return;
    }
  }


  get seccion1() {
    return this.userform.get('nameService').invalid
      || this.userform.get('bdName').invalid
      || this.userform.get('ip').invalid
      || this.userform.get('port').invalid
      || this.userform.get('schema').invalid
      || this.userform.get('username').invalid
  }

  // get valid_ip() {
  //   return this.userform.get('ip').invalid && this.userform.get('ip').touched
  // }

}
