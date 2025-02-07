import api from "@utils/api";
import { wait } from "@utils/time";

const getServerHealth = async () => {
  const MAX_RETRIES = parseInt(process.env.HEALTH_CHECK_MAX_RETRIES, 10) || 3;
  const RETRY_DELAY =
    parseInt(process.env.HEALTH_CHECK_RETRY_DELAY, 10) || 1000;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await api.get(`/health-check/server`);
      return response.data;
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 503 && attempt < MAX_RETRIES) {
          console.warn(
            `Server health check failed (attempt ${attempt}/${MAX_RETRIES}), retrying...`
          );
          await wait(RETRY_DELAY);
          continue;
        }
        console.error(
          `Server health check failed with status ${status}:`,
          error.response.data
        );
        throw new Error(error.response.data.message);
      } else {
        console.error("Network or server error:", error);
        throw new Error(error.message);
      }
    }
  }
};

export { getServerHealth };
