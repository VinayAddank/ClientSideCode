import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemogatewaySharedModule } from '../shared';

import { ALARMS_ROUTE, AlarmsComponent } from './';

@NgModule({
    imports: [
        DemogatewaySharedModule,
        RouterModule.forChild([ ALARMS_ROUTE ])
    ],
    declarations: [
        AlarmsComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemogatewayAlarmsModule {}
