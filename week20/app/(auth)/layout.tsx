export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
        <h2>HEADER</h2>
          {children}
        <h2>FOOTER</h2>
        </body>
      </html>
    );
  }
  