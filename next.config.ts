// app.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",   // ← 🚀 indispensable !
};

export default nextConfig;
