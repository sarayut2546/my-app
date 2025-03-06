import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "1337",
      //   pathname: "/uploads/**/*",
      // },
      {
        protocol: "https",
        hostname: "https://server-g28f.onrender.com",
        port: "",
        pathname: "/uploads/**/*",
      },
    ],
    
  },
};

export default nextConfig;
