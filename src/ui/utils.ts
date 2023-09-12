export const products = [
	{
		name: "Koszula",
		category: "Ubranie",
		producer: "Nike",
		price: 120,
		coverImage: {
			src: "https://npstyle.pl/18065-large_default/meska-koszula-lniana-ze-stojka.jpg",
			alt: "Koszula",
		},
	},
	{
		name: "Koszula",
		category: "Ubranie",
		producer: "Nike",
		price: 120,
		coverImage: {
			src: "https://npstyle.pl/18065-large_default/meska-koszula-lniana-ze-stojka.jpg",
			alt: "Koszula",
		},
	},
];

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(price);
};
