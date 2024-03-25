FROM oven/bun:1 as base
WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app
COPY . .

RUN bun install --frozen-lockfile

EXPOSE 3030/tcp

CMD [ "bun", "dev" ]