import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"], // 支援 SVG 加載
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
