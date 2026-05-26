import { NextRequest, NextResponse } from "next/server";
import { getAllMedia, deleteMedia } from "@/lib/content";

function isAuthenticated(request: NextRequest): boolean {
  return !!request.cookies.get("admin_token")?.value;
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const media = getAllMedia();
  return NextResponse.json(media);
}

export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await request.json();
  const success = deleteMedia(id);
  if (!success) {
    return NextResponse.json({ error: "Media not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
