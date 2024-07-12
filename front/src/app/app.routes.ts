import { Routes } from '@angular/router';
import { HomeComponent } from './components/user/home/home.component';
import { SkeletorUserComponent } from './components/user/layouts/skeletor-user/skeletor-user.component';
import { CatalogueComponent } from './components/user/catalogue/catalogue.component';

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




/*
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: SkeletonComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      // Otras rutas protegidas
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 */