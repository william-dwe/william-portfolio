/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.logo.dev", pathname: "/**" },
    ],
  },
};

export default nextConfig;
