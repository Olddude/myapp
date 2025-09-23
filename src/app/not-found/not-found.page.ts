import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-myapp-not-found',
    template: `
        <h2>Not Found</h2>
        <span>The page you are looking for does not exist.</span>
    `,
    styles: [``],
})
export class NotFoundPage {}