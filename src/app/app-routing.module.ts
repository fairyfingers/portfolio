import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import HomepageComponent from './containers/homepage/homepage.component';
import ProjectsByComponent from './containers/projects/components/by/by.component';
import ProjectsComponent from './containers/projects/projects.component';
import ProjectsForkComponent from './containers/projects/components/fork/fork.component';
import ProjectsGarrisonComponent from './containers/projects/components/garrison/garrison.component';
import SkillsArchitectureDesignComponent from './containers/skills/components/skills-architecture-design/skills-architecture-design.component';
import SkillsClientInteractionComponent from './containers/skills/components/skills-client-interaction/skills-client-interaction.component';
import SkillsCommunicationComponent from './containers/skills/components/skills-communication/skills-communication.component';
import SkillsComponent from './containers/skills/skills.component';
import SkillsTechIntelligenceComponent from './containers/skills/components/skills-tech-intelligence/skills-tech-intelligence.component';
import SkillsTestsComponent from './containers/skills/components/skills-tests/skills-tests.component';

const routes: Routes = [{
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'projects',
    children: [{
      path: '',
      component: ProjectsComponent,
      children: [{
        path: 'by',
        component: ProjectsByComponent
      },
      {
        path: 'fork',
        component: ProjectsForkComponent
      },
      {
        path: 'garrison',
        component: ProjectsGarrisonComponent
      }]
    }]
  },
  {
    path: 'skills',
    children: [{
      path: '',
      component: SkillsComponent,
      children: [{
          path: 'communication',
          component: SkillsCommunicationComponent
        },
        {
          path: 'tech-intelligence',
          component: SkillsTechIntelligenceComponent
        },
        {
          path: 'architecture-design',
          component: SkillsArchitectureDesignComponent
        },
        {
          path: 'client-interaction',
          component: SkillsClientInteractionComponent
        },
        {
          path: 'tests',
          component: SkillsTestsComponent
        }]
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
