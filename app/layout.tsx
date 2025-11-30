import type { Metadata } from 'next';
import ThemeRegistry from '../components/ThemeRegistry.tsx';

export const metadata: Metadata = {
  title: 'Next.js on Deno',
  description: 'Deploy your Next.js application to Deno Deploy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
