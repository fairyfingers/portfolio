import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import HomepageComponent from './containers/homepage/homepage.component';
import SkillsComponent from './containers/skills/skills.component';


const routes: Routes = [
    { 
        path: '',
        component: HomepageComponent,
        pathMatch: 'full'
    },
    { 
        path: 'skills',
        component: SkillsComponent,
        pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
