import { Calendar } from "./calendar.model";

export class Service {
    name: string;
    calendars: Calendar[];

    constructor(name: string, calendars: Calendar[]) {
        this.name = name;
        this.calendars = calendars;
    }
}