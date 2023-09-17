import path from "path";
import { writeFile } from "fs/promises";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();

  // console.log(data.get("name"));
  // console.log(file.get("formData);

  const file: File | null = data.get("file") as unknown as File;
  if (!file) return new Response("No File Recieved", { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  //  Here the file is recieved in form of Buffer, We can store the file anywhere from this point

  const filepath = path.join(process.cwd(), "/src/app/api/uploads", file.name);
  console.log(filepath);

  await writeFile(filepath, buffer);

  return new Response("File Recieved Successfully", { status: 200 });
}
