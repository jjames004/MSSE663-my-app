import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }


    // displayed in header with @Input() and one-directional binding
    title = "Baked With Love";
    subtitle = "Gluten Free, Flavor Full"

    phone = '303.721.7547';
    email = 'info@wavethegrain.com';
    copyright = '©2020, WavetheGRAIN';
    
}