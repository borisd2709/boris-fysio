// src/services/api.ts

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function loadTestimonials() {
  const response = await fetch(`${API_URL}/api/testimonials`);

  if (!response.ok) {
    throw new Error("Testimonials ophalen mislukt");
  }

  return response.json();
}

export async function loadEvents(date: string) {
  const response = await fetch(
    `${API_URL}/api/event?date=${Date.parse(date)}`
  );

  if (!response.ok) {
    throw new Error("Agenda ophalen mislukt");
  }

  return response.json();
}

export async function postEvent(event: any) {
  const response = await fetch(
    `${API_URL}/api/event`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }
  );

  if (!response.ok) {
    throw new Error("Afspraak aanmaken mislukt");
  }

  return response.json();
}

export async function postMessage(message: any) {
  const response = await fetch(
    `${API_URL}/api/message`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    }
  );

  if (!response.ok) {
    throw new Error("Bericht versturen mislukt");
  }

  return response.json();
}
