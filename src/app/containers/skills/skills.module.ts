import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';

import SkillsCommunicationComponent from './components/skills-communication/skills-communication.component';
import SkillsTechIntelligenceComponent from './components/skills-tech-intelligence/skills-tech-intelligence.component';
import SkillsComponent from './skills.component';

@NgModule({
  declarations: [
    SkillsCommunicationComponent,
    SkillsComponent,
    SkillsTechIntelligenceComponent
  ],
  exports: [
    SkillsCommunicationComponent,
    SkillsComponent,
    SkillsTechIntelligenceComponent
  ],
  imports: [
    RouterModule
  ]
})
export default class SkillsModule {}
