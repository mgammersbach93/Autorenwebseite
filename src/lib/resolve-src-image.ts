import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
	'../images/**/*.{jpg,JPG,jpeg,png,webp,gif}',
	{ eager: true },
);

function normalizeRelativePath(path: string): string {
	return path
		.replace(/^\.\.\/images\//, '')
		.replace(/\\/g, '/')
		.toLowerCase();
}

const bySuffix = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
	bySuffix.set(normalizeRelativePath(path), mod.default);
}

/** Map legacy `/images/...` paths (e.g. from content collections) to imported image metadata. */
export function resolveSrcImageMeta(publicPath: string | undefined): ImageMetadata | undefined {
	if (!publicPath?.startsWith('/images/')) return undefined;
	const suffix = publicPath.slice('/images/'.length).replace(/\\/g, '/').toLowerCase();
	return bySuffix.get(suffix);
}

/** Resolved asset URL for `<img src>` when not using `<Image />`. */
export function resolveSrcImageUrl(publicPath: string | undefined): string | undefined {
	return resolveSrcImageMeta(publicPath)?.src;
}
