import { createMiddleware } from 'hono/factory'
import { sign, verify } from "hono/jwt"

const tokenExpiration = Math.floor(Date.now() / 1000) + (60 * 15); // Token expire in 15 minutes
const tokenIssueAt = Math.floor(Date.now() / 1000); // Present time

type JwtPayload = {
    id: string;
    name: string;
}

type Result = {
    status: boolean;
    payload?: JwtPayload;
    message?: string;
}

async function verifyJwt(token: string) {
    let value: Result;
    try {
        const payload = await verify(token, '123')
        value = { status: true, payload, message: 'Token verified' }
    } catch (error: any) {
        value = { status: false, message: error.name }
    }
    return value;
}

export function generateJwt(payload: JwtPayload) {
    return sign({ ...payload, exp: tokenExpiration, iat: tokenIssueAt }, '123')
}

export const verifyToken = createMiddleware(async (c, next) => {
    if (c.req.header('authorization') === undefined) return c.text('No authorize provided', 401)
    let token = c.req.header('authorization') as string;
    token = token && token.startsWith('Bearer ') ? token.split('Bearer ')[1] : token;
    const result = await verifyJwt(token);
    if (result.status) await next();
    return c.json({ message: result.message });
}) 