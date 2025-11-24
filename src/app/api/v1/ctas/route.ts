import { NextResponse } from "next/server";
import { toList } from "../_lib/content";
import contentData from "@/content/ctas.json";

export const runtime = 'edge';

export async function GET() {
  try {
    const data = toList(contentData);
    return NextResponse.json(
      { success: true, message: "Cta retrieved successfully !", data },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to load cta" },
      { status: 500 }
    );
  }
}
