export class Slot {
    hour: number;
    minutes: number;

    constructor(hour: number, minutes: number) {
        this.hour = hour;
        this.minutes = minutes;
    }

    getOption?(): string {
        return `${this.hour}:${`0${this.minutes}`.slice(-2)}`;
    }
}