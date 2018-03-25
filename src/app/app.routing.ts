import { Routes, RouterModule } from '@angular/router';
 
import { LoginComponent } from './pages/login/index';
import { MainComponent } from './pages/main/index';
import { AuthGuard } from './guard/index';
 
const appRoutes: Routes = [
    { path: '', component: MainComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);