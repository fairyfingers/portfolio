import {
  NgModule
} from '@angular/core';
import ProjectsByComponent from './components/projects-by/by.component';
import ProjectsComponent from './projects.component';

import { RouterModule } from '@angular/router';
import ProjectsForkComponent from './components/projects-fork/fork.component';
import ProjectsGarrisonComponent from './components/projects-garrison/garrison.component';

@NgModule({
  declarations: [
    ProjectsByComponent,
    ProjectsComponent,
    ProjectsForkComponent,
    ProjectsGarrisonComponent
  ],
  imports: [
    RouterModule
  ]
})
export default class ProjectsModule {}
