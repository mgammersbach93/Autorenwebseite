export const BLOG_CATEGORY_SLUGS = ['schreiben', 'lesen', 'wachsen'] as const;

export type BlogCategorySlug = (typeof BLOG_CATEGORY_SLUGS)[number];

/** Display labels (all caps, as on the blog filter bar) */
export const categoryLabels: Record<BlogCategorySlug, string> = {
	schreiben: 'SCHREIBEN',
	lesen: 'LESEN',
	wachsen: 'WACHSEN',
};

export function isBlogCategorySlug(s: string): s is BlogCategorySlug {
	return (BLOG_CATEGORY_SLUGS as readonly string[]).includes(s);
}

export function categoryLabel(slug: string): string {
	return categoryLabels[slug as BlogCategorySlug] ?? slug;
}

export function formatPostDate(date: Date): string {
	return new Date(date).toLocaleDateString('de-DE', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}
