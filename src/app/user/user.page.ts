import { Component, inject, OnInit } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import {
    selectCurrentUser,
    selectIsAuthenticated,
    selectUserLoading,
    selectUserError
} from "./user.selectors";
import { login } from "./user.actions";

@Component({
    standalone: true,
    imports: [CommonModule, AsyncPipe],
    selector: 'app-myapp-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
    #store = inject(Store);
    currentUser$ = this.#store.select(selectCurrentUser);
    isAuthenticated$ = this.#store.select(selectIsAuthenticated);
    loading$ = this.#store.select(selectUserLoading);
    error$ = this.#store.select(selectUserError);

    ngOnInit(): void {
        this.#store.dispatch(login({ email: '', password: '' }));
    }
}