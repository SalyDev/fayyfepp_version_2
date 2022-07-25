import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'starter',
    loadChildren: () => import('./starter/starter.module').then( m => m.StarterPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'comptes',
    canActivate:[AuthGuard],
    loadChildren: () => import('./comptes/comptes.module').then( m => m.ComptesPageModule)
  },

  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'verification-otp',
    loadChildren: () => import('./verification-otp/verification-otp.module').then( m => m.VerificationOtpPageModule)
  },
  {
    path: 'code-pin',
    loadChildren: () => import('./code-pin/code-pin.module').then( m => m.CodePinPageModule)
  },
  {
    path: 'confirmation-code-pin',
    loadChildren: () => import('./confirmation-code-pin/confirmation-code-pin.module').then( m => m.ConfirmationCodePinPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
