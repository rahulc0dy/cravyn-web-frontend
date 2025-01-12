import { SHORT_NAME } from "@lib/constants";
import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel(SHORT_NAME || "Cravyn");
}
