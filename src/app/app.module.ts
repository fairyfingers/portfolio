import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HomepageModule from 'src/app/containers/homepage/homepage.module';
import SkillsModule from './containers/skills/skills.module';
import ProjectsModule from './containers/projects/projects.module';
import { ContactModule } from './containers/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // custom...
    ContactModule,
    HomepageModule,
    SkillsModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
