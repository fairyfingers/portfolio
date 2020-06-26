import { NgModule } from '@angular/core';
import HomepageComponent from './homepage.component';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    exports: [
        HomepageComponent
    ]
})
export default class HomepageModule {}