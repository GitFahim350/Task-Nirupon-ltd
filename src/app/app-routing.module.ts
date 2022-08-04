import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
    
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'changepassword',
    component:ChangepasswordComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'',
    component:LoginComponent
    
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
