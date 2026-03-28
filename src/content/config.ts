import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
		pubDate: z.date(),
		category: z.enum(['schreiben', 'lesen', 'millennial-life', 'persoenlichkeitsentwicklung']),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		author: z.string().default('Markus Gammersbach'),
	}),
});

export const collections = { blog };
