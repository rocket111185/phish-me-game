import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: [
    '@mui/material',
    '@mui/system',
    '@mui/icons-material',
  ],

  // Workaround for Deno
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
