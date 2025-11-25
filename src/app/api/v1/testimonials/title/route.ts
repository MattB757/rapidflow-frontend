import { NextResponse } from "next/server";
import contentData from "@content/testimonial-header/index.json";


export async function GET() {
  try {
    return NextResponse.json(
      { success: true, message: "Testimonial retrieved successfully !", data: contentData },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to load testimonial title" },
      { status: 500 }
    );
  }
}
