import { inject, Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { selectAllSettings } from "./settings.selectors";
import { setTheme } from "./settings.actions";

@Injectable({
    providedIn: 'root'
})
export class SettingsEffects {
    #actions = inject(Actions);
    #store = inject(Store);

    allSettings$ = this.#actions.pipe(
        ofType(setTheme.type),
        switchMap(() => this.#store.select(selectAllSettings))
    );
}
