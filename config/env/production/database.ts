export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("POSTGRES_HOST", "postgres.railway.internal"),
      port: env.int("PGPORT", 5432),
      user: env("POSTGRES_USER", "postgres"),
      password: env("POSTGRES_PASSWORD", "tobemodified"),
      database: env("POSTGRES_DB", "postgres"),
      ssl: env.bool(true),
    },
  },
});
