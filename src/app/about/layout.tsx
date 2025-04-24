
export default function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{padding: '20px', background: 'beige'}}>
          Header
        </header>
        {children}
        <footer style={{padding: '10px', background: 'ghostWhite'}}>Footer</footer>
      </body>
    </html>
  );
}
