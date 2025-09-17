import { Component, OnInit } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
    ngOnInit(): void {
        console.log('UserPage initialized');
    }
}