"use client";
export default function GlobalErrorBoundary({
  error,
}: {
  error: Error;
}) {
  return (
    <html lang="en">
      <body>
        <h1>{error.message}</h1>
        <button>Try Again</button>
      </body>
    </html>
  );
}
