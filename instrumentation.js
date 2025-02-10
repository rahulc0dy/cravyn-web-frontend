import { SHORT_NAME } from "@lib/constants";
import { registerOTel } from "@vercel/otel";
import * as Sentry from "@sentry/nextjs";

export async function register() {
  registerOTel(SHORT_NAME || "Cravyn");
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError = Sentry.captureRequestError;
