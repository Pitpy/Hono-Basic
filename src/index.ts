import { Hono } from "hono";
import { cors } from 'hono/cors'
import { logger } from "hono/logger";
import { serveStatic } from 'hono/bun'
import { stream } from "hono/streaming";

import { user } from "./routes/user";
import { cacheData, setCache } from "./middleware/cache"

const app = new Hono().use('*', cors()).use('*', logger((log) => {
  console.log('LOGGER:', new Date().toUTCString(), log);
})).basePath('/api');

app.get('/static/*', serveStatic({ root: './static', path: '/naruto.jpg' }))
app.get('/naruto', serveStatic({ path: '/static/naruto.jpg' }))
app.get('/stream/:name', (c) => stream(c, async (stream) => {
  return await stream.pipe(Bun.file('./static/' + c.req.param('name')).stream());
}))
app.get('/read', async (c) => {
  const toml = await (Bun.file('./static/data.toml')).text()
  console.log(toml);
  return c.text(toml);
})
app.get('/write', async (c) => {
  const dog = await (await fetch('https://fastly.picsum.photos/id/776/200/300.jpg?grayscale&hmac=_jt47M077NR0udIuGImMjH4zvqZgLr_JAYJALqXoZqk')).blob()
  await Bun.write('./static/grayscale.jpg', dog)
  return c.redirect('/api/stream/grayscale.jpg')
})
app.get('/mode', (c) => c.text(Bun.env.NODE_ENV as string));
app.get('/cache', cacheData('cache:1'), async (c) => {
  const data = { text: 'Caching data for this app ...' }
  await Bun.sleep(2000);
  setCache('cache:1', data)
  return c.json({
    code: 10,
    data: data
  })
});
app.route('/user', user);
app.notFound((c) => c.json({ message: 'Not found' }));

const server = {
  port: 3030,
  fetch: app.fetch,
};

if (Bun.env.NODE_ENV === 'production') console.log(`App started :: http://localhost:${server.port}`)

export default server;