import { NextRequest, NextResponse } from "next/server";
import { backendUrl } from "@/lib/backend";

export async function GET(request: NextRequest) {
  const qs = request.nextUrl.searchParams.toString();
  const target = qs ? `${backendUrl("/flights/search")}?${qs}` : backendUrl("/flights/search");
  return NextResponse.redirect(target, 302);
}
