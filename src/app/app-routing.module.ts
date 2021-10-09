import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NewsPageComponent} from "./home/news-page/news-page.component";
import {NewReservationComponent} from "./home/new-reservation/new-reservation.component";
import {MyReservationsComponent} from "./home/my-reservations/my-reservations.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', redirectTo:'/news', pathMatch: 'full'},
      {path: 'news', component: NewsPageComponent},
      {path: 'new-reservation',component: NewReservationComponent},
      {path: 'my-reservations',component: MyReservationsComponent},
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin-page/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
