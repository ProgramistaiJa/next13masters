import Image from "next/image";

export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className=" aspect-square overflow-hidden bg-blue-400 p-12 hover:bg-blue-900">
			<Image
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full w-full object-cover p-4"
			/>
		</div>
	);
};
