import { NgModule } from '@angular/core';
import SkillsComponent from './skills.component';

@NgModule({
    declarations: [
        SkillsComponent
    ],
    exports: [
        SkillsComponent
    ]
})
export default class SkillsModule {}