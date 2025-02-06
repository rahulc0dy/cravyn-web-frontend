import axios from "axios";

const downloadCustomerApp = async () => {
  try {
    const appRepo = process.env.NEXT_PUBLIC_APP_REPO_LINK; // Ensure this is correctly set in .env file

    const response = await axios.get(`${appRepo}/releases/latest`);

    if (!response.data || !response.data.assets) {
      throw new Error("Invalid response from GitHub API");
    }

    const apkAsset = response.data.assets.find((asset) =>
      asset.name.endsWith(".apk")
    );

    if (!apkAsset) {
      throw new Error("No APK found in the latest release.");
    }

    const link = document.createElement("a");
    link.href = apkAsset.browser_download_url;
    link.download = apkAsset.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Download failed:", error);
    throw new Error(
      error.response?.data?.message || "An unexpected error occurred."
    );
  }
};

export { downloadCustomerApp };
