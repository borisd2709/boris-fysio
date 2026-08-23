import { google } from "googleapis";

const jwtClient = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({
  version: "v3",
  auth: jwtClient,
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

}