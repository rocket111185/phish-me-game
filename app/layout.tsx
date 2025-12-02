import type { Metadata } from 'next';
import ThemeRegistry from '../components/ThemeRegistry.tsx';

export const metadata: Metadata = {
  title: 'Phish Me!',
  description: 'A game intended to educate on phishing techniques in a fun and entertaining way',
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
