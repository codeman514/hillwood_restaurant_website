import { neon } from "@neondatabase/serverless";
export default async function handler(req, res) {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`SELECT * FROM menu`;
    res.status(200).json({ data: rows });
  } catch (error) {
    res.status(500).json({ message: "資料庫連接失敗" });
  }
}
