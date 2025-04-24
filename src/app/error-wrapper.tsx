"use client";
import { useState } from "react";

export default function ErrorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isError, setIsError] = useState(false);
  if (isError) {
    throw new Error("customised global error");
  }
  return (
    <>
      {children}
      <button onClick={() => setIsError(true)}>Simuate error</button>;
    </>
  );
}
