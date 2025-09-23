import { Component, inject } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import {
    selectCurrentUser,
    selectIsAuthenticated,
    selectUserLoading,
    selectUserError
} from "./user.selectors";

@Component({
    standalone: true,
    imports: [CommonModule, AsyncPipe],
    selector: 'app-myapp-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage {
    #store = inject(Store);
    currentUser$ = this.#store.select(selectCurrentUser);
    isAuthenticated$ = this.#store.select(selectIsAuthenticated);
    loading$ = this.#store.select(selectUserLoading);
    error$ = this.#store.select(selectUserError);
}