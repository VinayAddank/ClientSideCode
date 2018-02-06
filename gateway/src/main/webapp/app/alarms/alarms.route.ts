import { Route } from '@angular/router';

import { AlarmsComponent } from './';

export const ALARMS_ROUTE: Route = {
    path: 'alarms',
    component: AlarmsComponent,
    data: {
        authorities: [],
        pageTitle: 'Current Alarms'
    }
};
