/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/bloompoint-website",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
