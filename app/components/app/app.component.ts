import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <div class="nav-wrapper light-blue darken-3">
                <a [routerLink]="['/']" class="brand-logo right">Angular 2</a>
                <ul id="nav-mobile" class="left">
                    <li><a [routerLink]="['/']">Home</a></li>
                    <li><a [routerLink]="['/contact']">Contacto</a></li>
                    <li><a [routerLink]="['/profile']">Profile</a></li>
                    <li><a [routerLink]="['/dashboard']">Dashboard</a></li>

                    <li [ngSwitch]="authService.isLoggedIn">
                        <a *ngSwitchCase="false" [routerLink]="['/login']">Login</a>
                        <a *ngSwitchCase="true" (click)="logout()">Logout</a>
                    </li>
                </ul>
             </div>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    constructor(public authService: AuthService, public router: Router){ }

    logout(){
        this.authService.logout()
        this.router.navigate(['/login'])
    }
}