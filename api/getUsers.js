import {neon} from "@neondatabase/serverless";
import bcrypt from "bcrypt";
export default async function handler(req, res) {
    try{
        const sql = neon(process.env.DATABASE_URL);
        const rows = await sql`SELECT * FROM users WHERE username = ${req.body.username}`
        if(rows.length > 0)
        {
            const match = await bcrypt.compare(req.body.password, rows[0].password);
            if(match)
            {
                res.status(200).json({message:"登入成功",success:true});
            }
            else{
                res.status(401).json({message:"密碼錯誤",success:false});
            }

        }
        else{
            res.status(401).json({message:"帳戶不存在",success:false});
        }
    }
    catch(error){}
}
