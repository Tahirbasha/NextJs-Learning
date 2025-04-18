export default async function ReviewById({params} : {params: Promise<{reviewId: string}>}) {
    const {reviewId} = await params;
    return <h1>Review {reviewId}</h1>
};