import { neon } from "@neondatabase/serverless";
export default async function handler(req, res) {
  const { name, phone, bookedJson } = req.body;
  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`INSERT INTO booking (name,phone,product) VALUES (${name},${phone},${bookedJson})`;
    res.status(200).json({ message: "更改成功" });
  } catch (error) {
    console.error("SQL Error:", error);
    res.status(500).json({ message: "更改失敗" });
  }
}
