/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/hpapi/**",
      },
    ],
  },
  env: {
    SERVER_URL: "localhost:8080",
  },
};

module.exports = nextConfig;
