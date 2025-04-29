import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    domains: [
      "i.imgur.com",
      "placeimg.com",
      "images.pexels.com",
      "placehold.co",
      "www.bing.com",
      "pravatar.cc",
    ], // <- add the domain from the image URL
  },
};

export default nextConfig;
