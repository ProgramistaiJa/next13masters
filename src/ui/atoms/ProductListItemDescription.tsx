import { formatPrice } from "../utils";

type ProductListItemDescriptionProps = {
	product: {
		name: string;
		category: string;
		producer: string;
		price: number;
	};
};

export const ProductListItemDescription = ({
	product: { name, category, producer, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div>
			<h3>{name}</h3>
			<p>
				<span>Kategoria:</span> {category}
			</p>
			<p>
				<span>Producent:</span> {producer}
			</p>
			<p>
				<span>Cena:</span> {formatPrice(price)}
			</p>
		</div>
	);
};
