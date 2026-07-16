export class Testimonial {
    text: string;
    profile_photo_url: string;
    author_name: string;
    relative_time_description: string;
    time: number;

    constructor(text: string, profile_photo_url: string, author_name: string, relative_time_description: string, time: number) {
        this.text = text;
        this.profile_photo_url = profile_photo_url;
        this.author_name = author_name;
        this.relative_time_description = relative_time_description;
        this.time = time;
    }
}