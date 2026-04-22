import {neon} from "@neondatabase/serverless";
export default async function handler(req, res) {
  res.status(200).json({ message: "Hello World" });
}
