import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html'
})

export class LoginComponent {
    
    user: Object = {
        username: '',
        password: ''
    };

    tryLogin: boolean = false;

    constructor(public authService: AuthService, public router: Router){}

    onLogin(){
        this.tryLogin = true;
        this.authService.login().subscribe(() => {
            if(this.authService.isLoggedIn){
                this.tryLogin = false;
                this.router.navigate(['/profile']);
            }
        })
    }
}