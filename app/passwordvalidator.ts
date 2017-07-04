import { Control, ControlGroup, Validators } from 'angular2/common'

export class PasswordValidator {

    static passwordlength(control: Control) {
        var minlength = 3
        if (control.value === null)
            return (null)
        else if (control.value.length < minlength)
            return ({ invalidlength: true })

    }

    // static oldpasswordmatch(control: Control, match: ControlGroup) {
    //     var oldpass = match.find('oldpassword').value
    //     var newpass = control.value
    //         setTimeout(function () {
    //             if (oldpass === newpass) {
    //                 return({ invalidmatch: true })
    //             }
    //             else {
    //                 return(null)
    //             }
    //     })
    // }

    static confirmpasswordmatch(group: ControlGroup) {
        var newpass = group.find('newpassword').value
        var newconfirmpass = group.find('newconfirmpassword').value

            if (newpass =='' || newconfirmpass =='') {
                return null
            }

            if (newpass != newconfirmpass) {
                return{ notconfirmed: true }
            }
         return null
    }
}