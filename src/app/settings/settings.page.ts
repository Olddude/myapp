import { Component, inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectLanguage, selectNotifications, selectTheme } from "./settings.selectors";

@Component({
    standalone: true,
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    #store = inject(Store)
    theme$ = this.#store.select(selectTheme);
    language$ = this.#store.select(selectLanguage)
    notifications$ = this.#store.select(selectNotifications);

    ngOnInit(): void {
        console.log('SettingsPage initialized');
    }
}