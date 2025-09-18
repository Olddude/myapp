import { inject, Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { selectCurrentUser } from "./user.selectors";

@Injectable()
export class UserEffects {
    #actions = inject(Actions);
    #store = inject(Store);

    currentUser$ = this.#actions.pipe(
        ofType('[User] Load Current User'),
        switchMap(() => this.#store.select(selectCurrentUser))
    );
}
