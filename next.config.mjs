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
    unoptimized: true,
  },
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
