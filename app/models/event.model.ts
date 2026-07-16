
export class Event {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    complaints: string;
    start: Date;
    end: Date;
    language: string;

    constructor(event: any, language: string) {
        this.firstname = event.firstname;
        this.lastname = event.lastname;
        this.email = event.email;
        this.phone = event.phone;
        this.complaints = event.complaints;
        const d = new Date(event.date);
        d.setHours(event.slot.hour, event.slot.minutes);
        this.start = d;
        this.end = new Date(d.getTime() + 30 * 60000);
        this.language = language
    }
}