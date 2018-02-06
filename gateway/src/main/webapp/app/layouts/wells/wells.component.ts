import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VERSION } from '../../app.constants';

@Component({
    selector: 'jhi-wells',
    templateUrl: './wells.component.html',
    styleUrls: [
        'wells.css'
    ]
})

export class WellsComponent implements OnInit {
    modalRef: NgbModalRef;
    version: string;

    constructor(private router: Router){
        
    }
    ngOnInit() {
       
    }
}