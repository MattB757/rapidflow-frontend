import { NextResponse } from "next/server";
import { toList } from "../_lib/content";
import contentData from "@content/contact/index.json";


export async function GET() {
  try {
    const data = toList(contentData);
    return NextResponse.json(
      { success: true, message: "successfully find contact", data },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to load contact data" },
      { status: 500 }
    );
  }
}
