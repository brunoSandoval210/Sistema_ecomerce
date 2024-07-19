import { Routes } from '@angular/router';
import { HomeComponent } from './components/user/home/home.component';
import { SkeletorUserComponent } from './components/user/layouts/skeletor-user/skeletor-user.component';
import { CatalogueComponent } from './components/user/catalogue/catalogue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'',
        component: SkeletorUserComponent,
        children:[
            {path: 'home',title:'Home', component: HomeComponent},
            {path:'products',title:'Productos',component:CatalogueComponent}
        // Otras rutas protegidas
    ]
    }
];