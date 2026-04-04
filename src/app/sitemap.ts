import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/deployment";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const toUrl = (path: string) =>
    siteUrl ? `${siteUrl}${path === "/" ? "/" : path}` : path;

  return [
    {
      url: toUrl("/"),
    },
    {
      url: toUrl("/about"),
    },
    {
      url: toUrl("/projects"),
    },
    {
      url: toUrl("/leadership"),
    },
    {
      url: toUrl("/contact"),
    },
  ];
}
