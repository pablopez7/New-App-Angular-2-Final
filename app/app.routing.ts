import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './components/app/app.component';
import { HomeComponent }   from './components/home/home.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProfileComponent }   from './components/profile/profile.component';
import { ContactComponent }   from './components/contact/contact.component';
import { LoginComponent }   from './components/login/login.component';

import { AuthGuard } from './authentication/auth.guard';

const appRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ AuthGuard ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ AuthGuard ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);