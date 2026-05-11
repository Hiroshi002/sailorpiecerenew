import { NextResponse } from "next/server";
import { getSiteConfig } from "@/config/site";
import { getDictionary } from "@/lib/dictionaries";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const siteConfig = getSiteConfig();
    const dictionary = getDictionary();
    
    return NextResponse.json({
      siteConfig,
      dictionary
    });
  } catch (error: any) {
    console.error("[API Config] Error details:", error);
    return NextResponse.json({ 
      error: "Failed to fetch config",
      message: error?.message || "Unknown error"
    }, { status: 500 });
  }
}
