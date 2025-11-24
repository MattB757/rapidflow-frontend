import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    console.log("Quote submission received", body);
    return NextResponse.json(
      { success: true, message: "Quote received" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to submit quote" },
      { status: 500 }
    );
  }
}
