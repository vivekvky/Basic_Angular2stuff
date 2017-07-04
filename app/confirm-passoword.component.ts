import { Component } from 'angular2/core'
import { Validators, ControlGroup, FormBuilder } from 'angular2/common'
import {PasswordValidator} from './passwordvalidator'

@Component({
    selector: 'confirm-password',
    templateUrl: './app/confirm-password.html'
})

export class ConfirmPasswordComponent {
    confirmpassword: ControlGroup
    constructor(fb: FormBuilder) {
        this.confirmpassword = fb.group({
            oldpassword: ['', Validators.compose([Validators.required,PasswordValidator.passwordlength])],
            newpassword: ['',Validators.compose([Validators.required,PasswordValidator.passwordlength])],
            newconfirmpassword: ['',Validators.required]},{validator:PasswordValidator.confirmpasswordmatch})
    }

    onsubmit() {
        console.log(this.confirmpassword);
    }

}