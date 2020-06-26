import { NgModule } from '@angular/core';
import ProjectsComponent from './projects.component';

@NgModule({
    declarations: [
        ProjectsComponent
    ],
    exports: [
        ProjectsComponent
    ]
})
export default class ProjectsModule {}