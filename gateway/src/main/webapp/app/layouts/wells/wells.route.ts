import { Route } from '@angular/router';

import { WellsComponent } from './wells.component';

export const wellsRoute: Route = {
    path: '',
    component: WellsComponent,
    outlet: 'wells'
};
