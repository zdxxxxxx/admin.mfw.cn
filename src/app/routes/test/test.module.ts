import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import {TestComponent} from './test/test.component';
const routes: Routes = [
    {path: '', component: TestComponent},
    {path: 'test1'}
];
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        TestComponent
    ],
    exports: [
        RouterModule
    ]
})
export class TestModule { }
