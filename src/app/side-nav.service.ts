import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';


@Injectable()
export class SideNavService {

    constructor(private sidenav: MatSidenav, private router: Router) {
        this.subscribeRouterEvent();
    }

    subscribeRouterEvent() {
        this.router.events.subscribe(event => this.close());
    }

    open() {
        return this.sidenav.open();
    }

    close() {
        return this.sidenav.close();
    }
}
