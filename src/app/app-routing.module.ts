import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {

    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'starter',
    loadChildren: () => import('./starter/starter.module').then( m => m.StarterPageModule)
  },
   { path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'comptes',
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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
