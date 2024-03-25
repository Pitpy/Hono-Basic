import { createFactory } from 'hono/factory'
import { createClient } from 'redis';

const factory = createFactory();
const client = createClient();


(async () => {
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
})()

export const cacheData = (key: string) => factory.createMiddleware(async (c, next) => {
    const cache = await client.get(key)
    if (cache) {
        return c.json({
            code: 10,
            data: JSON.parse(cache)
        })
    } else await next();
})

export const setCache = async <T>(key: string, value: T) => await client.set(key, JSON.stringify(value), {
    EX: 180,
    NX: true
})