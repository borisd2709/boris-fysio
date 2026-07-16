export class Message {
    text: string;
    replyTo: string;
    subject: string;

    constructor(message: any) {
        this.text = message.text;
        this.replyTo = message.replyTo;
        this.subject = message.subject;
    }
}