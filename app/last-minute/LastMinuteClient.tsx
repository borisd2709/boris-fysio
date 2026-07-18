"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


  
  
  
  
  type Event = {
    start: string;
    end: string;
  };
  
  export default function Afspraak() {
    const [selectedDate, setSelectedDate] = useState("");
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedTime, setSelectedTime] = useState<Event | null>(null);
  
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [complaints, setComplaints] = useState("");
    const WORKDAY_START = 8;
    const WORKDAY_END = 19;
    const searchParams = useSearchParams();
  
  const startParam = searchParams.get("start");
  
    async function loadEvents() {
      if (!selectedDate) return;
  
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/event?date=${Date.parse(
          selectedDate
        )}`
      );
  
      const data = await response.json();
      console.table(data);
  
      setEvents(data);
    }
  
    function generateSlots(date: string) {
    const slots = [];
  
    const [year, month, day] = date.split("-");
  
  const start = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    WORKDAY_START,
    0,
    0
  );
  
  const end = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    WORKDAY_END,
    0,
    0
  );
  
    while (start < end) {
      slots.push(new Date(start));
  
      start.setMinutes(start.getMinutes() + 30);
    }
  
    return slots;
  }
    function getAvailableSlots(
      
    allSlots: Date[],
    events: Event[]
  ): Date[] {
    return allSlots.filter((slot) => {
  
      const slotTime = slot.getTime();
  
      return !events.some((event) => {
  
        const busyStart = new Date(event.start).getTime();
        const busyEnd = new Date(event.end).getTime();
  
        return slotTime >= busyStart && slotTime < busyEnd;
      });
  
    });
  }
  
    const availableSlots = selectedDate
      ? getAvailableSlots(generateSlots(selectedDate), events)
      : [];
      
    useEffect(() => {
  
    if (!startParam) return;
  
    const start = new Date(startParam);
  
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + 30);
  
    setSelectedTime({
      start: start.toISOString(),
      end: end.toISOString(),
    });
  
  }, [startParam]);
    async function submitAppointment() {
      if (!selectedTime) {
        alert("Kies eerst een tijdstip");
        return;
      }
  
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/event`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
  
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            phone,
            complaints,
            start: selectedTime.start,
            end: selectedTime.end,
            language: "nl",
          }),
        }
      );
  
      if (response.ok) {
        alert("Afspraak succesvol ingepland!");
      } else {
        alert("Er is iets misgegaan.");
      }
    }
  
    return (
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-24">
  
  
      <h1 className="text-4xl font-semibold mb-6">
        Last-minute afspraken
      </h1>
  
  
      <p className="text-gray-600 mb-12 max-w-2xl leading-relaxed">
        Soms komen er op korte termijn plaatsen vrij in de agenda.
        Deze momenten zijn bedoeld voor bestaande patiënten en kunnen
        tegen een gereduceerd tarief worden geboekt.
      </p>
  
      {/* TARIEVEN */}
        <section className="py-20 bg-gray-50">
  
          <div className="max-w-4xl mx-auto px-6">
  
            <h2 className="text-3xl font-semibold mb-10">
              Tarief
            </h2>
  
            <div className="grid md:grid-cols-2 gap-8">
  
              <div className="bg-white border rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Een herhalingsbehandeling
                </h3>
  
                <p className="text-3xl font-semibold mb-3">
                  € 37,50
                </p>
  
                
              </div>
  
              
  
            <p className="mt-8 text-gray-700">
              Een consult duurt ongeveer 30 minuten.
            </p>
  
          </div>
  
          </div>
  
        </section>
  
  
        <p className="text-gray-600 mb-12">
          Kies eerst de dag van morgen en vervolgens een beschikbaar tijdstip door beschikbare tijden op te halen.
        </p>
  
        {/* DATUM */}
  
        <div className="mb-10">
  
          <label className="block mb-3 font-medium">
            Kies een datum
          </label>
  
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-lg px-4 py-3 w-full max-w-xs"
          />
  
          <button
            onClick={loadEvents}
            className="mt-4 block px-6 py-3 bg-black text-white rounded-lg"
          >
            Beschikbare tijden ophalen
          </button>
  
        </div>
  
        
        {/* tonen op de pagina */}
        {availableSlots.length > 0 && (
  
    <section className="mb-12">
  
      <h2 className="text-2xl font-semibold mb-6">
        Beschikbare tijden
      </h2>
  
      <div className="flex flex-wrap gap-3">
  
        {availableSlots.map((slot) => {
  
          const event = {
            start: slot.toISOString(),
            end: new Date(
              slot.getTime() + 30 * 60 * 1000
            ).toISOString(),
          };
  
          return (
  
            <button
              key={slot.toISOString()}
              onClick={() => setSelectedTime(event)}
              className={`px-5 py-3 border rounded-lg transition
  
              ${
                selectedTime?.start === event.start
                  ? "bg-[#5E6F52] text-white border-[#5E6F52]"
                  : "hover:bg-[#F7F7F4]"
              }`}
            >
              {slot.toLocaleTimeString("nl-NL", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </button>
  
          );
  
        })}
  
      </div>
  
    </section>
  
  )}
  
    {selectedTime && (
  
    <div className="mb-6 p-4 bg-[#F7F7F4] rounded-lg">
  
      <p className="font-medium">
        Gekozen afspraak
      </p>
  
      <p>
        {new Date(selectedTime.start).toLocaleString("nl-NL")}
      </p>
  
    </div>
  
  )}
  
        {/* FORMULIER */}
  
        {selectedTime && (
  
          <div className="bg-gray-50 border rounded-xl p-8">
  
            <h2 className="text-2xl font-semibold mb-6">
              Jouw gegevens
            </h2>
  
            <div className="grid md:grid-cols-2 gap-4 mb-4">
  
              <input
                placeholder="Voornaam"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="border rounded-lg px-4 py-3"
              />
  
              <input
                placeholder="Achternaam"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="border rounded-lg px-4 py-3"
              />
  
            </div>
  
            <div className="grid md:grid-cols-2 gap-4 mb-4">
  
              <input
                type="email"
                placeholder="E-mailadres"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg px-4 py-3"
              />
  
              <input
                placeholder="Telefoonnummer"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded-lg px-4 py-3"
              />
  
            </div>
  
            <textarea
              placeholder="Waarmee kan ik je helpen?"
              value={complaints}
              onChange={(e) => setComplaints(e.target.value)}
              rows={4}
              className="border rounded-lg px-4 py-3 w-full mb-6"
            />
  
            <button
              onClick={submitAppointment}
              className="px-6 py-3 bg-[#5E6F52] text-white rounded-lg hover:bg-[#4F5D45]"
            >
              Afspraak bevestigen
            </button>
  
          </div>
  
        )}
  
      </main>
    );
  }
