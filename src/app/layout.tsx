import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Quiz App for Global Information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Toaster position='top-left' />
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
