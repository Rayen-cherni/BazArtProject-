import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaussuresComponent } from './chaussures/chaussures.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { PromotionComponent } from './promotion/promotion.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { PullComponent } from './pull/pull.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'chaussures', component: ChaussuresComponent},
  {path:'accessoires', component: AccessoiresComponent},
  {path:'promotion', component: PromotionComponent},
  {path: 'nouveautes', component:NouveautesComponent},
  {path: 'pull', component:PullComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
