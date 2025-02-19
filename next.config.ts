import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // 添加靜態輸出配置
  basePath: "/ibuypower",  // 添加基礎路徑，對應您的repository名稱
  images: {
    unoptimized: true,  // 關閉圖片優化，確保靜態輸出
  },
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
