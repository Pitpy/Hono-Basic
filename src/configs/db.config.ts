import postgres from "postgres";

const sql = postgres(Bun.env.DATABASE_URL ?? '', {
    transform: postgres.toCamel
});

export { sql }