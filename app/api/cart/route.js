import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(req) {
  const { email, password } = await req.json();

  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return Response.json({ error: "Invalid credentials" });
  }

  return Response.json({
    message: "Login success",
    userId: user.id,
  });
}