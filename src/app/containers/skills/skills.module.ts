import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';

import SkillsArchitectureDesignComponent from './components/skills-architecture-design/skills-architecture-design.component';
import SkillsClientInteractionComponent from './components/skills-client-interaction/skills-client-interaction.component';
import SkillsCommunicationComponent from './components/skills-communication/skills-communication.component';
import SkillsTechIntelligenceComponent from './components/skills-tech-intelligence/skills-tech-intelligence.component';
import SkillsTestsComponent from './components/skills-tests/skills-tests.component';
import SkillsComponent from './skills.component';

@NgModule({
  declarations: [
    SkillsArchitectureDesignComponent,
    SkillsClientInteractionComponent,
    SkillsCommunicationComponent,
    SkillsComponent,
    SkillsTechIntelligenceComponent,
    SkillsTestsComponent
  ],
  exports: [
    SkillsArchitectureDesignComponent,
    SkillsClientInteractionComponent,
    SkillsCommunicationComponent,
    SkillsComponent,
    SkillsTechIntelligenceComponent,
    SkillsTestsComponent
  ],
  imports: [
    RouterModule
  ]
})
export default class SkillsModule {}
