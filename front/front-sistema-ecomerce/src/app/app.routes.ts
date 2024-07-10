import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { CatalogueComponent } from './user/catalogue/catalogue.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'catalogue', component: CatalogueComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}

