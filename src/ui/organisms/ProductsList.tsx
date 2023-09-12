import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductList } from "../types";

export const ProductsList = ({ products }: { products: ProductList }) => {
	return (
		<ul className="flex h-full w-full items-center justify-center gap-8 md:max-w-4xl lg:max-w-7xl">
			{products.map((product) => (
				<ProductListItem key={product.name} product={product} />
			))}
		</ul>
	);
};
