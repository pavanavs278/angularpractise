import { AbstractControl } from '@angular/forms';

export class PasswordValidator{

    static validOldpassword(control:AbstractControl){ 

        return new Promise((resolve) => {
            if (control.value !== 'pavan')
                resolve({ invalidOldpassword: true });
            else
                resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newpassword');
        let confirmPassword = control.get('confirmpassword');

        if (newPassword?.value !== confirmPassword?.value)
            return { passwordsShouldMatch: true };
        
        return null;
    }

}