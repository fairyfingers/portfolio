import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import HomepageComponent from './containers/homepage/homepage.component';
import SkillsComponent from './containers/skills/skills.component';
import ProjectsComponent from './containers/projects/projects.component';


const routes: Routes = [
    { 
        path: '',
        component: HomepageComponent,
        pathMatch: 'full'
    },
    { 
        path: 'skills',
        component: SkillsComponent
    },
    { 
        path: 'projects',
        component: ProjectsComponent
    },
    { 
        path: '**',
        redirectTo: '/'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
