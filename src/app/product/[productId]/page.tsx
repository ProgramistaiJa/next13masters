// example path: /product/123?referral=PROGRAMISTA_I_JA&promoId=999&promoId=101

export default function SingleProductPage({
	params: { productId },
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	// console.log("searchParams", searchParams);
	const referral = searchParams.referral?.toString();
	const promoId = searchParams.promoId?.toString();

	return (
		<div>
			Single Product Page
			<p>ProductId: {productId}</p>
			{referral && <p>Referral: {referral}</p>}
			{promoId && <p>PromoId: {promoId}</p>}
		</div>
	);
}
