import { NextResponse } from "next/server";
import { toList } from "../_lib/content";
import contentData from "@content/services/index.json";


export async function GET() {
  try {
    const data = toList(contentData);
    return NextResponse.json(
      { success: true, message: "Vision retrieved successfully !", data },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to load visions" },
      { status: 500 }
    );
  }
}
