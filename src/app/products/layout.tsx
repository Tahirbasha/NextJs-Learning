
export default async function AboutLayout({
    children,
    params
  }: Readonly<{
    children: React.ReactNode;
    params: Promise<{productId: string}>,
    searchParams: Promise<{test: string}>
  }>) {
    const {productId} = await params;
    // const {test} = await searchParams;
    return (
      <html lang="en">
        <body>
          <header style={{padding: '20px', background: 'red'}}>
            Header - {productId} - {}
          </header>
          {children}
          <footer style={{padding: '10px', background: 'blue'}}>Footer</footer>
        </body>
      </html>
    );
  }
  