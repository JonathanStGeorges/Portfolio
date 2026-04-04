function normalizeUrl(value: string) {
  return value.replace(/\/+$/, "");
}

export function getBasePath() {
  if (process.env.GITHUB_PAGES !== "true") {
    return "";
  }

  const repoName = (process.env.GITHUB_PAGES_REPOSITORY ?? "Portfolio")
    .trim()
    .replace(/^\/+|\/+$/g, "");

  return repoName ? `/${repoName}` : "";
}

export function getSiteUrl() {
  const explicit = process.env.SITE_URL?.trim();

  if (explicit) {
    return normalizeUrl(explicit);
  }

  if (process.env.GITHUB_PAGES === "true") {
    const owner = process.env.GITHUB_REPOSITORY_OWNER?.trim();
    const basePath = getBasePath();

    if (owner) {
      return normalizeUrl(`https://${owner}.github.io${basePath}`);
    }
  }

  return undefined;
}
