import { NextResponse } from "next/server";
import { toList } from "../_lib/content";
import contentData from "@content/quote-sidebar/index.json";


export async function GET() {
  try {
    const data = toList(contentData);
    return NextResponse.json(
      { success: true, message: "Quote Form left side data retrieved successfully !", data },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to load quote form data" },
      { status: 500 }
    );
  }
}
