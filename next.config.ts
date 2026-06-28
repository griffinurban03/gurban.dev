import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // All internal links use trailing slashes; enforce canonical URLs + redirects.
  trailingSlash: true,
};

export default nextConfig;
