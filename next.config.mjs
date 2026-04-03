/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.flov1-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "scontent-dfw5-1.cdninstagram.com",
      },
      {
        hostname: "via.placeholder.com",
      },
      { hostname: "drive.google.com" },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
