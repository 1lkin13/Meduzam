import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meduzam Pub and Lounge',
  description: 'Meduza Pub and Lounge – Central Asia\'s best beer, drinks and shisha experience.',
  generator: '1lkin13',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Meduzam Pub and Lounge</title>
        <meta name="description" content="Created with v0. Meduza Pub and Lounge – Central Asia's best beer, drinks and shisha experience." />
        <meta name="theme-color" content="#b45309" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        {/* Open Graph */}
        <meta property="og:title" content="Meduzam Pub and Lounge" />
        <meta property="og:description" content="Central Asia's best beer, drinks and shisha experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meduzapub.com" />
        <meta property="og:image" content="/logo.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meduzam Pub and Lounge" />
        <meta name="twitter:description" content="Central Asia's best beer, drinks and shisha experience." />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
