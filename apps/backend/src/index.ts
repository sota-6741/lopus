/// <reference path="../worker-configuration.d.ts" />
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

app.use("*", async (c, next) => {
  const corsMiddlewareHandler = cors({
    origin: c.env.FRONTEND_URL,
    credentials: true,
  });
  return corsMiddlewareHandler(c, next);
});

// /hello エンドポイント
const route = app.get("/hello", (c) => {
  return c.json({ message: "Hello Hono!" });
});

export type AppType = typeof route;
export default app;
