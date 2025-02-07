/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
    : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    urlImports: ["https://fonts.gstatic.com/"],
  },
};

export default nextConfig;
