import { NextResponse } from "next/server";
import { toList } from "../_lib/content";
import contentData from "@/content/faqs.json";

export const runtime = 'edge';

export async function GET() {
  try {
    const data = toList(contentData);
    return NextResponse.json(
      { success: true, message: "Faq retrieved successfully !", data },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to load FAQs" },
      { status: 500 }
    );
  }
}
