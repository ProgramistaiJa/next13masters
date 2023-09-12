import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type Product } from "../types";

export const ProductListItem = ({ product }: { product: Product }) => {
	return (
		<li>
			<article>
				<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductListItemDescription
					product={{
						name: product.name,
						category: product.category,
						producer: product.producer,
						price: product.price,
					}}
				/>
			</article>
		</li>
	);
};
