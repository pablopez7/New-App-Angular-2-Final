import { Component } from '@angular/core';

@Component({
    selector: 'administration',
    template: `
        <div class="container">
            <ul class="breadcrumb">
                <li><a [routerLink]="['/administration']">Admin</a></li>
                <li><a [routerLink]="['/administration/notes']">Admin Notes</a></li>
                <li><a [routerLink]="['/administration/messages']">Admin Messages</a></li>
            </ul>
            <h3>Administración</h3>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
    .breadcrumb { 
        width: 100%;
        list-style: none; 
        overflow: hidden; 
        font: 18px Helvetica, Arial, Sans-Serif;
    }
    .breadcrumb li { 
        float: left; 
    }
    .breadcrumb li a {
        color: lightcoral;
        text-decoration: none; 
        padding: 10px 0 10px 65px;
        position: relative; 
        display: block;
        float: left;
    }
    `]
})
export class AdminComponent { }