/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";
// const basePath = isProd ? "/bloompoint-website" : "";

const nextConfig = {
  // output: "export",

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

module.exports = nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
