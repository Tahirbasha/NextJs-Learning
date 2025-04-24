export default async function AboutLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ productId: string }>;
}>) {
  const { productId } = await params;
  // const simulateError = () => {
  //   const randomNumber = Math.floor(Math.random() * 2);
  //   console.log("randomNumber: ", randomNumber);
  //   if (randomNumber === 1) {
  //     throw new Error("Customised Error Message");
  //   }
  // };
  // simulateError();
  // const {test} = await searchParams;
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "20px", background: "red" }}>
          Header - {productId} - {}
        </header>
        {children}
        <footer style={{ padding: "10px", background: "blue" }}>Footer</footer>
      </body>
    </html>
  );
}
