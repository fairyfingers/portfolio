import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';

import SkillsCommunicationComponent from './components/skills-communication/skills-communication.component';
import SkillsComponent from './skills.component';

@NgModule({
  declarations: [
    SkillsCommunicationComponent,
    SkillsComponent
  ],
  exports: [
    SkillsCommunicationComponent,
    SkillsComponent
  ],
  imports: [
    RouterModule
  ]
})
export default class SkillsModule {}
