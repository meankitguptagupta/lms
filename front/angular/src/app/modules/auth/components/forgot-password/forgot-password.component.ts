import { Component, OnInit } from '@angular/core';
import { FormButton } from 'src/app/models/form-button';
import { UserService } from 'src/app/services/user/user.service';
import { FormBase } from 'src/app/models/formBase';
import { APIResponse } from 'src/app/models/api-response';
import { ForgotPassword as ForgotPasswordFields } from 'src/app/forms/forgot-password';
import { ForgotPassword } from 'src/app/models/definations/forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _user:UserService) { }

  ngOnInit() {
  }

  button:FormButton = {label: 'request password', status: false};

  getFields():Array<FormBase> {
    return ForgotPasswordFields;
  }

  submit(values:ForgotPassword) {
    this.button.status = true;
    this._user.forgotPassword(values).subscribe((res:APIResponse) => {

    }, (err:APIResponse) => {
      this.button.status = false;
    })
  }

}
