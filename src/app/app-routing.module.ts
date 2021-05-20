import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import HomepageComponent from './containers/homepage/homepage.component';
import ProjectsComponent from './containers/projects/projects.component';
import SkillsCommunicationComponent from './containers/skills/components/skills-communication/skills-communication.component';
import SkillsComponent from './containers/skills/skills.component';

const routes: Routes = [{
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'skills',
    children: [{
      path: '',
      component: SkillsComponent
    },
    {
      path: 'communication',
      component: SkillsCommunicationComponent
    }]
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
