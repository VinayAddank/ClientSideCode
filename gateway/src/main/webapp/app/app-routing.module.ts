import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute, wellsRoute, mapRoute } from './layouts';
import { ALARMS_ROUTE } from './alarms';

const LAYOUT_ROUTES = [
    navbarRoute,
    wellsRoute,
    mapRoute,
    ALARMS_ROUTE,
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class DemogatewayAppRoutingModule { }
