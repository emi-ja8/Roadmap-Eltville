/** @type {import('next').NextConfig} */
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? "/Roadmap-Eltville" : "",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
