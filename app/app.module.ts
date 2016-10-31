import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AuthService } from './services/auth.service'
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

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent,
                  HomeComponent,
                  DashboardComponent,
                  ProfileComponent,
                  ContactComponent,
                  LoginComponent,
                  AdminComponent,
                  HomeAdminComponent,
                  NotesAdminComponent,
                  MessagesAdminComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthService, AuthGuard ]
})

export class AppModule { }