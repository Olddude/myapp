import { Component, inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectLanguage, selectNotifications, selectTheme } from "./home.selectors";

@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    #store = inject(Store)
    theme$ = this.#store.select(selectTheme);
    language$ = this.#store.select(selectLanguage)
    notifications$ = this.#store.select(selectNotifications);

    ngOnInit(): void {
        console.log('HomePage initialized');
    }
}