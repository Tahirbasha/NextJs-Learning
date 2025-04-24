"use client";
export default function ErrorBoundary({
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <h1>{error.message}</h1>
      </body>
    </html>
  );
}
