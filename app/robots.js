/** @format */

import { siteConfig } from '@/data/site';

export const dynamic = 'force-static';
export default function robots() {
  const baseUrl = `https://${siteConfig.domain}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
