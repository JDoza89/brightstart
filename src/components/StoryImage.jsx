import Image from 'next/image';
import { assetDimensions } from '@/lib/asset';

export default function StoryImage({
	asset,
	alt,
	sizes,
	priority,
	fill,
	className,
	style,
}) {
	if (!asset?.filename) return null;

	if (fill) {
		return (
			<Image
				src={asset.filename}
				alt={alt ?? asset.alt ?? ''}
				fill
				sizes={sizes}
				priority={priority}
				className={className}
				style={style}
			/>
		);
	}

	const { width, height } = assetDimensions(asset);
	return (
		<Image
			src={asset.filename}
			alt={alt ?? asset.alt ?? ''}
			width={width}
			height={height}
			sizes={sizes}
			priority={priority}
			className={className}
			style={style}
		/>
	);
}
