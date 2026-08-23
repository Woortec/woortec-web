import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "OAI-AdsBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: "https://www.woortec.com/sitemap.xml",
  };
}
