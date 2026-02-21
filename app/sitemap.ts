import { MetadataRoute } from 'next';
import { getArticles } from './actions/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://intellify-nu.vercel.app'; // Replace with your actual domain

    // Get all articles for dynamic URLs
    const articles = await getArticles();

    const articleUrls = articles.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: article.created_at || new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const staticUrls = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ];

    return [...staticUrls, ...articleUrls];
}
