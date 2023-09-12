export type Product = {
	name: string;
	category: string;
	producer: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
};

export type ProductList = Product[];
