import { neon } from "@neondatabase/serverless";
import bcrypt from "bcrypt";
export default async function handler(req, res) {
  const { username, password, gender } = req.body;
  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`SELECT * FROM users WHERE username = ${username}`;
    if (rows.length > 0) {
      res.status(409).json({ message: "帳戶已存在" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await sql`INSERT INTO users (username,password,gender) VALUES (${username},${hashedPassword},${gender})`;
      res.status(201).json({ message: "註冊成功" });
    }
  } catch (error) {
    res.status(500).json({ message: "註冊失敗" });
  }
}
