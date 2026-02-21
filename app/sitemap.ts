import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://intellify.com";

    const articles = [
        "ai-revolution-2026",
        "nextjs-server-components-guide",
        "machine-learning-basics",
        "remote-work-productivity",
        "cybersecurity-tips-2026",
        "startup-funding-guide",
        "python-data-analysis",
        "chatgpt-vs-gemini",
        "web-design-trends",
    ];

    const staticPages = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
        { url: `${baseUrl}/tutorials`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
        { url: `${baseUrl}/ai-tools`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    ];

    const articlePages = articles.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...articlePages];
}
