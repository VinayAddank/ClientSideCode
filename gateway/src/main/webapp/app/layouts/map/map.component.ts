import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VERSION } from '../../app.constants';
import { MapService } from './map.service';
import { Headers } from '@angular/http';

@Component({
    selector: 'jhi-map',
    templateUrl: './map.component.html',
    styleUrls: [
        'map.css'
    ]
})

export class MapComponent implements OnInit {
    modalRef: NgbModalRef;
    version: string;
    postData: string;

    constructor(private _loginService: MapService,
        private router: Router,

    ) {

    }
    ngOnInit() {

    }

    loginSubmit(check: any) {
        this._loginService.loginDealer(check).subscribe(
            data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished"),
        );
    }
}