import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './authentication/auth.guard';

import { AppComponent }   from './components/app/app.component';
import { HomeComponent }   from './components/home/home.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProfileComponent }   from './components/profile/profile.component';
import { ContactComponent }   from './components/contact/contact.component';
import { LoginComponent }   from './components/login/login.component';

//Componentes de Administracion
import { AdminComponent }   from './components/administration/admin/admin.component';
import { HomeAdminComponent }   from './components/administration/home/home-admin.component';
import { NotesAdminComponent }   from './components/administration/notes/notes-admin.component';
import { MessagesAdminComponent }   from './components/administration/messages/messages-admin.component';


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
    },
    {
        path: 'administration',
        component: AdminComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: '',
                component: HomeAdminComponent
            },
            {
                path: 'notes',
                component: NotesAdminComponent
            },
            {
                path: 'messages',
                component: MessagesAdminComponent
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);