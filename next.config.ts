import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;



module.exports = {
  images: {
    domains: ['res.cloudinary.com'], // Cloudinaryのホスト名を追加
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
        search: "",
      },
    ],
  },
};
