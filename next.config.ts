import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  productionBrowserSourceMaps: false,
  images: {
    // Static export has no image optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
