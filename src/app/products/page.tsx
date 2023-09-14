import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { products } from "@/ui/utils";

export default function ProductsPage() {
	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<section className="flex items-center justify-center p-12">
				<ProductsList products={products} />
				<ProductCounter />
			</section>
		</main>
	);
}
