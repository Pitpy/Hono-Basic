import { Hono } from "hono";
import { generateJwt, verifyToken } from "../middleware/jwt";
import { setCookie } from "hono/cookie";
import { sql } from "../configs/db.config";
import { prisma } from "../configs/prisma.config";
import { cacheData, setCache } from "../middleware/cache";
import type { User } from "../../types";


const user = new Hono();

// user.get('/token', async (c) => {
//     const cookieExpiration = 1000 * 60 * 60 * 24 * 365; // cookie expire in 1 year
//     const token = await generateJwt({
//         id: '11',
//         name: 'John',
//     })
//     setCookie(c, 'token', token, {
//         httpOnly: true,
//         sameSite: 'Strict',
//         maxAge: cookieExpiration
//     })
//     return c.json({ message: 'Token generated successfully' })
// })
// user.get('/name/:name',
//     verifyToken,
//     (c) => {
//         return c.json({ message: `Hello ${c.req.param('name')}` })
//     })

user.get('/', async (c) => {
    const result = await sql<User[]>`
        select u.*, count(*) as cnt 
        from users u
        group by u.id
        order by u.id asc
    `
    return c.json({
        code: 10,
        data: result.map(e => ({ ...e, arr: JSON.parse(e.arr) }))
    });
})
user.post('/', async (c) => {
    const form = await c.req.json()
    await sql`insert into users ${sql(form)}`;
    return c.json({
        code: 10,
        message: 'success'
    });
})

user.get('/prisma', async (c) => {
    const allUsers = await prisma.v_users.findMany({
        where: {
            arr: {
                hasEvery: ['1']
            }
        }
    })
    return c.json({ code: 10, data: allUsers })
})

export { user };