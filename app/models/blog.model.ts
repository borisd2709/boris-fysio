import { SafeHtml } from "@angular/platform-browser";

export class Blog {
    title: string;
    published: string;
    content: SafeHtml;

    constructor(title: string, published: string, content: SafeHtml) {
        this.title = title;
        this.published = published;
        this.content = content;
    }
}