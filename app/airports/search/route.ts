import { NextRequest, NextResponse } from "next/server";
import { backendUrl } from "@/lib/backend";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search") ?? "";
  const url = `${backendUrl("/airports/search")}?search=${encodeURIComponent(search)}`;

  const res = await fetch(url, {
    headers: { Accept: request.headers.get("accept") ?? "application/json" },
  });

  const data = await res.text();
  return new NextResponse(data, {
    status: res.status,
    headers: { "Content-Type": res.headers.get("content-type") ?? "application/json" },
  });
}
