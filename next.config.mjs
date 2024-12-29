/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com"],
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
