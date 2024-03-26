import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@repo/ui", "@plaiceholder/next"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default withPlaiceholder(config);
