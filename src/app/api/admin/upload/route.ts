import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { addMedia, generateId } from "@/lib/content";

function isAuthenticated(request: NextRequest): boolean {
  return !!request.cookies.get("admin_token")?.value;
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // Validate file type
  const allowedTypes = [
    "image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml",
    "application/pdf",
    "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "File type not allowed" }, { status: 400 });
  }

  // Max 10MB
  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Create upload directory with date-based folders
  const now = new Date();
  const dateDir = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads", dateDir);
  await mkdir(uploadDir, { recursive: true });

  // Generate unique filename
  const id = generateId();
  const ext = path.extname(file.name) || ".bin";
  const filename = `${id}${ext}`;
  const filePath = path.join(uploadDir, filename);
  const url = `/uploads/${dateDir}/${filename}`;

  await writeFile(filePath, buffer);

  // Add to media index
  const mediaItem = {
    id,
    filename,
    originalName: file.name,
    url,
    size: file.size,
    type: file.type,
    uploadedAt: now.toISOString(),
  };
  addMedia(mediaItem);

  return NextResponse.json(mediaItem);
}
