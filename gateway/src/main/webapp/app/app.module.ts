import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { DemogatewaySharedModule, UserRouteAccessService } from './shared';
import { DemogatewayAppRoutingModule } from './app-routing.module';
import { DemogatewayHomeModule } from './home/home.module';
import { DemogatewayAdminModule } from './admin/admin.module';
import { DemogatewayAccountModule } from './account/account.module';
import { DemogatewayEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { MapService } from './layouts/map/map.service';
import { HttpModule } from '@angular/http';
import { DemogatewayAlarmsModule } from './alarms/alarms.module';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent,
    WellsComponent,
    MapComponent
} from './layouts';
import { from } from 'rxjs/observable/from';

@NgModule({
    imports: [
        BrowserModule,
        DemogatewayAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        DemogatewaySharedModule,
        DemogatewayHomeModule,
        DemogatewayAdminModule,
        DemogatewayAccountModule,
        DemogatewayEntityModule,
        HttpModule,
        DemogatewayAlarmsModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        WellsComponent,
        MapComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService,
        MapService
    ],
    bootstrap: [JhiMainComponent]
})
export class DemogatewayAppModule { }
