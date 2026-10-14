import { NextRequest, NextResponse } from "next/server";
import { backendUrl } from "@/lib/backend";

export async function POST(request: NextRequest) {
  const body = await request.text();

  const res = await fetch(backendUrl("/api/inquiries/create"), {
    method: "POST",
    headers: {
      "Content-Type": request.headers.get("content-type") ?? "application/json",
      Accept: request.headers.get("accept") ?? "application/json",
    },
    body,
  });

  const data = await res.text();
  return new NextResponse(data, {
    status: res.status,
    headers: { "Content-Type": res.headers.get("content-type") ?? "application/json" },
  });
}
