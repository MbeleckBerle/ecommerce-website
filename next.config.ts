import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    domains: ["i.imgur.com", "placeimg.com"], // <- add the domain from the image URL
  },
};

export default nextConfig;
