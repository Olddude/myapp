import { Component, inject } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { selectLanguage, selectNotifications, selectTheme } from "./home.selectors";

@Component({
    standalone: true,
    imports: [CommonModule, AsyncPipe],
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage {
    #store = inject(Store)
    theme$ = this.#store.select(selectTheme);
    language$ = this.#store.select(selectLanguage)
    notifications$ = this.#store.select(selectNotifications);
}