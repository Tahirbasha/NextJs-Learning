"use client";
import { use, useState } from "react";

export default function ReviewById({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const { reviewId } = use(params);
  const [isError, simulateError] = useState(false);

  if (isError) {
    throw new Error("Customised Error Message");
  }
  console.log("Review Component");
  return (
    <>
      <h1>Review {reviewId}</h1>
      <button onClick={() => simulateError(true)}>Simulate Error</button>
    </>
  );
}
