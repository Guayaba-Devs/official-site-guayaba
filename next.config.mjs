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
  },
};

export default nextConfig;
