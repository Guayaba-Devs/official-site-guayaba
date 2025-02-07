/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "./",
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com"],
    unoptimized: true,
  },
};

export default nextConfig;
