export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  logger: {
    level: "debug", // 👈 oppure 'info' o 'trace' per log più dettagliati
    requests: true,
  },
});
