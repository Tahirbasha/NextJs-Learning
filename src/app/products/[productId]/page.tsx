export default async function ProductsById({params, searchParams} : {params: Promise<{productId: string}>,
searchParams: Promise<{test: string}>}) {
    const {productId} = await params;
    const {test} = await searchParams;
    return <h1>ProductBy {productId}-{test}</h1>
};