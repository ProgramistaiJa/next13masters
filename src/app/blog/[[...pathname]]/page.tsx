export default async function BlogPage({ params }: { params: { pathname: string[] } }) {
	const pathname = params.pathname?.join("/");
	return <div>Blog Page {pathname}</div>;
}
