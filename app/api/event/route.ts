import { NextRequest, NextResponse } from "next/server";
import { getEvents, postEvent } from "@/lib/events";

export async function GET(request: NextRequest) {
  try {
    const date = Number(
      request.nextUrl.searchParams.get("date")
    );

    const events = await getEvents(date);

    return NextResponse.json(events);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Unable to load events" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {

    const body = await request.json();

    await postEvent(body);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Unable to create appointment" },
      { status: 500 }
    );
  }
}

