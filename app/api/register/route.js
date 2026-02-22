import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(req) {
  const { email, password } = await req.json();

  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const exists = users.find((u) => u.email === email);

  if (exists) {
    return Response.json({ error: "User already exists" });
  }

  users.push({
    id: Date.now(),
    email,
    password,
  });

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return Response.json({ message: "Registered successfully" });
}