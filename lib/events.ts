import { google } from "googleapis";
import nodemailer from "nodemailer";

const jwtClient = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({
  version: "v3",
  auth: jwtClient,
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function getEvents(date: number) {
  const start = new Date(date);
  const end = new Date(date);

  end.setDate(end.getDate() + 1);

  const events = await calendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
  });

  return (
    events.data.items?.map((i: any) => ({
      start: i.start?.dateTime,
      end: i.end?.dateTime,
    })) ?? []
  );
}

export async function postEvent(event: any) {
  await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    requestBody: {
      summary: `${event.firstname} ${event.lastname}`,
      description: `${event.email}, ${event.phone}, ${event.complaints}`,
      start: {
        dateTime: event.start,
      },
      end: {
        dateTime: event.end,
      },
    },
  });

  await transporter.sendMail({
    from: "info@borisdrogtfysio.nl",
    to: event.email,
    bcc: [
      "info@borisdrogtfysio.nl",
      "borisdrogt@gmail.com",
    ],
    subject: "Bevestiging afspraak Boris Drogt Fysio",
    html: `
      <p>Beste ${event.firstname},</p>

      <p>Bedankt voor je afspraak.</p>

      <p>
        Datum en tijd:
        <strong>
        ${new Date(event.start).toLocaleString("nl-NL")}
        </strong>
      </p>

      <p>
        Met vriendelijke groet,<br>
        Boris Drogt
      </p>
    `,
  });
}