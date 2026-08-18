/** @format */

import { siteConfig } from '@/data/site';
import { practiceAreas } from '@/data/practiceAreas';
import { articles } from '@/data/insights';

export const dynamic = 'force-static';
export default function sitemap() {
  const baseUrl = `https://${siteConfig.domain}`;

  const staticRoutes = [
    '',
    '/about',
    '/practice-areas',
    '/attorneys',
    '/results',
    '/testimonials',
    '/insights',
    '/faq',
    '/contact',
  ];

  const practiceAreaRoutes = practiceAreas
    .filter((area) => area.overview)
    .map((area) => `/practice-areas/${area.slug}`);

  const insightRoutes = articles.map((article) => `/insights/${article.slug}`);

  const routes = [...staticRoutes, ...practiceAreaRoutes, ...insightRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
