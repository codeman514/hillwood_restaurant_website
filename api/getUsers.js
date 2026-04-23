import {neon} from "@neondatabase/serverless";
export default async function handler(req, res) {
    try{
        const sql = neon(process.env.DATABASE_URL);
        const rows = await sql`SELECT * FROM users WHERE username = ${req.body.username} AND password = ${req.body.password}`
        if(rows.length > 0)
        {
            res.status(200).json({message:"登入成功"});
        }
        else{
            res.status(401).json({message:"登入失敗"});
        }
    }
    catch(error){}
}
