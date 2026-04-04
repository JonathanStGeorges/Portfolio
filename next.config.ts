import type { NextConfig } from "next";

function getGithubPagesBasePath() {
  if (process.env.GITHUB_PAGES !== "true") {
    return "";
  }

  const repoName = (process.env.GITHUB_PAGES_REPOSITORY ?? "Portfolio")
    .trim()
    .replace(/^\/+|\/+$/g, "");

  return repoName ? `/${repoName}` : "";
}

const basePath = getGithubPagesBasePath();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
