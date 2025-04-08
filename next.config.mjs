/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.flov1-1.fna.fbcdn.net",
      },
      {
        hostname: "via.placeholder.com",
      },
      { hostname: "drive.google.com" },
    ],

    domains: [
      "instagram.flov1-1.fna.fbcdn.net",
      "scontent-dfw5-1.cdninstagram.com",
      "via.placeholder.com",
      "instagram.com",
    ],

    unoptimized: true,
  },
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
