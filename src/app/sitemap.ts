import { languages } from "@/i18n/config";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.manusai.io";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 生成首页 URLs
  const homeUrls = Object.keys(languages).map((lang) => ({
    url: lang === "en" ? baseUrl : `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  }));

  // 生成其他静态页面 URLs
  const staticUrls = Object.keys(languages).flatMap((lang) => [
    {
      url: lang === "en" ? `${baseUrl}/invite` : `${baseUrl}/${lang}/invite`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]);

  return [
    ...homeUrls,
    ...staticUrls,
  ];
}
