import { Grotesk } from "@/libs/font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


import "./globals.css";

export const metadata = {
  title: 'Naufal Rizky',
  description: 'Personal website and portfolio of Naufal Rizky - Software Developer',
  keywords: ['Naufal Rizky', 'Software Developer', 'Web Developer', 'Portfolio'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Naufal Rizky</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${Grotesk.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
